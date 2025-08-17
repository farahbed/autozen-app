'use client';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const publicRoutes = ['/login'];

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user && !publicRoutes.includes(pathname)) {
      router.push('/login');
    }
  }, [user, loading, pathname]);

  if (loading) return null;
  if (!user && !publicRoutes.includes(pathname)) return null;

  return children;
}