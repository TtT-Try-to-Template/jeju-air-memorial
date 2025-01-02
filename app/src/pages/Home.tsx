import React from 'react';
import Layout from "@/features/Layout";
import { RememberAnnouncer } from "@/features/Remember";
import { List, Typo } from "@/shared/ui";
import memorialMocks from "@/features/Memorialize/mock";
import { MemoCard } from "@/features/Memorialize";
import BottomNav from "@/features/Memorialize/ui/BottomNav";

type Props = {}

const Home: React.FC<Props> = () => {
  return (
    <Layout>
      <RememberAnnouncer />
      <div className="flex-1 overflow-y-auto pb-14">
        <List
          data={memorialMocks}
          keyProperty="id"
          empty={<Typo>추모의 글은 없지만, 첫 번째 글이 따뜻한 울림이 됩니다.</Typo>}
          render={memorial => <MemoCard memorial={memorial} />}
        />
      </div>
      <BottomNav />
    </Layout>
  );
}

export default Home;
