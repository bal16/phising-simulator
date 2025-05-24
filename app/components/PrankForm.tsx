"use client";

import { FormEvent } from 'react';

interface PrankFormProps {
  email: string;
  onEmailChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  isLoading: boolean;
  error: string | null;
  onSubmit: (event: FormEvent) => void;
}

export function PrankFormComponent({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  isLoading,
  error,
  onSubmit,
}: PrankFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-naruto-orange">
          Mobile Legends Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-naruto-orange focus:border-naruto-orange sm:text-sm text-white"
          placeholder="yourname@example.com"
          aria-describedby={error && email.trim() === '' ? "email-error" : undefined}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-naruto-orange">
          Password <span className="text-xs text-gray-400">(Don't worry, this is part of the prank!)</span>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-naruto-orange focus:border-naruto-orange sm:text-sm text-white"
          placeholder="********"
        />
      </div>

      {error && (
        <p id="email-error" className="text-red-400 text-sm" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-naruto-orange hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-naruto-orange disabled:opacity-50"
      >
        {isLoading ? 'Claiming...' : 'Claim My Skins!'}
      </button>
    </form>
  );
}