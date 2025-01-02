import { axiosClient } from "@/shared/client";
import { Memorial, PostMemorial } from "@/features/Memorialize";

type MemorialListDetails = {
  memorials: Memorial[];
  nextCursorId: number;
}

export const getMemories = (nextCursor?: number): Promise<MemorialListDetails> => {
  if (!nextCursor) {
    return axiosClient.get('/memorials');
  }
  return axiosClient.get(`/memorials?cursor=${nextCursor}`);
};

type MemorialCount = {
  count: number;
}

export const getMemorialTotalCount = (): Promise<MemorialCount> =>
  axiosClient.get('/memorials/count');

export const createMemorial = (memorial: PostMemorial): Promise<void> =>
  axiosClient.post('/memorials', memorial);

export * from "./queries";
export * from "./mutations";
