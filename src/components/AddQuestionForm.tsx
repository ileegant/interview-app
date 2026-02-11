import React, { useState } from "react";
import { QuestionSchema, type IQuestion } from "../types";

interface Props {
  onAdd: (newQuestion: IQuestion) => void;
}

export const AddQuestionForm = ({ onAdd }: Props) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [difficulty, setDifficulty] = useState<IQuestion["difficulty"]>("easy");
  const [error, setError] = useState<string | null>("");

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const validation = QuestionSchema.safeParse({
      id: crypto.randomUUID(),
      question,
      answer,
      difficulty,
      isLearned: false,
    });

    if (!validation.success) {
      setError(validation.error.issues[0].message);
      return;
    }

    onAdd(validation.data);
    setQuestion("");
    setAnswer("");
    setDifficulty("easy");
    setError(null);
    setIsFormVisible(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col gap-4 shadow-inner"
    >
      <div className="flex justify-between">
        <h2 className="text-xl font-bold text-slate-800">Add New Question</h2>
        <button type="button" onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? "✕" : "+"}
        </button>
      </div>

      {isFormVisible && (
        <>
          <input
            className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Question text..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <textarea
            className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none min-h-25"
            placeholder="Answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <div className="flex gap-4">
            <select
              className="flex-1 p-3 rounded-lg border border-slate-300 bg-white"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as any)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <button
              type="submit"
              className="flex-2 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200"
            >
              Add Question
            </button>
          </div>

          {error && (
            <p className="text-rose-500 text-sm font-medium">{error}</p>
          )}
        </>
      )}
    </form>
  );
};
