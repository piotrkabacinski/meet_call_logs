import type { Entry } from "../types/Entry";

export const mapEntry = (entry: Entry, index: number): string => {
  const endDateTime = new Date(entry.endDateTime);

  return `<tr>
    <td class="title">
      <code>${entry.title || entry.meetId}</code>
    </td>
    <td>
      ${endDateTime.toLocaleDateString()}
      ${endDateTime.toLocaleTimeString()}
    </td>
    <td>
      <button type="button" data-index="${index}">
        🗑️
      </button>
    </td>
    </tr>
  `;
};
