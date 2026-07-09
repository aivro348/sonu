'use client';

import Link from 'next/link';
import { HeartPulse } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tight hover:opacity-90 transition-opacity">
          <HeartPulse size={28} />
          Resqu
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
          <Link href="/family-vault" className="hover:text-primary transition-colors">Family Vault</Link>
          <Link href="/health-plans" className="hover:text-primary transition-colors">Health Plans</Link>
          <Link href="/hospitals" className="hover:text-primary transition-colors">For Hospitals</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Sign In
          </Link>
          <Link href="/signup" className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
