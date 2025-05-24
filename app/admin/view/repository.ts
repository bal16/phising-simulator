// This interface can be shared or defined here.
// If you plan to use it elsewhere, consider moving it to a shared types file.
export interface Submission {
  id: number;
  email: string;
  created_at: string;
}

const DUMMY_SUBMISSIONS: Submission[] = [
  {
    id: 1,
    email: "naruto.uzumaki@konoha.com",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: 2,
    email: "sasuke.uchiha@akatsuki.org",
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: 3,
    email: "sakura.haruno@hospital.konoha",
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    email: "kakashi.hatake@anbu.konoha",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
  },
];

/**
 * Fetches the list of submissions.
 * Currently returns dummy data.
 * TODO: Replace with actual data fetching logic (e.g., Supabase) when ready.
 */
export async function fetchSubmissions(): Promise<{
  submissions: Submission[];
  error?: string;
}> {
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // In a real scenario, you might have error handling here
  return { submissions: DUMMY_SUBMISSIONS, error: undefined };
}

// // In app/admin/view/repository.ts

// import { supabase } from '../../../lib/supabaseClient'; // Adjust path as necessary

// export interface Submission {
//   id: number;
//   email: string;
//   created_at: string;
// }

// /**
//  * Fetches the list of submissions from Supabase.
//  */
// export async function fetchSubmissions(): Promise<{ submissions: Submission[]; error?: string }> {
//   // IMPORTANT: Ensure proper authentication/authorization is handled
//   // if this page is ever exposed or if RLS isn't fully anonymous for this.
//   const { data, error } = await supabase
//     .from('collected_emails')
//     .select('*')
//     .order('created_at', { ascending: false });

//   if (error) {
//     console.error("Error fetching submissions from Supabase:", error.message);
//     return { submissions: [], error: error.message };
//   }
//   return { submissions: data || [], error: undefined };
// }
