import { renderEntries } from "./utils/renderEntries";

{
  document.addEventListener("DOMContentLoaded", async () => {
    const tbodyElement =
      document.querySelector<HTMLTableSectionElement>("#table tbody");

    if (!tbodyElement) throw `Table body element not found.`;

    await renderEntries(tbodyElement);
  });
}
