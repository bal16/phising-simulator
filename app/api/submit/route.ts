import { NextResponse } from 'next/server';
// import { submitEmail_dummy as submitEmailToRepository } from "@/lib/repository";
import { submitEmail as submitEmailToRepository } from '@/lib/repository'; // For Supabase

// interface ApiError {
//   message: string;
// }

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    const result = await submitEmailToRepository(email); // Calls the chosen function

    if (!result.success) {
      const statusCode = result.message?.toLowerCase().includes('required')
        ? 400
        : 500;
      return NextResponse.json(
        { message: result.message },
        { status: statusCode }
      );
    }

    return NextResponse.json(
      { message: result.message, email: result.data?.email },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error('API error:', err);
    const errorMessage =
      err instanceof Error ? err.message : 'An unexpected error occurred.';
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
