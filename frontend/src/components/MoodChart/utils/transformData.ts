import { MoodRecord, Uuid } from "../../../types";
import { timestampToHumanReadableDate } from "./dateUtils";
import { moodToNumber } from "./moodNumberConverters";

export type MoodAsNumber = -1 | 0 | 1;

export type TransformedData = {
  id: Uuid;
  date: string;
  mood: MoodAsNumber;
};

/** ticks for the Y Axis in the chart */
export const ticks: MoodAsNumber[] = [-1, 0, 1];
/*
Since the current charting library deals with numbers on the Y axis, we need to transform
the data to match what the library expects + the readable mood
values (good | okay | bad) into corresponding numbers (2 | 1 | 0)
*/
export function transformMoodData(
  moodRecords: MoodRecord[]
): TransformedData[] {
  const moodDatum = moodRecords.map(({ id, mood, timestamp }) => ({
    id,
    mood: moodToNumber(mood),
    date: timestampToHumanReadableDate(timestamp),
  }));
  return moodDatum;
}
