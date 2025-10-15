"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Code, ShieldCheck, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        }
      },
      {
        threshold: 0.1,
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
}

const AnimatedSection = ({ children, className }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={cn("fade-in-up", isVisible && "is-visible", className)}
    >
      {children}
    </div>
  );
};

const features = [
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: 'Setting Command',
    description: 'Configure your server with commands like prefix, autoplay, 247, and request to tailor GoJo Beats to your needs.',
  },
  {
    icon: <Music className="w-8 h-8 text-primary" />,
    title: 'Sound Quality',
    description: "Enjoy high-quality music playback from all supported sources, with customizable volume and filters for the perfect sound experience.",
  },
  {
    icon: <Zep className="w-8 h-8 text-primary" />,
    title: 'Sources',
    description: 'Play music from supported platforms including YouTube, SoundCloud, Spotify, Deezer, and Apple Music.',
  },
];

const updates = [
    { version: 'v2.5.0', date: '2024-07-15', description: 'Added AI-powered response generation and image recognition.' },
    { version: 'v2.4.1', date: '2024-06-28', description: 'Performance improvements and bug fixes for the music module.' },
    { version: 'v2.4.0', date: '2024-06-10', description: 'New economy system with leaderboards and store items.' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20 sm:py-32 bg-background">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <Bot className="mx-auto h-24 w-24 text-primary animate-pulse" />
              <h1 className="text-4xl sm:text-6xl font-bold mt-6">
                The Only Discord Bot You'll Ever Need
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                Powerful moderation, engaging features, and endless customization. Elevate your server today.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="#">
                    Invite the Bot <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#">
                    Read Docs
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="features" className="py-20 sm:py-24 bg-card/10">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold">Functionality Showcase</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Explore the core features that make our bot stand out from the rest.
              </p>
            </AnimatedSection>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index}>
                    <Card className="text-center h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                    <CardHeader>
                        <div className="mx-auto bg-background p-4 rounded-full w-fit">
                            {feature.icon}
                        </div>
                        <CardTitle className="mt-4">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                    </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="updates" className="py-20 sm:py-24">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">Dynamic Updates</h2>
                    <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                        We're always improving. Check out the latest features and fixes.
                    </p>
                </AnimatedSection>
                <div className="relative max-w-3xl mx-auto">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
                  {updates.map((update, index) => (
                    <AnimatedSection key={index}>
                      <div className="relative pl-12 pb-8">
                        <div className="absolute left-4 top-1 w-4 h-4 -translate-x-1/2 bg-primary rounded-full border-4 border-background" />
                        <div className="flex items-center gap-4">
                            <p className="text-sm text-muted-foreground">{update.date}</p>
                            {index === 0 && <Badge className="bg-primary/20 text-primary border-primary/30">New</Badge>}
                        </div>
                        <h3 className="font-semibold text-lg mt-1">{update.version}</h3>
                        <p className="mt-2 text-muted-foreground">{update.description}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
