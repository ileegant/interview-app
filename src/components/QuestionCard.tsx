import type { IQuestion } from "../types";

interface Props {
  data: IQuestion;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const QuestionCard = ({ data, onToggle, onDelete }: Props) => {
  return (
    <div className={`card ${data.difficulty}`}>
      <h3>{data.question}</h3>
      <button onClick={() => onToggle(data.id)}>
        {data.isLearned ? "In memory" : "Need to learn"}
      </button>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  );
};
