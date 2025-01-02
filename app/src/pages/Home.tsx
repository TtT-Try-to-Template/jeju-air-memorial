import React, { Suspense } from 'react';
import Layout from "@/features/Layout";
import { RememberAnnouncer } from "@/features/Remember";
import { Typo } from "@/shared/ui";
import { MemoList, BottomNav } from "@/features/Memorialize";

const Home: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<Typo>불러오는 중..</Typo>}>
        <RememberAnnouncer />
      </Suspense>
      <Suspense fallback={<Typo>불러오는 중...</Typo>}>
        <MemoList />
      </Suspense>
      <BottomNav />
    </Layout>
  );
}

export default Home;
