import { useEffect, useRef } from "react";

interface useInfiniteScrollProps {
  incrementVisibleCount: () => void;
  isEndReached: boolean;
}

export default function useInfiniteScroll({
  incrementVisibleCount,
  isEndReached,
}: useInfiniteScrollProps) {
  const bottomObserverTarget = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isEndReached) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isEndReached) {
          incrementVisibleCount();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = bottomObserverTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [isEndReached]);

  return bottomObserverTarget;
}
