import { prisma } from ".";
import { events } from "@prisma/client";

export const MOOD_EVENT_TYPE = "mood_observation";

export async function getAllMoodRecords(
  recipientId?: events["care_recipient_id"]
) {
  const values = await prisma.events.findMany({
    where: {
      event_type: MOOD_EVENT_TYPE,
      care_recipient_id: recipientId,
    },
    select: {
      payload: true,
    },
    orderBy: {
      timestamp: "asc",
    },
  });
  return values.map((i) => i.payload);
}

export async function getAllMoodRecordRecipients() {
  const values = await prisma.events.findMany({
    where: {
      event_type: MOOD_EVENT_TYPE,
    },
    select: {
      care_recipient_id: true,
    },
  });

  return values
    .reduce((acc: (string | null)[], obj) => {
      if (acc.includes(obj.care_recipient_id)) return acc;
      acc.push(obj.care_recipient_id);
      return acc;
    }, [])
    .filter((item) => item !== null);
}
