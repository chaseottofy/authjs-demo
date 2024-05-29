import * as React from 'react';

// import { createClient } from 'ignore/server/supabase/server';

import Main from '@/components/Main/Main';

export default async function Home() {
  // const canInitSupabaseClient = () => {
  //   try {
  //     createClient();
  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // };

  // const isSupabaseConnected = canInitSupabaseClient();

  return (
    <>
      <Main>
        main
      </Main>
    </>
  );
}
