import type { IQuestion } from "../types";

export const initialQuestions: IQuestion[] = [
  {
    id: crypto.randomUUID(),
    question: "What is the difference between 'type' and 'interface'?",
    answer:
      "Interfaces are mostly for defining object shapes. Types can define primitives, unions, and tuples. Interfaces support merging, types don't.",
    difficulty: "medium",
    isLearned: false,
  },
];
