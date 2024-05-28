import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { User, UserRequest } from '@/models/interfaces';

/*
I've finished the conditional logic for the POST request, I'd like to try integrate supabase for the login/signup now. I have set up the supabase account, packages, and environment variables.
*/

export async function POST(request: NextRequest) {
  const { email, password, isSignUp } = (await request.json()) as UserRequest;
  console.log(email, password, isSignUp);
  const jsonDirectory = path.join(process.cwd(), 'src/app/api/login');
  const fileContents = await fs.readFile(jsonDirectory + '/loginData.json', 'utf8');
  const { users } = JSON.parse(fileContents) as { users: User[]; };
  const existingUser = users.some((user) => user.email === email);
  const hasAccount = users.some((user) => user.email === email && user.password === password);

  if (!isSignUp && !hasAccount) {
    // console.log('wrong password');
    return NextResponse.json(
      { error: 'Wrong password! Please try again.', input: 'password' },
      { status: 401 },
    );
  }
  else if (!isSignUp && !existingUser) {
    // console.log('no account found');
    return NextResponse.json(
      { error: 'Account does not exist. Please sign up.' },
      { status: 404 },
    );
  }
  else if (isSignUp && existingUser) {
    // console.log('user already exists, log in');
    return NextResponse.json(
      { error: 'You are already signed up. Please login.' },
      { status: 400 },
    );
  }
  else if (isSignUp && !existingUser) {
    // console.log('creating user');
    users.push({ email, password } as User);
    await fs.writeFile(jsonDirectory + '/loginData.json', JSON.stringify({ users }, null, 2));

    return NextResponse.json(
      { error: 'User created successfully' },
      { status: 201 },
    );
  }
  else {
    // console.log('login successful');
    return NextResponse.json(
      { error: 'Login successful' },
      { status: 200 },
    );
  }
}
