'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HeartPulse, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tight hover:opacity-90 transition-opacity">
          <HeartPulse size={28} />
          Resqu
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
          <Link href="/family-vault" className="hover:text-primary transition-colors">Family Vault</Link>
          <Link href="/health-plans" className="hover:text-primary transition-colors">Health Plans</Link>
          <Link href="/hospitals" className="hover:text-primary transition-colors">For Hospitals</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
            Sign In
          </Link>
          <Link href="/signup" className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full glass border-b border-border/50 p-6 flex flex-col gap-4 shadow-xl">
          <Link href="/products" className="text-foreground/80 font-medium py-2 border-b border-border/30">Products</Link>
          <Link href="/how-it-works" className="text-foreground/80 font-medium py-2 border-b border-border/30">How it Works</Link>
          <Link href="/family-vault" className="text-foreground/80 font-medium py-2 border-b border-border/30">Family Vault</Link>
          <Link href="/health-plans" className="text-foreground/80 font-medium py-2 border-b border-border/30">Health Plans</Link>
          <Link href="/hospitals" className="text-foreground/80 font-medium py-2 border-b border-border/30">For Hospitals</Link>
          <Link href="/faq" className="text-foreground/80 font-medium py-2 border-b border-border/30">FAQ</Link>
          
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border/50">
            <Link href="/login" className="text-center font-medium py-2 text-foreground">Sign In</Link>
            <Link href="/signup" className="text-center bg-primary text-white rounded-full py-3 font-medium">Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}
