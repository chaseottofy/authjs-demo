import Main from '@/components/Main/Main';
import { createClient } from 'ignore/server/supabase/server';

export default async function Notes() {
  const supabase = createClient();
  // let { data, error } = await supabase.auth.
  // const { data: { user } } = await supabase.auth.getUser()
  const { data: notes } = await supabase.from("notes").select();

  return (
    <Main>
      {JSON.stringify(notes, null, 2)}
    </Main>
  );
}