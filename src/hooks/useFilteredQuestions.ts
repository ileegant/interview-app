import { useMemo } from "react";
import { QuestionSchema, type IQuestion } from "./../types/schemas";

const ZOD_DIFFICULTIES = QuestionSchema.shape.difficulty.options;
const DIFFICULTIES = ["all", ...ZOD_DIFFICULTIES] as const;

const STATUS_OPTIONS = ["all", "to-learn", "learned"] as const;
type FilterStatusType = (typeof STATUS_OPTIONS)[number];

interface useFilteredQuestionsProps {
  questions: IQuestion[];
  searchQuery: string;
  filterDifficulty: (typeof DIFFICULTIES)[number];
  filterStatus: FilterStatusType;
}

export default function useFilteredQuestions({
  questions,
  searchQuery,
  filterDifficulty,
  filterStatus,
}: useFilteredQuestionsProps) {
  return useMemo(() => {
    return questions.filter((q) => {
      const matchDifficulty =
        filterDifficulty === "all" || q.difficulty === filterDifficulty;

      const matchStatus =
        filterStatus === "all"
          ? true
          : filterStatus === "learned"
          ? q.isLearned
          : !q.isLearned;

      const searchString =
        `${q.question} ${q.category} ${q.subCategory}`.toLowerCase();
      const matchSearch = searchString.includes(searchQuery.toLowerCase());

      return matchDifficulty && matchStatus && matchSearch;
    });
  }, [questions, searchQuery, filterDifficulty, filterStatus]);
}
