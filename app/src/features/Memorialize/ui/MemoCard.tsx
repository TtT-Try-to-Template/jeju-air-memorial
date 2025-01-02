import React from 'react';
import { cn } from "@/lib/utils";
import { Typo } from "@/shared/ui";
import { Memorial } from "../types";

type Props = {
  memorial: Memorial;
}

const MemoCard: React.FC<Props> = ({ memorial }) => {
  return (
    <article
      className={cn([
        'border-[2px] border-[#6F6F6F] rounded-[8px] bg-[#242424] text-[#DBDBDB] p-[12px] shadow-md'
      ])}
    >
      <div>
        <div className="mb-3">
          <Typo size="md" fontStyle="normal" className="text-[#DBDBDB]">
            {memorial.content}
          </Typo>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Typo fontStyle="normal">
              {memorial.author}
            </Typo>
          </div>
          <Typo fontStyle="normal">3분 전</Typo>
        </div>
      </div>

    </article>
  );
}

export default MemoCard;
