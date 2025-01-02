import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { apiKey } from "@/shared/utils";
import { getMemories } from "@/features/Memorialize/api";

const useMemoriesQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [apiKey.getMemories],
    queryFn: ({ pageParam }) => {
      if (pageParam === -1) return { memorials: [], nextCursorId: -1 };
      return getMemories(pageParam);
    },
    initialPageParam: 0,
    getNextPageParam: last => last.nextCursorId,
    gcTime: 0,
    staleTime: 0,
  });
};

export default useMemoriesQuery;
