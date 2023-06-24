import type { Entry } from "../types/Entry";
import { config } from "../consts/config";

export const deleteEntry = async (entries: Entry[], index: number): Promise<void> => {
  entries.splice(index, 1);

  await chrome.storage.local.set({ [config.storageKey]: entries });
}
