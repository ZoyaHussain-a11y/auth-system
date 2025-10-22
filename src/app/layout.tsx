import './globals.css';
import { ReactNode } from 'react';
import { Header } from '@/components/header';

export const metadata = {
  title: 'Auth System',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
