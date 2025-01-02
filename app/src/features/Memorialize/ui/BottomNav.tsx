import React from 'react';
import { Button } from "@/shared/ui";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";
import { urlPaths } from "@/features/Router";

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
    </section>
  );
}

export default BottomNav;
