import React from 'react';
import { Button, Typo } from "@/shared/ui";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";
import { urlPaths } from "@/features/Router";

const formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfv9I6DWbfp35nF5UnHrA3UiOl-wxshc-G1LlfSOTEw4iearA/viewform?usp=sharing';
const openGoogleForm = () => window.open(formLink, '_blank');

const BottomNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex flex-col relative">
      <div
        className="h-[85px] absolute bottom-[45px] left-0 bg-white w-full pale-white-gradient"
      />
      <Button
        className={cn([
          'w-full primary-button hover:bg-slate-100 drop-shadow-md',
        ])}
        size="lg"
        onClick={() => navigate(urlPaths.post)}
      >
        마음 전달하러 가기
      </Button>

      <div className="flex w-full justify-center">
        <Typo
          size="lg"
          className="pt-3 underline underline-offset-1 cursor-pointer"
          onClick={openGoogleForm}
        >
          문의하기
        </Typo>
      </div>

    </section>
  );
}

export default BottomNav;
