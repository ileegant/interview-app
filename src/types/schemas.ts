import { z } from "zod";

export const QuestionSchema = z.object({
  id: z.uuid(),
  question: z.string().min(10, "Question is too short!"),
  answer: z.string().min(20, "Answer is too short!"),
  difficulty: z.enum(["junior", "middle", "senior"]),
  category: z.string().min(1, "Select category"),
  subCategory: z.string().min(1, "Select subcategory"),
  isLearned: z.boolean(),
});

export type IQuestion = z.infer<typeof QuestionSchema>;
