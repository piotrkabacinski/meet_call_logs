import { config } from "../consts/config";
import type { Entry } from "../types/Entry";
import { deleteEntry } from "./deleteEntry";
import { mapEntry } from "./mapEntry";

export const renderEntries = async (tbodyElement: HTMLTableSectionElement): Promise<void> => {
  const storage = await chrome.storage.local.get(config.storageKey);

  const entries = storage[config.storageKey] as Entry[];

  if (!entries || !entries.length) {
    tbodyElement.innerHTML = `<tr>
      <td colspan="3">
        No entries available yet
      </td>
    </tr>`;

    return;
  };

  tbodyElement.innerHTML =
    entries
      .sort((a, b) => new Date(b.dateTime).getTime() - +new Date(a.dateTime).getTime())
      .map(mapEntry)
      .join("")

  const buttons = document.querySelectorAll<HTMLButtonElement>("button");

  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
      deleteEntry(entries, (e.target as any).dataset.index);
      renderEntries(tbodyElement);
    });
  });
}
