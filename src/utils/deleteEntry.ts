import type { Entry } from "../types/Entry";
import { config } from "../consts/config";

export const deleteEntry = async (
  entries: Entry[],
  index: string
): Promise<Entry[]> => {
  entries.splice(Number(index), 1);

  await chrome.storage.local.set({ [config.storageKey]: entries });

  return entries;
};
