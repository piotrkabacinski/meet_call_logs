import { config } from "./consts/config";
import type { Entry } from "./types/Entry";

{
  const { storageKey } = config;

  let startDateTime: string | undefined;

  const observer = new MutationObserver(() => {
    const endOfCallButton = document.querySelector<HTMLButtonElement>(
      config.endButtonCallSelector
    );

    if (!endOfCallButton) return;

    startDateTime = new Date().toISOString()

    endOfCallButton.addEventListener("click", async () => {
      const entry: Entry = {
        id: crypto.randomUUID(),
        title: document.title.replace(config.pageTitlePrefix, "").trim(),
        meetId: location.pathname.replace("/", ""),
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
