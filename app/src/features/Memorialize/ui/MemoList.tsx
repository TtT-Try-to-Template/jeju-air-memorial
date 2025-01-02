import React from 'react';
import { List, ScrollObserver, Typo } from "@/shared/ui";
import { MemoCard, useMemoriesQuery } from "@/features/Memorialize";

const MemoList: React.FC = () => {
  const { data, fetchNextPage } = useMemoriesQuery();

  const memorials = data.pages
    .map(page => page.memorials)
    .flat();

  const fetchNext = () => {
    fetchNextPage();
  };

  return (
    <ScrollObserver onScrollEnd={fetchNext}>
        <List
          data={memorials}
          keyProperty="id"
          empty={<Typo>추모의 글은 없지만, 첫 번째 글이 따뜻한 울림이 됩니다.</Typo>}
          render={memorial => <MemoCard memorial={memorial} />}
        />
        <div className="flex justify-center py-3">
          <Typo size="md" fontStyle="normal" className="text-zinc-900">따뜻한 위로의 말 한 마디 부탁드립니다.</Typo>
        </div>
    </ScrollObserver>
  );
}

export default MemoList;
