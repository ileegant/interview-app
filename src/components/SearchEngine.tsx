import { Search } from "lucide-react";

interface SearchEngineProps {
  query: string;
  setQuery: (val: string) => void;
}

export default function SearchEngine({ query, setQuery }: SearchEngineProps) {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-slate-400" />
      </div>
      <input
        type="text"
        placeholder="Search questions by title or categories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-700"
      />
    </div>
  );
}
