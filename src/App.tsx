import { useEffect, useState } from "react";
import type { IQuestion } from "./types";
import { QuestionCard } from "./components/QuestionCard";
import { AddQuestionForm } from "./components/AddQuestionForm";
import { initialQuestions } from "./data/seed";

const LS_KEY = "interview_prep_questions_v1";

function App() {
  const [questions, setQuestions] = useState<IQuestion[]>(() => {
    const saved = localStorage.getItem(LS_KEY);
    return saved ? JSON.parse(saved) : initialQuestions;
  });

  const learnedCount = questions.filter((q) => q.isLearned).length;
  const totalCount = questions.length;
  const progress =
    totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;

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
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            QA Interview <span className="text-blue-600">App</span>
          </h1>
          <p className="text-slate-500 mb-6">
            Your path to FullStack Developer
          </p>

          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex justify-between mb-2 text-sm font-medium text-slate-600">
              <span>Learning Progress:</span>
              <span>
                {progress}% ({learnedCount}/{totalCount})
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <AddQuestionForm onAdd={handleAddQuestion} />

        <div className="space-y-4 mt-8">
          {questions.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
              <p className="text-slate-400">
                It's empty here. Time to add your first question!
              </p>
            </div>
          ) : (
            questions.map((q) => (
              <QuestionCard
                key={q.id}
                data={q}
                onToggle={toggleStatus}
                onDelete={deleteQuestion}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
