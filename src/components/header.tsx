import Link from 'next/link';
import { Bot, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const navLinks = [
    { href: '/#features', label: 'Features' },
    { href: '/#updates', label: 'Updates' },
    { href: '/docs', label: 'Documentation' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold">GoJo Beats </span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="hidden md:flex">
            <Link href="https://discord.com/oauth2/authorize?client_id=1150754451938869371">Invite the Bot</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <Bot className="h-6 w-6 text-primary" />
                <span className="font-bold">GoJo Beats</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-2 py-1 text-lg hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="mt-8 w-full">
                <Link href="https://discord.com/oauth2/authorize?client_id=1150754451938869371">Invite the Bot</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
