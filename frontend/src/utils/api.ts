import { MoodRecord, Uuid } from "../types";

/**
 * fetches mood data for a given Elder
 */
const API_URL = process.env.REACT_APP_API;

export async function getCareRecipientMood(
  recipientId?: Uuid
): Promise<{ data: MoodRecord[] }> {
  if (!API_URL) throw new Error("Hey hey, you forgot to add env variables 🙈");

  const aggregatedURL = `${API_URL}mood_observations${
    recipientId ? `?recipientId=${recipientId}` : ""
  }`;

  const response = await fetch(aggregatedURL);
  const data = await response.json();

  console.log({ data });
  return data as { data: MoodRecord[] };
}

export async function getCareRecipientIds() {
  if (!API_URL) throw new Error("Hey hey, you forgot to add env variables 🙈");

  const aggregatedURL = `${API_URL}mood_observation_recipients`;

  const response = await fetch(aggregatedURL);
  const data = await response.json();

  console.log({ data });
  return data as { data: Uuid[] };
}
