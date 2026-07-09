import { HeartPulse, ShieldAlert, Award, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About column */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tight hover:opacity-90 transition-opacity">
            <HeartPulse size={28} />
            Resqu
          </Link>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Resqu is a design-first emergency medical identification ecosystem providing secure, instant vital health records to first responders under stress.
          </p>
          <div className="flex gap-4 text-foreground/40 pt-2">
            <span title="Emergency Active Security"><ShieldAlert size={20} className="hover:text-primary transition-colors" /></span>
            <span title="ISO 27001 Certified"><Award size={20} className="hover:text-primary transition-colors" /></span>
            <span title="HIPAA Compliant"><Lock size={20} className="hover:text-primary transition-colors" /></span>
          </div>
        </div>

        {/* Products column */}
        <div>
          <h4 className="font-bold text-sm tracking-wider uppercase text-foreground/80 mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-foreground/60">
            <li><Link href="/products" className="hover:text-primary transition-colors">Smart Cards</Link></li>
            <li><Link href="/products" className="hover:text-primary transition-colors">Leather Keychains</Link></li>
            <li><Link href="/products" className="hover:text-primary transition-colors">Emergency MedTags</Link></li>
          </ul>
        </div>

        {/* Resources column */}
        <div>
          <h4 className="font-bold text-sm tracking-wider uppercase text-foreground/80 mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-foreground/60">
            <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
            <li><Link href="/family-vault" className="hover:text-primary transition-colors">Family Vault</Link></li>
            <li><Link href="/hospitals" className="hover:text-primary transition-colors">Hospital Portal</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Compliance column */}
        <div>
          <h4 className="font-bold text-sm tracking-wider uppercase text-foreground/80 mb-4">Legal & Security</h4>
          <ul className="space-y-2 text-sm text-foreground/60">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="/hipaa" className="hover:text-primary transition-colors">HIPAA Compliance</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-border/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-foreground/50">
        <div>
          © {new Date().getFullYear()} Resqu. All rights reserved.
        </div>
        <div className="flex gap-4">
          <span>Protected by AES-256 end-to-end data encryption.</span>
        </div>
      </div>
    </footer>
  );
}
