import {
  BAD_MOOD_COLOR,
  getColorForMood,
  GOOD_MOOD_COLOR,
  OKAY_MOOD_COLOR,
} from "../getColorForMood";

describe("getColorForMood tests", () => {
  it("returns a color for all moods", () => {
    expect(getColorForMood("sad")).toBe(BAD_MOOD_COLOR);
    expect(getColorForMood("okay")).toBe(OKAY_MOOD_COLOR);
    expect(getColorForMood("happy")).toBe(GOOD_MOOD_COLOR);
  });
});
