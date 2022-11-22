import create from "zustand";
import { MoodRecord, Uuid } from "../types";
import { getCareRecipientIds, getCareRecipientMood } from "./api";

// hardcoded here, the ones I got access to in the API

type Store = {
  moodRecords: MoodRecord[];
  someRandomTestItem: number;
  recipientId: Uuid | null;
  recipientIds: Uuid[];
  fetchMoodForUserId: () => Promise<void>;
  fetchRecipientIds: () => Promise<void>;
  setRecipientId: (newRId: Uuid) => void;
};

export const useStore = create<Store>()((set, get) => ({
  moodRecords: [],
  someRandomTestItem: 3,
  recipientIds: [],
  recipientId: null,
  setRecipientId: (newRId: Uuid) => set({ recipientId: newRId }),
  fetchRecipientIds: async () => {
    const { data } = await getCareRecipientIds();
    set({ recipientIds: data });
  },
  fetchMoodForUserId: async () => {
    const { recipientId } = get();
    if (!recipientId) return;

    const { data } = await getCareRecipientMood(recipientId);
    set({ moodRecords: data });
  },
}));
