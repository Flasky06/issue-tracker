import { z } from "zod";

export const createIssuesSchema = z.object({
  title: z.string().min(1, "Title is requied").max(255),
  description: z.string().min(1, "Required"),
});
