export type Uuid = `${string}-${string}-${string}-${string}-${string}`;
export type EventType = "mood_observation";
export type Mood = "okay" | "happy" | "sad";

export type MoodRecord = {
  id: Uuid;
  event_type: EventType;
  visit_id: Uuid;
  timestamp: string;
  caregiver_id: Uuid;
  care_recipient_id: Uuid;
  mood: Mood;
};
