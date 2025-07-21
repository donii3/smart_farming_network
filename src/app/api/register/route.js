// app/api/auth/register/route.js
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import { dummyUsers, addUser, findUserByEmail } from '@/app/data/dummyUser';

export async function POST(req) {
  const { firstName:first_name, lastName:last_name, email, password, phone } = await req.json();

  try {
    // Check if user exists
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user
    const user = await addUser({
        first_name,
        last_name,
        email: email.toLowerCase(),
        password: hashedPassword,
        phone,
      });

      console.log(user)


    return NextResponse.json({ success: true, message: "user created successfully" }, {status: 201});
  } catch (error) {
      console.log('error occured', error)

    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}