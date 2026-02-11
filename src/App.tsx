import { useEffect, useState } from "react";
import type { IQuestion } from "./types";
import { QuestionCard } from "./components/QuestionCard";
import { AddQuestionForm } from "./components/AddQuestionForm";

const LS_KEY = "interview_prep_questions_v1";

function App() {
  const [questions, setQuestions] = useState<IQuestion[]>(() => {
    const saved = localStorage.getItem(LS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(questions));
  }, [questions]);

  const handleAddQuestion = (newQuestion: IQuestion) => {
    setQuestions((prev) => [newQuestion, ...prev]);
  };

  const toggleStatus = (id: string) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, isLearned: !q.isLearned } : q))
    );
  };

  const deleteQuestion = (id: string) => {
    if (window.confirm("Delete this question?")) {
      setQuestions((prev) => prev.filter((q) => q.id !== id));
    }
  };

  return (
    <div>
      <h1>My Interview</h1>
      <AddQuestionForm onAdd={handleAddQuestion} />
      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          data={q}
          onToggle={toggleStatus}
          onDelete={deleteQuestion}
        />
      ))}
    </div>
  );
}

export default App;
