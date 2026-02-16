interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
      <p className="text-slate-400">{message}</p>
    </div>
  );
}
