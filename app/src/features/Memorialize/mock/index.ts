import { Memorial } from "../types";

const args = {
  author: "익명의 추모자_a2",
  content: "사랑하는 이들을 떠나보낸 깊은 슬픔에 함께합니다. 당신들의 기억은 언제나 우리 마음속에 영원히 살아 숨 쉴 것입니다. 편안히 쉬시길 기원합니다.",
  createdAt: "2023-10-20T12:00:00",
}

const memorialMocks: Memorial[] = Array(100).fill(0).map((_, index) => ({
  ...args,
  id: index,
}));

export default memorialMocks;
