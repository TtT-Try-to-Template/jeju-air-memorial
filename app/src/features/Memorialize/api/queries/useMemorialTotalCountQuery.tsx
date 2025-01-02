import { useSuspenseQuery } from "@tanstack/react-query";
import { apiKey } from "@/shared/utils";
import { getMemorialTotalCount } from "@/features/Memorialize/api";

const useMemorialTotalCountQuery = () =>
  useSuspenseQuery({
    queryKey: [apiKey.getMemorialTotalCount],
    queryFn: getMemorialTotalCount,
  });

export default useMemorialTotalCountQuery;
