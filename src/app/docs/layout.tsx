import { type ReactNode } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4">
            <div className="sticky top-20">
              <h2 className="font-semibold text-lg mb-4">Documentation</h2>
              <nav className="flex flex-col gap-2">
                <Link href="/docs/getting-started" className="text-muted-foreground hover:text-foreground">
                  Getting Started
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Commands
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Configuration
                </Link>
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
