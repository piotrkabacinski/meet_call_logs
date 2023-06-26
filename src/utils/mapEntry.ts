import type { Entry } from "../types/Entry";

export const mapEntry = (entry: Entry, index: number): string => {
  const endDateTime = new Date(entry.endDateTime);

  return `<tr>
    <td class="title">
      <a
        href="https://meet.google.com/${entry.meetId}"
        target="_blank"
        ref="noopener noreferrer"
      >
        ${entry.title}
      </a>
    </td>
    <td>
      ${endDateTime.toLocaleDateString()}
      ${endDateTime.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </td>
    <td>
      <button type="button" data-index="${index}">
        🗑️
      </button>
    </td>
    </tr>
  `;
};
