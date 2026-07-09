import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, ShieldAlert, FileText, BellRing, Settings } from 'lucide-react';

export default function FamilyVaultPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-surface-alt/20">
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">Family Vault</h1>
            <p className="text-foreground/75 text-lg leading-relaxed">
              Consolidated medical profile monitoring for your children, spouse, and elderly relatives. Configured privately, controlled securely.
            </p>
          </div>
        </section>

        <section className="pb-28 max-w-5xl mx-auto px-6 gap-12 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Centralized Safety Controls</h3>
            <p className="text-foreground/70 leading-relaxed">
              Managing health details for dependents shouldn't require logging in and out of multiple accounts. With Family Vault, toggling between your child's allergy logs and your parents' prescriptions takes seconds.
            </p>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <BellRing size={16} className="text-primary" />
                <span>Custom emergency contact groups per member</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText size={16} className="text-primary" />
                <span>Upload pediatric vaccines and medication tables</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border">
            <Image src="/images/family-vault.png" alt="Family Vault details" fill className="object-cover" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
