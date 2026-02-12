import {
  CircleCheckBig,
  CircleDotDashed,
  GraduationCap,
  Trash,
} from "lucide-react";
import type { IQuestion } from "../types";

interface Props {
  data: IQuestion;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const QuestionCard = ({ data, onToggle, onDelete }: Props) => {
  const diffColors = {
    easy: "bg-emerald-50 text-emerald-700 border-emerald-100",
    medium: "bg-amber-50 text-amber-700 border-amber-100",
    hard: "bg-rose-50 text-rose-700 border-rose-100",
  };

  return (
    <div
      className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-md ${
        data.isLearned
          ? "bg-white/50 border-slate-100"
          : "bg-white border-slate-200 shadow-sm"
      }`}
    >
      <div className="flex flex-col justify-between items-start">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <span className="text-slate-500 font-bold flex gap-1">
              <CircleDotDashed className="w-4 text-slate-500" />
              {data.category}
            </span>
            <span className="text-sm text-slate-500">{data.subCategory}</span>
            <span
              className={`text-xs font-bold uppercase tracking-wider px-2 rounded-sm border ${
                diffColors[data.difficulty]
              }`}
            >
              {data.difficulty}
            </span>
          </div>
          <h3
            className={`text-lg font-bold mt-2 ${
              data.isLearned ? "text-slate-400 line-through" : "text-slate-800"
            }`}
          >
            {data.question}
          </h3>
          <div
            className={`mt-3 p-3 rounded-xl bg-slate-50 text-sm text-slate-600 leading-relaxed border border-slate-100 ${
              data.isLearned && "opacity-50"
            }`}
          >
            <span className="font-semibold text-slate-400 mr-2">A:</span>
            {data.answer}
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onToggle(data.id)}
            className={`w-24 h-8 rounded-sm flex gap-1 items-center justify-center cursor-pointer ${
              data.isLearned
                ? "bg-blue-500 text-white"
                : "bg-slate-100 text-slate-400 hover:bg-emerald-500 hover:text-white"
            }`}
          >
            {data.isLearned ? (
              <>
                <GraduationCap className="w-4" />
                <span>To Learn</span>
              </>
            ) : (
              <>
                <CircleCheckBig className="w-4" />
                <span>Mastered</span>
              </>
            )}
          </button>
          <button
            onClick={() => onDelete(data.id)}
            className="w-20 h-8 flex rounded-sm items-center justify-center cursor-pointer border text-rose-300 hover:text-rose-500"
          >
            <Trash className="w-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
