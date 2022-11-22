import { Mood } from "../../../types";
import { MoodAsNumber } from "./transformData";

export function numberToCapitalisedMood(value: MoodAsNumber): Capitalize<Mood> {
  if (value === 0) return "Okay";
  if (value === 1) return "Happy";
  return "Sad";
}

export function moodToNumber(mood: Mood): MoodAsNumber {
  if (mood === "happy") return 1;
  if (mood === "okay") return 0;
  return -1;
}
