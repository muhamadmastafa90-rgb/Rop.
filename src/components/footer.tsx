import Link from 'next/link';
import { Bot, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border/40 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Discord Bot Central</span>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Discord Bot Central. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
