import { config } from "./consts/config";
import type { Entry } from "./types/Entry";

{
  const { storageKey } = config;

  const findParentButton = (element: HTMLElement): HTMLElement | undefined => {
    if (element.parentElement.nodeName === "BUTTON") return element.parentElement;

    if (element.parentElement) return findParentButton(element.parentElement);

    return undefined;
  };
  
  let startDateTime: string | undefined;

  const observer = new MutationObserver(() => {
    const endOfCallIcon = Array.from(document.querySelectorAll("i")).find((e) => e.innerText === "call_end");

    if (!endOfCallIcon) return;

    const endOfCallButton = findParentButton(endOfCallIcon.parentElement);

    if (!endOfCallButton) throw "End of call button not found";

    startDateTime = new Date().toISOString()

    const titleElement = document.querySelector("[data-meeting-title]");
    
    const meetId = location.pathname.replace("/", "");

    endOfCallButton.addEventListener("click", async () => {
      const entry: Entry = {
        id: crypto.randomUUID(),
        title: titleElement ? titleElement.getAttribute('data-meeting-title').trim() : meetId,
        meetId: meetId,
        startDateTime,
        endDateTime: new Date().toISOString(),
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

  observer.observe(document.body, {
    attributes: false,
    childList: true,
    subtree: true,
  });
}
