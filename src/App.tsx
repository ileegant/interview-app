import { useEffect, useState, lazy, Suspense } from "react";
import type { IQuestion, QuestionStatus, TabType } from "./types";
import { QuestionCard } from "./components/QuestionCard";
import { AddQuestionForm } from "./components/AddQuestionForm";
import { initialQuestions } from "./data/seed";
import SearchEngine from "./components/SearchEngine";
import Tab from "./components/Tab";
import FilterDifficulty from "./components/FilterDifficulty";
import FilterStatus from "./components/FilterStatus";
import LearningStats from "./components/LearningStats";
import InfiniteScrollFooter from "./components/InfiniteScrollFooter";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import ResetActions from "./components/ResetActions";
import useQuestionsActions from "./hooks/useQuestionsActions";
import EmptyState from "./components/EmptyState";

const MockInterview = lazy(() => import("./components/MockInterview"));

const LS_KEY = "interview_prep_questions_v1";

function App() {
  const [questions, setQuestions] = useState<IQuestion[]>(() => {
    const saved = localStorage.getItem(LS_KEY);
    return saved ? JSON.parse(saved) : initialQuestions;
  });

  const {
    handleAddQuestion,
    toggleStatus,
    deleteQuestion,
    resetToSeed,
    resetProgress,
  } = useQuestionsActions({ setQuestions });

  const [filterDifficulty, setFilterDifficulty] = useState<
    "all" | IQuestion["difficulty"]
  >("all");
  const [filterStatus, setFilterStatus] = useState<"all" | QuestionStatus>(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const [visibleCount, setVisibleCount] = useState(10);

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

  const isQuestionsEmpty = questions.length === 0;

  const isEndReached = visibleCount >= filteredQuestions.length;
  const showFooter = filteredQuestions.length > 0;

  useEffect(() => {
    setVisibleCount(10);
  }, [filterDifficulty, filterStatus, searchQuery]);

  const learnedCount = questions.filter((q) => q.isLearned).length;
  const totalCount = questions.length;

  const loaderRef = useInfiniteScroll({
    incrementVisibleCount: () => setVisibleCount((prev) => prev + 10),
    isEndReached,
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(questions));
  }, [questions]);

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
          <Suspense fallback={<div>Loading...</div>}>
            <MockInterview />
          </Suspense>
        ) : (
          <>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <LearningStats
                learnedCount={learnedCount}
                totalCount={totalCount}
              />
              <ResetActions
                onResetProgress={resetProgress}
                onResetToSeed={resetToSeed}
              />
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

              {isQuestionsEmpty || filteredQuestions.length === 0 ? (
                <EmptyState
                  message={
                    isQuestionsEmpty
                      ? "It's empty here. Time to add your first question!"
                      : "No questions match your filters. Try adjusting them!"
                  }
                />
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
                ref={loaderRef}
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
