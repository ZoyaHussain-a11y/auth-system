'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="font-bold text-lg">
          Auth System
        </Link>
        <nav className="flex gap-3">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
          <Link href="/admin">
            <Button variant="ghost">Admin</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
