import { MoodRecord } from "../../../../types";
import { TransformedData, transformMoodData } from "../transformData";

const partialMood: Omit<MoodRecord, "mood"> = {
  id: "a-b-c-d-e",
  event_type: "mood_observation",
  visit_id: "a-b-c-d-e",
  timestamp: "2019-04-03T10:53:13+01:00",
  caregiver_id: "a-b-c-d-e",
  care_recipient_id: "a-b-c-d-e",
};

const sampleGoodMood: MoodRecord = {
  ...partialMood,
  mood: "happy",
};
const sampleBadMood: MoodRecord = {
  ...partialMood,
  mood: "sad",
};
const sampleOkayMood: MoodRecord = {
  ...partialMood,
  mood: "okay",
};

const sampleMoodRecords: MoodRecord[] = [
  sampleBadMood,
  sampleOkayMood,
  sampleGoodMood,
];

describe("transformMoodData tests", () => {
  const expectedResult: TransformedData[] = [
    { id: "a-b-c-d-e", date: "3/4/2019", mood: -1 },
    { id: "a-b-c-d-e", date: "3/4/2019", mood: 0 },
    { id: "a-b-c-d-e", date: "3/4/2019", mood: 1 },
  ];
  it("should return the same amount of entries", () => {
    expect(transformMoodData(sampleMoodRecords).length).toEqual(3);
  });
  it("should convert API data to a TransformedDatum type", () => {
    expect(transformMoodData(sampleMoodRecords)).toEqual(expectedResult);
  });
});
