import * as React from 'react';

import { createClient } from '@/server/supabase/server';

import Main from '@/components/Main/Main';

// export default function Home() {
export default async function Home() {
  const canInitSupabaseClient = () => {
    try {
      createClient()
      return true;
    } catch(e) {
      return false;
    }
  }

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <Main>
      {
        isSupabaseConnected ? (
          <h1>supabase connected</h1>
        ) : (
          <h1>supabase not connected</h1>
        )
      }
    </Main>
  )
}
