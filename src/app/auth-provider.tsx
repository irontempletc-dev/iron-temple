'use client';

import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const protectedRoutes = ['/', '/courses', '/glossary', '/modules', '/profile', '/billing', '/courses/register'];

function AuthContent({ children }: { children: React.ReactNode }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isProtectedRoute = protectedRoutes.some(path => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    });
    
    if (!loading && !user && isProtectedRoute) {
        router.push('/login');
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="space-y-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    );
  }

  return <>{children}</>;
}


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    if (!isClient) {
        return null;
    }

    return <AuthContent>{children}</AuthContent>
}
