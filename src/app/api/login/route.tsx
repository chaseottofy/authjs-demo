// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface User {
  email: string;
  password: string;
}

interface RequestBody {
  email: string;
  password: string;
  isSignUp: boolean;
}

export async function POST(request: NextRequest) {
  const {
    email,
    password,
    isSignUp,
  } = (await request.json()) as RequestBody;

  // const jsonDirectory = path.join(process.cwd(), 'app/api/login');
  const jsonDirectory = path.join(process.cwd(), 'src/app/api/login');
  const fileContents = await fs.readFile(jsonDirectory + '/loginData.json', 'utf8');
  const { users } = JSON.parse(fileContents) as { users: User[]; };

  const accountExists = users.some((user) => user.email === email);
  // const
  const user = users.find((user) => {
    return user.email === email && user.password === password;
  });

  // user exists and has correct info but clicked sign up instead of login
  if (isSignUp && user) {
    return NextResponse.json({
      error: 'You are already signed up. Please login.'
    }, { status: 400 });
  }

  // user does not exist and clicked login instead of sign up
  if (!isSignUp && !accountExists) {
    return NextResponse.json({
      error: 'Account does not exist. Please sign up.',
    }, { status: 404 });
  }
  // user exists but wrong password
  if (!isSignUp && !user) {
    return NextResponse.json({
      error: 'Wrong password! Please try again.',
      input: 'password',
    }, { status: 401 });
  }
  
  // create user
  if (isSignUp && !accountExists) {
    users.push({ email, password });
    await fs.writeFile(jsonDirectory + '/loginData.json', JSON.stringify({
      users,
    }, null, 2));
    return NextResponse.json({ 
      message: 'User created',
    });
  }

  // user exists and has correct info
  return NextResponse.json({ message: 'Login successful' });
}