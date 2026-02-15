import type { TabType } from "../types";

interface TabProps {
  selectedTab: TabType;
  setSelectedTab: (val: TabType) => void;
}

const TABS: { id: TabType; label: string }[] = [
  { id: "questions", label: "Questions" },
  { id: "quiz", label: "Quiz" },
];

export default function Tab({ selectedTab, setSelectedTab }: TabProps) {
  return (
    <div className="text-sm font-medium text-center text-body">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-body">
        {TABS.map((tab) => {
          const isActive = selectedTab === tab.id;

          return (
            <li key={tab.id} className="me-2">
              <button
                onClick={() => setSelectedTab(tab.id)}
                className={`inline-flex items-center justify-center p-2 rounded-t-base hover:text-blue-400 hover:border-blue-400 group cursor-pointer ${
                  isActive
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 border-b-2 border-transparent"
                }`}
              >
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
