import { Mood } from "../../../types";

export const GOOD_MOOD_COLOR = "#42f57e";
export const BAD_MOOD_COLOR = "#f56042";
export const OKAY_MOOD_COLOR = "#f5e342";

/* colors corresponding to each mood type */
const moodColors: { [K in Mood]: `#${string}` } = {
  sad: BAD_MOOD_COLOR,
  happy: GOOD_MOOD_COLOR,
  okay: OKAY_MOOD_COLOR,
};

/**
 * Returns a hex color key for a given mood
 */
export function getColorForMood(mood: Mood) {
  return moodColors[mood];
}
