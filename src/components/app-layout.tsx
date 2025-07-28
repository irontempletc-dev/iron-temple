'use client';

import {
  BookText,
  Home,
  Menu,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { UserNav } from './user-nav';

const navItems = [
  { href: '/', label: 'Modules', icon: Home },
  { href: '/glossary', label: 'Glossary', icon: BookText },
  { href: '#', label: 'In-Person Courses', icon: Users, disabled: true },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const NavContent = () => (
    <nav className="grid items-start gap-2 px-2 text-sm font-medium lg:px-4">
      {navItems.map(({ href, label, icon: Icon, disabled }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
            pathname === href && 'bg-muted text-primary',
            disabled && 'pointer-events-none opacity-50'
          )}
        >
          <Icon className="h-4 w-4" />
          {label}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src="/ittclogo.png" alt="Iron Temple Training Center Logo" width={32} height={32} />
              <span className="font-headline text-lg whitespace-nowrap">Iron Temple Training Center</span>
            </Link>
          </div>
          <div className="flex-1">
            <NavContent />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="flex h-14 items-center border-b px-4">
                 <Link href="/" className="flex items-center gap-2 font-semibold">
                  <Image src="/ittclogo.png" alt="Iron Temple Training Center Logo" width={32} height={32} />
                  <span className="font-headline text-lg whitespace-nowrap">Iron Temple Training Center</span>
                </Link>
              </div>
              <NavContent />
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1" />
          <UserNav />
        </header>
        <main className="flex flex-1 flex-col gap-4 bg-background/60 dark:bg-background/80">
          {children}
        </main>
      </div>
    </div>
  );
}
