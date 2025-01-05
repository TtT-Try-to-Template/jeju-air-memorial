import { Button, Typo } from "@/shared/ui";
import ments from "./constants";

type Props = {
  onClickMent: (ment: string) => void;
};

export default function Recommendation({ onClickMent }: Props) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        <Typo size="lg" className="font-bold">한 줄 문구</Typo>
        <Typo size="md">카드를 터치하여 문구를 자동완성 할 수 있습니다.</Typo>
      </div>
      <div className="flex flex-col gap-y-2 my-3 max-h-[120px] overflow-y-scroll">
        {ments.map((ment, idx) => (
          <Button key={idx} onClick={() => onClickMent(ment)}>
            {ment}
          </Button>
        ))}
      </div>

    </div>
  );
}