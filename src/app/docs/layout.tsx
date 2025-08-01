
'use client';

import { type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

export default function DocsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const navLinks = [
    { href: '/docs/getting-started', label: 'Getting Started' },
    { href: '/docs/commands', label: 'Commands' },
    { href: '/docs/configuration', label: 'Configuration' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4">
            <div className="sticky top-20">
              <h2 className="font-semibold text-lg mb-4">Documentation</h2>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-muted-foreground hover:text-foreground',
                      pathname === link.href && 'text-foreground font-semibold'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
