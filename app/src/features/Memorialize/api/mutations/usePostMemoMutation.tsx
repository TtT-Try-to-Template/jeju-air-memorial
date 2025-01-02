import { useMutation } from "@tanstack/react-query";
import { createMemorial } from "@/features/Memorialize/api";
import { queryClient } from "@/shared/client";
import { apiKey } from "@/shared/utils";

const usePostMemoMutation = () =>
  useMutation({
    mutationFn: createMemorial,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [apiKey.getMemories, apiKey.getMemorialTotalCount] });
    },
  });

export default usePostMemoMutation;
