import { useEffect, useRef, useState } from "react";
import type { IQuestion } from "./types";
import { QuestionCard } from "./components/QuestionCard";
import { AddQuestionForm } from "./components/AddQuestionForm";
import { initialQuestions } from "./data/seed";
import { Loader2 } from "lucide-react";

const LS_KEY = "interview_prep_questions_v1";

function App() {
  const [questions, setQuestions] = useState<IQuestion[]>(() => {
    const saved = localStorage.getItem(LS_KEY);
    return saved ? JSON.parse(saved) : initialQuestions;
  });

  const [filterDifficulty, setFilterDifficulty] = useState<
    IQuestion["difficulty"] | "all"
  >("all");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "learned" | "to-learn"
  >("all");

  const [visibleCount, setVisibleCount] = useState(10);

  const observerTarget = useRef(null);

  const filteredQuestions = questions.filter((q) => {
    const matchDifficulty =
      filterDifficulty === "all" || q.difficulty === filterDifficulty;
    const matchStatus =
      filterStatus === "all"
        ? true
        : filterStatus === "learned"
        ? q.isLearned
        : !q.isLearned;
    return matchDifficulty && matchStatus;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 10);
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [filteredQuestions]);

  useEffect(() => {
    setVisibleCount(10);
  }, [filterDifficulty, filterStatus]);

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

  const resetToSeed = () => {
    if (
      window.confirm(
        "Reset all questions to default? Your questions will be lost."
      )
    ) {
      setQuestions(initialQuestions);
    }
  };

  const resetProgress = () => {
    if (
      window.confirm("Reset all progress? Your current progress will be lost.")
    ) {
      setQuestions((prev) => prev.map((q) => ({ ...q, isLearned: false })));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-6xl font-extrabold text-slate-900 tracking-tight mb-2">
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
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={resetProgress}
                className="text-xs text-rose-300 hover:text-rose-500 underline cursor-pointer"
              >
                Reset progress
              </button>
              <button
                onClick={resetToSeed}
                className="text-xs text-rose-300 hover:text-rose-500 underline cursor-pointer"
              >
                Reset to default questions
              </button>
            </div>
          </div>
        </div>

        <AddQuestionForm onAdd={handleAddQuestion} />

        <div className="space-y-4 mt-14">
          <h1 className="text-5xl font-bold pb-4">
            Questions{" "}
            <span className="text-3xl">({filteredQuestions.length})</span>
          </h1>
          <div className="flex gap-4">
            <div className="flex gap-2">
              {["all", "junior", "middle", "senior"].map((d) => (
                <button
                  key={d}
                  onClick={() => setFilterDifficulty(d as any)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold capitalize cursor-pointer ${
                    filterDifficulty === d
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-500 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="text-xs font-bold text-slate-600 bg-transparent border-none outline-none cursor-pointer hover:text-slate-900 transition-colors"
            >
              <option value="all">Show All</option>
              <option value="to-learn">To Learn</option>
              <option value="learned">Mastered</option>
            </select>
          </div>
          {questions.length === 0 || filteredQuestions.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
              <p className="text-slate-400">
                {questions.length === 0
                  ? "It's empty here. Time to add your first question!"
                  : "No questions match your filters. Try adjusting them!"}
              </p>
            </div>
          ) : (
            filteredQuestions
              .slice(0, visibleCount)
              .map((q) => (
                <QuestionCard
                  key={q.id}
                  data={q}
                  onToggle={toggleStatus}
                  onDelete={deleteQuestion}
                />
              ))
          )}
          {visibleCount >= filteredQuestions.length ? (
            <div></div>
          ) : (
            <div
              ref={observerTarget}
              className="bottom-sentinel flex justify-center pt-6"
            >
              <Loader2 className="w-8 h-8 text-slate-300 animate-spin" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
