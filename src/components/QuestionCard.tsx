import type { IQuestion } from "../types";

interface Props {
  data: IQuestion;
  onToggle: (id: string) => void;
}

export const QuestionCard = ({ data, onToggle }: Props) => {
  return (
    <div className={`card ${data.difficulty}`}>
      <h3>{data.question}</h3>
      <button onClick={() => onToggle(data.id)}>
        {data.isLearned ? "In memory" : "Need to learn"}
      </button>
    </div>
  );
};
