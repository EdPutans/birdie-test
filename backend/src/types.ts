import { Response } from "express";

export type ResponseWrapper<T> = Response<{ data: T } | { error: string }>;

export type MoodQParams = { recipientId: string };
