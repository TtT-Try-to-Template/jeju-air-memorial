import React from 'react';
import { Typo } from "@/shared/ui";

const RememberAnnouncer: React.FC = () => {
  return (
    <div className="flex gap-x-2 py-[32px]">
      <Typo>함께 기억해주신 분들</Typo>
      <Typo className="font-bold">{0}명</Typo>
    </div>
  );
}

export default RememberAnnouncer;
