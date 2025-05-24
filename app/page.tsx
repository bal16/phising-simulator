"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // For placeholder image

export default function NewRootPage() {
  return (
    <>
      <Head>
        <title>🎁 Your Free Exclusive Skin Awaits! - ML Event</title>
        <meta name="description" content="Unlock a special free skin in our limited-time Mobile Legends event! Claim yours now." />
      </Head>
      <div className="min-h-screen bg-gradient-to-tr from-purple-900 via-slate-900 to-blue-900 text-white flex flex-col items-center justify-center p-6 selection:bg-yellow-400 selection:text-slate-900">
        <main className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
                FREE
              </span> Exclusive Skin!
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-6">
              As a thank you to our amazing community, a special gift is waiting for you.
            </p>
          </div>

          <div className="mb-10 shadow-2xl shadow-yellow-500/30 rounded-lg overflow-hidden">
            {/* 
              Interesting Asset Suggestion:
              Replace this placeholder with a dynamic image or a short looping video 
              showcasing a mysterious gift box or a silhouette of an awesome skin.
              You could even use a carousel if you have multiple "teaser" images.
              Consider using a high-quality, game-themed image.
            */}
            <Image
              src="https://placehold.co/800x450/0A0A23/FBBF24/png?text=Your+Mysterious+Gift!&font=orbitron"
              alt="Mysterious Free Skin Gift"
              width={800}
              height={450}
              className="w-full object-cover"
              priority // Good for LCP if this is the main visual
            />
          </div>

          <div className="mb-8">
            <p className="text-lg text-slate-400 mb-6">
              This is your chance to get a unique skin, absolutely free! Participate in our special event to unlock it.
            </p>
            <Link
              href="/claim"
              className="inline-block bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg transform transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
            >
              Claim Your Free Skin Now!
            </Link>
          </div>

          <p className="text-sm text-slate-500">
            Event ends soon. Don&apos;t miss out!
          </p>
        </main>
        <footer className="absolute bottom-4 text-center text-slate-600 text-xs">
          <p>&copy; {new Date().getFullYear()} Special Event Promotions. All rights reserved (for this demo).</p>
        </footer>
      </div>
    </>
  );
}
