import { MOOD_EVENT_TYPE } from "../../prisma/mood";
import {
  firstId as firstCareRecipientId,
  mockMoodEvents,
  prismaMock,
} from "../../prisma/prismaMock";
import { prisma } from "../../prisma";

test("should get all moods when care_recipient_id is not provided ", async () => {
  prismaMock.events.findMany.mockResolvedValue(mockMoodEvents);

  await expect(
    prisma.events.findMany({
      where: {
        event_type: MOOD_EVENT_TYPE,
        care_recipient_id: undefined,
      },
    })
  ).resolves.toEqual(mockMoodEvents);
});

test("should get moods for one person when care_recipient_id is provided ", async () => {
  prismaMock.events.findMany.mockResolvedValue([mockMoodEvents[0]]);

  await expect(
    prisma.events.findMany({
      where: {
        event_type: MOOD_EVENT_TYPE,
        care_recipient_id: firstCareRecipientId,
      },
    })
  ).resolves.toEqual([mockMoodEvents[0]]);
});

test("should fail if id isn't present in the DB", async () => {
  const fakeId = "ha-ha-ha-ha-i-break";

  await expect(
    prisma.events.findMany({
      where: {
        event_type: MOOD_EVENT_TYPE,
        care_recipient_id: fakeId,
      },
    })
  ).toEqual({ error: "message here?" });
});
