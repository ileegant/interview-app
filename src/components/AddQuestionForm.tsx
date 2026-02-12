import { useState } from "react";
import { QuestionSchema, type IQuestion } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";

interface Props {
  onAdd: (newQuestion: IQuestion) => void;
}

export const AddQuestionForm = ({ onAdd }: Props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IQuestion>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      id: crypto.randomUUID(),
      question: "",
      answer: "",
      difficulty: "easy",
      category: "",
      subCategory: "",
      isLearned: false,
    },
  });

  const onSubmit = (data: IQuestion) => {
    onAdd({ ...data, id: crypto.randomUUID(), isLearned: false });
    reset();
    setIsFormVisible(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`bg-slate-50 rounded-2xl border border-slate-200 ${
        !isFormVisible && "hover:bg-slate-100"
      } flex flex-col gap-4 shadow-inner`}
    >
      <button type="button" onClick={() => setIsFormVisible(!isFormVisible)}>
        <div className="flex justify-between p-6 cursor-pointer">
          <h2 className="text-xl font-bold text-slate-800">Add New Question</h2>
          {isFormVisible ? <X size={20} /> : <Plus size={20} />}
        </div>
      </button>

      {isFormVisible && (
        <div className="flex flex-col gap-4 px-6 pb-6">
          <input
            {...register("question")}
            className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Question text..."
          />

          <textarea
            {...register("answer")}
            className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none min-h-25"
            placeholder="Answer..."
          />

          <div className="flex gap-4">
            <input
              {...register("category")}
              className="flex-1 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Category (React, TS)"
            />
            <input
              {...register("subCategory")}
              className="flex-1 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Subcategory..."
            />
          </div>

          <div className="flex gap-4">
            <select
              {...register("difficulty")}
              className="flex-1 p-3 rounded-lg border border-slate-300 bg-white"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <button
              type="submit"
              className="flex-2 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              + Add Question
            </button>
          </div>

          <div className="flex justify-center pt-2">
            {Object.keys(errors).length > 0 ? (
              <p className="text-rose-500 text-sm font-medium">
                {Object.keys(errors)[0]}
              </p>
            ) : (
              <p className="text-slate-400 text-sm">
                Tip: Don't just memorize. Try to explain the concept out loud in
                your own words.
              </p>
            )}
          </div>
        </div>
      )}
    </form>
  );
};
