import { useEffect, useRef, useState } from "react";
import type { IQuestion, QuestionStatus, TabType } from "./types";
import { QuestionCard } from "./components/QuestionCard";
import { AddQuestionForm } from "./components/AddQuestionForm";
import { initialQuestions } from "./data/seed";
import SearchEngine from "./components/SearchEngine";
import MockInterview from "./components/MockInterview";
import Tab from "./components/Tab";
import FilterDifficulty from "./components/FilterDifficulty";
import FilterStatus from "./components/FilterStatus";
import LearningStats from "./components/LearningStats";
import InfiniteScrollFooter from "./components/InfiniteScrollFooter";

const LS_KEY = "interview_prep_questions_v1";

function App() {
  const [questions, setQuestions] = useState<IQuestion[]>(() => {
    const saved = localStorage.getItem(LS_KEY);
    return saved ? JSON.parse(saved) : initialQuestions;
  });

  const [filterDifficulty, setFilterDifficulty] = useState<
    "all" | IQuestion["difficulty"]
  >("all");
  const [filterStatus, setFilterStatus] = useState<"all" | QuestionStatus>(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const [visibleCount, setVisibleCount] = useState(10);

  const bottomObserverTarget = useRef(null);

  const [selectedTab, setSelectedTab] = useState<TabType>("questions");

  const filteredQuestions = questions.filter((q) => {
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

  const isEndReached = visibleCount >= filteredQuestions.length;
  const showFooter = filteredQuestions.length > 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isEndReached) {
          setVisibleCount((prev) => prev + 10);
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = bottomObserverTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [isEndReached]);

  useEffect(() => {
    setVisibleCount(10);
  }, [filterDifficulty, filterStatus, searchQuery]);

  const learnedCount = questions.filter((q) => q.isLearned).length;
  const totalCount = questions.length;

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

          <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>

        {selectedTab === "quiz" ? (
          <MockInterview />
        ) : (
          <>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <LearningStats
                learnedCount={learnedCount}
                totalCount={totalCount}
              />
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

            <AddQuestionForm onAdd={handleAddQuestion} />

            <div className="space-y-4 mt-14">
              <h1 className="text-5xl font-bold pb-4">
                Questions{" "}
                <span className="text-3xl">({filteredQuestions.length})</span>
              </h1>
              <SearchEngine query={searchQuery} setQuery={setSearchQuery} />

              <div className="flex gap-4">
                <FilterDifficulty
                  filterDifficulty={filterDifficulty}
                  setFilterDifficulty={setFilterDifficulty}
                />
                <FilterStatus
                  filterStatus={filterStatus}
                  setFilterStatus={setFilterStatus}
                />
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
              <InfiniteScrollFooter
                ref={bottomObserverTarget}
                isVisible={showFooter}
                isEndReached={isEndReached}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
