import type { Entry } from "../types/Entry";
import { calculateDuration } from "./calculateDuration";

export const mapEntry = (entry: Entry, index: number): string => {
  const endDateTime = new Date(entry.endDateTime);
  const startDate = new Date(entry.startDateTime);

  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

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
      ${startDate.toLocaleDateString()}
      ${startDate.toLocaleTimeString(undefined, timeFormat)}
    </td>
    <td>
      ${endDateTime.toLocaleTimeString(undefined, timeFormat)}
    </td>
    <td>
      ${calculateDuration(endDateTime, startDate)}
    </td>
    <td>
      <button type="button" data-index="${index}">
        🗑️
      </button>
    </td>
    </tr>
  `;
};
