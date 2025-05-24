// We no longer need Head from 'next/head' here if metadata object is sufficient
// import Head from 'next/head';
import { 
  fetchSubmissions_dummy as fetchSubmissions, // Using dummy for now, change to fetchSubmissions for Supabase
  // fetchSubmissions, // Uncomment this and comment above to use Supabase
} from '@/lib/repository'; // Import from the central repository


export const metadata = {
  title: "Admin - Collected Emails",
  // Adding a meta tag to prevent indexing of this admin page by search engines
  robots: {
    index: false,
    follow: false,
  },
};

// Revalidate this page every 60 seconds (or as needed)
export const revalidate = 60;

export default async function AdminViewPage() {
  const { submissions, error } = await fetchSubmissions(); // Use the repository function

  return (
    <>
      {/* <Head>
        <title>Admin - Collected Emails</title>
      </Head> */}
      <div className="min-h-screen bg-gray-800 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-naruto-orange">
            Collected Emails (For Admin Only)
          </h1>

          <div className="bg-red-600 border border-red-800 text-white p-4 rounded-md mb-6 shadow-lg">
            <h2 className="text-xl font-semibold">⚠️ Security Warning!</h2>
            <p className="mt-2">
              This page displays potentially sensitive information. It is
              currently NOT SECURE and accessible to anyone who knows the URL.
            </p>
            <p className="mt-1">
              <strong>
                Before deploying this project or using it for any real purpose:
              </strong>
            </p>
            <ul className="list-disc list-inside mt-1 pl-4">
              <li>
                Implement proper authentication (e.g., NextAuth.js with
                credentials or OAuth).
              </li>
              <li>Restrict access based on user roles.</li>
              <li>
                Consider removing this page entirely for public deployments and
                viewing data directly in your Supabase dashboard.
              </li>
            </ul>
            <p className="mt-2">
              <strong>
                Do NOT share this URL publicly in its current state.
              </strong>
            </p>
          </div>

          {error && (
            <p className="text-red-400 mb-4">Error fetching data: {error}</p>
          )}

          {submissions && submissions.length > 0 ? (
            <div className="bg-gray-700 shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-600 bg-gray-600 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-600 bg-gray-600 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      Submitted At
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-600">
                      <td className="px-5 py-4 border-b border-gray-600 text-sm">
                        {submission.email}
                      </td>
                      <td className="px-5 py-4 border-b border-gray-600 text-sm">
                        {new Date(submission.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            !error && (
              <p className="text-gray-300">
                No emails have been submitted yet.
              </p>
            )
          )}
        </div>
      </div>
    </>
  );
}
