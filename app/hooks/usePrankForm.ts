"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface UsePrankFormReturn {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLoading: boolean;
  error: string | null;
  handleSubmit: (event: FormEvent) => Promise<void>;
}

export function usePrankForm(): UsePrankFormReturn {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Password state is for UI only
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!email.trim()) {
      setError('Please enter your Mobile Legends email.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Something went wrong during submission.');
      }
      router.push('/revealed');
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return { email, setEmail, password, setPassword, isLoading, error, handleSubmit };
}