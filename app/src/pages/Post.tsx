import React, { KeyboardEvent, useState } from 'react';
import Layout from "@/features/Layout";
import { Button, Typo } from "@/shared/ui";
import { cn } from "@/lib/utils";
import { usePostMemoMutation } from "@/features/Memorialize";
import { useNavigate } from "react-router";
import { urlPaths } from "@/features/Router";
import generateRandomNickname from "@/features/Nickname";

const LIMIT = 1000;

const Post: React.FC = () => {
  const [typing, setTyping] = useState('');
  const { mutateAsync: createMemorial } = usePostMemoMutation();
  const navigate = useNavigate();

  const typingLength = typing.length;

  const onTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value .length > LIMIT) return;
    setTyping(value);
  }

  const onBlocking = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (typingLength >= LIMIT && e.key !== 'Backspace') {
      e.preventDefault();
    }
  }

  const onCreate = async () => {
    try {
      await createMemorial({
        content: typing,
        author: generateRandomNickname(),
      });
      alert('한 줄의 글이 큰 울림이 됩니다. 그 마음에 진심으로 감사드립니다.');
      navigate(urlPaths.root);
    } catch (error) {
      console.error(error);
      alert("오류가 발생하였습니다. 잠시 후 다시시도해주세요.");
    }

  };

  return (
    <Layout>
      <div className="flex-1 flex flex-col">
        <textarea
          value={typing}
          onChange={onTyping}
          onKeyDown={onBlocking}
          placeholder="짧아도 괜찮습니다. 진심 어린 한마디를 남겨주세요."
          className="w-full h-full mt-[38px] pb-[12px] outline-none"
        />
        <div>
          <div className="flex justify-end pb-[12px]">
            <Typo fontStyle="normal" size="lg" className="!text-zinc-400">
              {typingLength} / {LIMIT}
            </Typo>
          </div>
        </div>
      </div>
      <div>
        <Button
          disabled={typingLength < 20}
          className={cn([
            'primary-button',
            'w-full !bg-black !text-white !hover:bg-zinc-600'
          ])}
          onClick={onCreate}
        >
          마음 전달하기
        </Button>

      </div>
    </Layout>
  );
}

export default Post;
