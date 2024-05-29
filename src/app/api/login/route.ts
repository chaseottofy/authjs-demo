// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

interface RequestBody {
  email: string;
  password: string;
  isSignUp: boolean;
}

export async function signIn(request: NextRequest) {
  const { email, password, isSignUp } = (await request.json()) as RequestBody;

  if (isSignUp) {
    const { data: existingUser, error: existingUserError } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUserError) {
      console.error('Error checking for existing user:', existingUserError);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    if (existingUser) {
      return NextResponse.json(
        { error: 'You are already signed up. Please login.' },
        { status: 400 }
      );
    }

    const { data: newUser, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      console.error('Error signing up:', signUpError);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } else {
    const { data: { user }, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      if (signInError.message === 'Invalid login credentials') {
        return NextResponse.json(
          { error: 'Wrong email or password! Please try again.' },
          { status: 401 }
        );
      } else {
        console.error('Error signing in:', signInError);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
    }

    return NextResponse.json({ message: 'Login successful', user }, { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  const response = await signIn(request);
  return response;
}