import Layout from "@/features/Layout";
import BlackRibbonLg from "@/assets/black-ribbon-lg.svg";
import { Typo } from "@/shared/ui";
import { useSessionStorage } from "usehooks-ts";
import { useEffect } from "react";

type Props = {
  onLand: () => void;
}

export default function Landing({ onLand }: Props) {
  const [_, setLandingDone] = useSessionStorage("landing", false);

  useEffect(() => {
    setTimeout( () => {
      setLandingDone(true);
      onLand();
    }, 3000);
  }, []);

  return (
    <Layout hide={{ header: true }}>
      {/*<div className="flex flex-col gap-y-12 items-center mt-[80px] md:mt-[280px] flex-1 transition animate-out fade-out-25 duration-700">*/}
      <div className="flex flex-col gap-y-12 items-center mt-[80px] md:mt-[280px] flex-1">
        <BlackRibbonLg />
        <div className="flex flex-col text-center">
          <Typo fontStyle="normal" size="lg">깊은 슬픔에 함께하며,</Typo>
          <Typo fontStyle="normal" size="lg">사랑하는 이들의 평안을 진심으로 기원합니다.</Typo>
        </div>
      </div>

      <div className="flex justify-center">
        <Typo size="xl">제주항공 기억과 추모의 공간</Typo>
      </div>
    </Layout>
  );
}
