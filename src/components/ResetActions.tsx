interface ResetActionsProps {
  onResetProgress: () => void;
  onResetToSeed: () => void;
}

export default function ResetActions({
  onResetProgress,
  onResetToSeed,
}: ResetActionsProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <button
        onClick={onResetProgress}
        className="text-xs text-rose-300 hover:text-rose-500 underline cursor-pointer"
      >
        Reset progress
      </button>
      <button
        onClick={onResetToSeed}
        className="text-xs text-rose-300 hover:text-rose-500 underline cursor-pointer"
      >
        Reset to default questions
      </button>
    </div>
  );
}
