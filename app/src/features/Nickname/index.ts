import { nanoid } from "nanoid";

export const ANONYMOUS_NICKNAMES = [
  "따뜻한 마음",
  "익명의 시민",
  "기억의 등불",
] as const;

export const getRandomItem = <T>(array: readonly T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const generateRandomNickname = (): string => getRandomItem(ANONYMOUS_NICKNAMES) + `_${nanoid(2)}`;

export default generateRandomNickname;
