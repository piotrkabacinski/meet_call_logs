import type { Entry } from "../types/Entry";

export const mapEntry = (entry: Entry, index: number): string => `<tr>
  <td>
    <code>${entry.meetId}</code>
  </td>
  <td>
    ${new Date(entry.dateTime).toLocaleDateString()}
    ${new Date(entry.dateTime).toLocaleTimeString()}
  </td>
  <td>
    <button type="button" data-index="${index}">
      🗑️
    </button>
  </td>
  </tr>
`;