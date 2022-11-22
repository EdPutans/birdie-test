import { moodToNumber, numberToCapitalisedMood } from "../moodNumberConverters";

describe("moodNumberConverters tests", () => {
  it("moodToNumber should return correct number value given a mood", () => {
    expect(moodToNumber("sad")).toEqual(-1);
    expect(moodToNumber("okay")).toEqual(0);
    expect(moodToNumber("happy")).toEqual(1);
  });
  it("numberToCapitalisedMood should return correct mood  given a tick value", () => {
    expect(numberToCapitalisedMood(-1)).toEqual("Sad");
    expect(numberToCapitalisedMood(0)).toEqual("Okay");
    expect(numberToCapitalisedMood(1)).toEqual("Happy");
  });
});
