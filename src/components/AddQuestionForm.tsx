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
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new QA to Interview:</h2>

      <input
        type="text"
        placeholder="Question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <textarea
        placeholder="Answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <select
        value={difficulty}
        onChange={(e) =>
          setDifficulty(e.target.value as IQuestion["difficulty"])
        }
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

      <button type="submit">Add QA to interview</button>
    </form>
  );
};
