import type { IQuestion } from "../types";
import { initialQuestions } from "../data/seed";
import { useCallback } from "react";

interface useQuestionsActionsProps {
  setQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>;
}

export default function useQuestionsActions({
  setQuestions,
}: useQuestionsActionsProps) {
  const handleAddQuestion = useCallback(
    (newQuestion: IQuestion) => {
      setQuestions((prev) => [newQuestion, ...prev]);
    },
    [setQuestions]
  );

  const toggleStatus = useCallback(
    (id: string) => {
      setQuestions((prev) =>
        prev.map((q) => (q.id === id ? { ...q, isLearned: !q.isLearned } : q))
      );
    },
    [setQuestions]
  );

  const deleteQuestion = useCallback(
    (id: string) => {
      if (window.confirm("Delete this question?")) {
        setQuestions((prev) => prev.filter((q) => q.id !== id));
      }
    },
    [setQuestions]
  );

  const resetToSeed = useCallback(() => {
    if (
      window.confirm(
        "Reset all questions to default? Your questions will be lost."
      )
    ) {
      setQuestions(initialQuestions);
    }
  }, [setQuestions]);

  const resetProgress = useCallback(() => {
    if (
      window.confirm("Reset all progress? Your current progress will be lost.")
    ) {
      setQuestions((prev) => prev.map((q) => ({ ...q, isLearned: false })));
    }
  }, [setQuestions]);

  return {
    handleAddQuestion,
    toggleStatus,
    deleteQuestion,
    resetToSeed,
    resetProgress,
  };
}
