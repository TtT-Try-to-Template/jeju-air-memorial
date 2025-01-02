import React from 'react';
import BlackRibbonMd from "@/assets/black-ribbon-md.svg";
import { Typo } from "@/shared/ui";
import { useNavigate } from "react-router";
import { urlPaths } from "@/features/Router";

type Props = {}

const Header: React.FC<Props> = () => {
  const navigate = useNavigate();

  const onClickHome = () => navigate(urlPaths.root);

  return (
    <header className="h-[62px] flex items-center gap-x-1.5 py-[8px] cursor-pointer" onClick={onClickHome}>
      <BlackRibbonMd />
      <div className="flex flex-col">
        <Typo size="lg" className="md:text-lg">제주항공 기억과 추모의 공간</Typo>
        <Typo size="sm" className="text-slate-700">유가족분들께 슬픔과 진심의 위로를 담아.</Typo>
      </div>
    </header>
  );
}

export default Header;
