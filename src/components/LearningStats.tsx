interface LearningStatsProps {
  learnedCount: number;
  totalCount: number;
}

export default function LearningStats({
  learnedCount,
  totalCount,
}: LearningStatsProps) {
  const progress =
    totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;

  return (
    <>
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
    </>
  );
}
