const STATUS_OPTIONS = ["all", "to-learn", "learned"] as const;

type FilterStatusType = (typeof STATUS_OPTIONS)[number];

interface FilterStatusProps {
  filterStatus: FilterStatusType;
  setFilterStatus: (val: FilterStatusType) => void;
}

const STATUS_LABELS: Record<FilterStatusType, string> = {
  all: "Show All",
  "to-learn": "To Learn",
  learned: "Mastered",
};

export default function FilterStatus({
  filterStatus,
  setFilterStatus,
}: FilterStatusProps) {
  return (
    <select
      value={filterStatus}
      onChange={(e) => setFilterStatus(e.target.value as FilterStatusType)}
      className="text-xs font-bold text-slate-600 bg-transparent border-none outline-none cursor-pointer hover:text-slate-900 transition-colors"
    >
      {STATUS_OPTIONS.map((status) => (
        <option key={status} value={status}>
          {STATUS_LABELS[status]}
        </option>
      ))}
    </select>
  );
}
