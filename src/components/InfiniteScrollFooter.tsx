import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

interface InfiniteScrollFooterProps {
  isVisible: boolean;
  isEndReached: boolean;
}

const InfiniteScrollFooter = forwardRef<
  HTMLDivElement,
  InfiniteScrollFooterProps
>(({ isVisible, isEndReached }, ref) => {
  if (!isVisible) return null;

  return (
    <div className="pt-6">
      {isEndReached ? (
        <div className="flex justify-center text-slate-400 italic text-center">
          You reached THE END. Stop scrolling and start coding. <br />
          The Senior position won't grab itself.
        </div>
      ) : (
        <div ref={ref} className="flex justify-center">
          <Loader2 className="w-8 h-8 text-slate-300 animate-spin" />
        </div>
      )}
    </div>
  );
});

InfiniteScrollFooter.displayName = "InfiniteScrollFooter";

export default InfiniteScrollFooter;
