import { Router } from "express";
import { events } from "@prisma/client";
import { ResponseWrapper as R } from "../types";
import { getAllMoodRecordRecipients, getAllMoodRecords } from "../prisma/mood";

// NOTE: this could've been an entire event controller but we only care for mood in this exercise so here.
export const moodController = Router();

moodController.get(
  "/mood_observation_recipients",
  async (_, res: R<events["payload"][]>) => {
    try {
      const data = await getAllMoodRecordRecipients();

      return res.json({ data });
    } catch (e: any) {
      const message =
        "message" in e
          ? e.message
          : "Something went kablamo in moodController - get /mood_observations_recipients. investigate 🔎";
      res.status(400).json({ error: message });
      return;
    }
  }
);

moodController.get(
  "/mood_observations",
  async (req, res: R<events["payload"][]>) => {
    // if one is provided in the params - find data JUST for a given recipient ID
    const recipientId = req.query.recipientId as string | undefined;

    try {
      const data = await getAllMoodRecords(recipientId);

      return res.json({ data });
    } catch (e: any) {
      const message =
        "message" in e
          ? e.message
          : "Something went kablamo in moodController - get /mood_observations. investigate 🔎";
      res.status(400).json({ error: message });
      return;
    }
  }
);
