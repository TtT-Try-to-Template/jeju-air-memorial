import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { apiKey } from "@/shared/utils";
import { getMemories } from "@/features/Memorialize/api";

const useMemoriesQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [apiKey.getMemories],
    queryFn: ({ pageParam }) => getMemories(pageParam),
    initialPageParam: 0,
    getNextPageParam: last => last.nextCursorId,
  });
};

export default useMemoriesQuery;
