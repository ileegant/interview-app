export interface IQuestion {
  id: number;
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
  isLearned: boolean;
}
