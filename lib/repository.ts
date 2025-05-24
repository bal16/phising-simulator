import { supabase } from '@/lib/supabaseClient'; // Using alias for consistency

/**
 * Represents a submitted email record.

*/
export interface Submission {
  id: number;
  email: string;
  created_at: string;
}

/**
 * Submits an email to the database.
 * @param email The email address to submit.
 * @returns An object indicating success or an error message.
 */
export async function submitEmail(
  _email: string // Renamed to indicate it's not used in this commented-out version
): Promise<{ success: boolean; message?: string; data?: { email: string } }> {
  // Supabase logic commented out
  if (!_email || typeof _email !== 'string' || !_email.trim()) {
    return {
      success: false,
      message: 'Email is required and cannot be empty.',
    };
  }

  const { data, error } = await supabase
    .from('collected_emails')
    .insert([{ email: _email.trim() }])
    .select('email'); // Optionally select back the inserted email

  if (error) {
    console.error('Supabase error during email submission:', error);
    return {
      success: false,
      message: error.message || 'Error saving email to database.',
    };
  }

  return {
    success: true, // Defaulting to false as the Supabase logic is out
    // message: 'Wait for your skins.',
    data: data?.[0],
  };
}

let DUMMY_SUBMISSIONS: Submission[] = [
  {
    id: 1,
    email: 'naruto.uzumaki@konoha.com',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: 2,
    email: 'sasuke.uchiha@akatsuki.org',
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: 3,
    email: 'sakura.haruno@hospital.konoha',
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    email: 'kakashi.hatake@anbu.konoha',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
  },
];

/**
 * (Dummy Version) Submits an email to an in-memory array.
 * @param email The email address to submit.
 * @returns An object indicating success or an error message.
 */
export async function submitEmail_dummy(
  email: string
): Promise<{ success: boolean; message: string; data?: { email: string } }> {
  if (!email || typeof email !== 'string' || !email.trim()) {
    return {
      success: false,
      message: 'Email is required and cannot be empty.',
    };
  }
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const newSubmission: Submission = {
    id: DUMMY_SUBMISSIONS.length + 1, // Simple ID generation
    email: email.trim(),
    created_at: new Date().toISOString(),
  };
  DUMMY_SUBMISSIONS.push(newSubmission);

  return {
    success: true,
    message: 'Email submitted successfully (dummy).',
    data: { email: newSubmission.email },
  };
}

/**
 * Fetches the list of submissions using dummy data.
 * TODO: This is for development/testing. Remove or replace with actual logic for production.
 */
export async function fetchSubmissions_dummy(): Promise<{
  submissions: Submission[];
  error?: string;
}> {
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { submissions: DUMMY_SUBMISSIONS, error: undefined };
}

/**
 * Fetches the list of submissions from Supabase.
 */
export async function fetchSubmissions(): Promise<{
  submissions: Submission[];
  error?: string;
}> {
  // IMPORTANT: Ensure proper authentication/authorization is handled
  // if this page is ever exposed or if RLS isn't fully anonymous for this.
  const { data, error } = await supabase
    .from('collected_emails')
    .select<'*', Submission>('*') // Explicitly type the select
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching submissions from Supabase:', error.message);
    return { submissions: [], error: error.message };
  }
  return { submissions: data || [], error: undefined };
  console.warn(
    'Supabase fetchSubmissions function is currently disabled. Returning empty array.'
  );
  return {
    submissions: [],
    error: 'Supabase fetchSubmissions function is currently disabled.',
  };
}
