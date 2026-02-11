import { useState } from "react";
import type { IQuestion } from "./types";
import { QuestionCard } from "./components/QuestionCard";

const initialQuestion: IQuestion[] = [
  {
    id: 1,
    question: "This is a question!",
    answer: "This is an answer!",
    difficulty: "easy",
    isLearned: false,
  },
  {
    id: 2,
    question: "This is a second question!",
    answer: "This is a second answer!",
    difficulty: "easy",
    isLearned: false,
  },
];

function App() {
  const [question, setQuestion] = useState<IQuestion[]>(initialQuestion);

  const toggleStatus = (id: number) => {
    setQuestion((prev) =>
      prev.map((q) => (q.id === id ? { ...q, isLearned: !q.isLearned } : q))
    );
  };

  return (
    <div>
      <h1>My Interview</h1>
      {question.map((q) => (
        <QuestionCard key={q.id} data={q} onToggle={toggleStatus} />
      ))}
    </div>
  );
}

export default App;
