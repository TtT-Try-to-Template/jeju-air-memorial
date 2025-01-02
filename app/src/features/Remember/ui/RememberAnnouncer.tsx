import React from 'react';
import { Typo } from "@/shared/ui";
import { useMemorialTotalCountQuery } from "@/features/Memorialize";

const RememberAnnouncer: React.FC = () => {
  const { data } = useMemorialTotalCountQuery();

  return (
    <div className="flex gap-x-2 py-[32px]">
      <Typo>함께 기억해주신 분들</Typo>
      <Typo className="font-bold">{data.count} 명</Typo>
    </div>
  );
}

export default RememberAnnouncer;
