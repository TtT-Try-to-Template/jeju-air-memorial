import React, { useState } from 'react';
import Layout from "@/features/Layout";
import { Button, Typo } from "@/shared/ui";
import { cn } from "@/lib/utils";

type Props = {}

const Post: React.FC<Props> = () => {
  const [typing, setTyping] = useState('');

  const typingLength = typing.length;

  const onTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTyping(e.target.value);
  }

  return (
    <Layout>
      <div className="flex-1 flex flex-col">
        <textarea
          value={typing}
          onChange={onTyping}
          placeholder="짧아도 괜찮습니다. 진심 어린 한마디를 남겨주세요."
          className="w-full h-full mt-[38px] pb-[12px] outline-none"
        />
        <div>
          <div className="flex justify-end pb-[12px]">
            <Typo fontStyle="normal" size="lg" className="!text-zinc-400">
              {typingLength} / 1000
            </Typo>
          </div>
        </div>
      </div>
      <div>
        <Button
          className={cn([
            'primary-button',
            'w-full !bg-black !text-white !hover:bg-zinc-600'
          ])}
        >
          마음 전달하기
        </Button>

      </div>
    </Layout>
  );
}

export default Post;
