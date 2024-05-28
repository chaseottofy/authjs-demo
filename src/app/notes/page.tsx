import Main from '@/components/Main/Main';
import { createClient } from '@/server/supabase/server';

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <Main>
      {JSON.stringify(notes, null, 2)}
    </Main>
  )
}