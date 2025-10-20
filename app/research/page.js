"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Research() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage, research is now integrated there
    router.replace('/');
  }, [router]);

  return null;
}