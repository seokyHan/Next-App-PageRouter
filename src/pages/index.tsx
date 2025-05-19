import style from './index.module.css'
import SearchableLayout from '@/components/searchable-layout';
import { ReactNode } from 'react';
export default function Home() {
  return (
    <>
      <h1 className={style.h1}>index</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
