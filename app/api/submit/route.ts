import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient'; // Adjust path as necessary

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
    }

    const { error } = await supabase
      .from('collected_emails')
      .insert([{ email: email }]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ message: error.message || 'Error saving email to database.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email submitted successfully.', email }, { status: 200 });
  } catch (err: any) {
    console.error('API error:', err);
    return NextResponse.json({ message: err.message || 'An unexpected error occurred.' }, { status: 500 });
  }
}