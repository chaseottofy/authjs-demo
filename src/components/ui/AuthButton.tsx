import { createClient } from 'ignore/server/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import Button from '@/components/ui/Button/Button';

export default async function AuthButton({
  className,
}: {
  className?: string;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    'use server';

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect('/');
  };

  if (user) {
    return (
      <form action={signOut}>
        <Button
          className={className}
        // onClick={signOut}
        >
          Sign Out
        </Button>
      </form>
    );
  }
  return (
    <Link href='/login'>
      log in
      {/* <a> */}
      {/* <Button
            className={className}
          >Log In</Button> */}
      {/* </a> */}
    </Link>
  );
}
