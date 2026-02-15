import { QuestionSchema } from "../types";

const ZOD_DIFFICULTIES = QuestionSchema.shape.difficulty.options;
const DIFFICULTIES = ["all", ...ZOD_DIFFICULTIES] as const;

type FilteredDifficultyType = (typeof DIFFICULTIES)[number];

interface FilterDifficultyProps {
  filterDifficulty: FilteredDifficultyType;
  setFilterDifficulty: (val: FilteredDifficultyType) => void;
}

export default function FilterDifficulty({
  filterDifficulty,
  setFilterDifficulty,
}: FilterDifficultyProps) {
  return (
    <div className="flex gap-2">
      {DIFFICULTIES.map((d) => {
        const isActive = filterDifficulty === d;
        return (
          <button
            key={d}
            onClick={() => setFilterDifficulty(d)}
            aria-pressed={isActive}
            className={`px-3 py-1 rounded-lg text-xs font-bold capitalize cursor-pointer ${
              isActive
                ? "bg-slate-900 text-white border-transparent shadow-md"
                : "text-slate-500 border border-slate-200 hover:border-slate-300"
            }`}
          >
            {d}
          </button>
        );
      })}
    </div>
  );
}
