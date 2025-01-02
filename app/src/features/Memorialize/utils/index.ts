import dayjs from "dayjs";

export const getComputedTime = (time: string) => {
  const origin = dayjs(time);
  const now = dayjs();

  const diffHours = Math.abs(now.diff(origin, "hour"));

  if (diffHours < 1) {
    return `${Math.abs(now.diff(origin, "minute"))}분 전`;
  }

  const diffDays = Math.abs(now.diff(origin, "day"));

  if (diffDays  < 1) {
    return `${diffHours}시간 전`;
  }

  if (diffDays < 8) {
    return `${diffDays}일 전`;
  }

  return origin.format("YYYY.MM.DD");
};
