import { config } from "./consts/config";
import type { Entry } from "./types/Entry";

{
  const { storageKey } = config;

  const endButtonCallSelector = "button[aria-label='Opuść rozmowę']";

  const observer = new MutationObserver(() => {
    const endOfCallButton = document.querySelector<HTMLButtonElement>(endButtonCallSelector);

    if (!endOfCallButton) return;

    endOfCallButton.addEventListener("click", async () => {
      const entry: Entry = {
        meetId: location.pathname,
        dateTime: new Date().toISOString(),
      };

      const entries = await chrome.storage.local.get(storageKey);

      if (!entries[storageKey]) {
        await chrome.storage.local.set({ [storageKey]: [entry] });
        return;
      }

      entries[storageKey].push(entry);

      await chrome.storage.local.set({ [storageKey]: entries[storageKey] });
    });

    observer.disconnect();
  });

  observer.observe(document.body, { attributes: false, childList: true, subtree: true });
}
