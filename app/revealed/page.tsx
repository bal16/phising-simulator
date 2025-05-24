import Head from 'next/head'; // Optional: for specific metadata for this page
import Link from 'next/link';

// You can add metadata for SEO and social sharing
export const metadata = {
  title: 'Prank Revealed! Information Security Lesson',
  description: 'An educational prank about phishing and online safety.',
};

export default function RevealedPage() {
  return (
    <>
      {/* Head component can be used here if you need to override default layout metadata or add specific tags */}
      {/* <Head>
        <title>Prank Revealed! Information Security Lesson</title>
      </Head> */}
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">Gotcha! This Was an Educational Prank!</h1>
          
          <div className="text-left space-y-4 mb-8">
            <p className="text-lg">
              You've just experienced a simulation of a <strong className="text-red-400">phishing attempt</strong>.
              The good news? Your password was <strong className="text-green-400">NOT</strong> saved or seen by anyone.
              This exercise was designed purely for educational purposes.
            </p>
            
            <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">What is Phishing?</h2>
            <p>
              Phishing is a cybercrime where attackers disguise themselves as trustworthy entities (like a game company offering free skins)
              to trick individuals into revealing sensitive information such as usernames, passwords, and credit card details.
            </p>

            <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">Key Takeaways for Your Security:</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong className="text-yellow-200">Be Wary of "Too Good To Be True" Offers:</strong> Free exclusive items are a common lure.</li>
              <li><strong className="text-yellow-200">Check the URL:</strong> Always verify the website address. Is it the official site?</li>
              <li><strong className="text-yellow-200">Never Share Passwords:</strong> Reputable services will never ask for your password via email or unsecure forms for such promotions.</li>
              <li><strong className="text-yellow-200">Use Unique, Strong Passwords:</strong> Don't reuse passwords across different sites.</li>
              <li><strong className="text-yellow-200">Enable Two-Factor Authentication (2FA):</strong> This adds an extra layer of security to your accounts.</li>
            </ul>

            <p className="mt-6">
              Your email <strong className="text-blue-400">(if you entered one)</strong> was noted to demonstrate how easily this information can be collected in such a scenario.
              It will not be misused.
            </p>
          </div>

          <Link href="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Back to Safety (Home)
          </Link>
        </div>
      </div>
    </>
  );
}