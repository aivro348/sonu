import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2, Shield } from 'lucide-react';

export default function HealthPlansPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-surface-alt/20">
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">Health Plans</h1>
            <p className="text-foreground/75 text-lg leading-relaxed">
              Compare our plans and select the right coverage option for your personal safety or family household network.
            </p>
          </div>
        </section>

        <section className="pb-28 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan cards duplicate the details, keeping it clean */}
            {/* Plan 1 */}
            <div className="glass rounded-3xl border border-border p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold">Individual Basic</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold">₹999</span>
                  <span className="text-foreground/60 text-sm">/ year</span>
                </div>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> 1 Smart Card</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Basic Medical profile</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Email Notifications</li>
                </ul>
              </div>
              <Link href="/signup" className="mt-8 block w-full py-3 bg-surface-alt rounded-xl text-center text-sm font-semibold hover:bg-surface/50 border border-border">Select Plan</Link>
            </div>

            {/* Plan 2 */}
            <div className="glass rounded-3xl border-2 border-primary p-8 flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="text-xl font-bold">Individual Premium</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold">₹1999</span>
                  <span className="text-foreground/60 text-sm">/ year</span>
                </div>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> 1 Card + 1 Keychain</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Detailed Vitals Data</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> SMS & Geolocation alerts</li>
                </ul>
              </div>
              <Link href="/signup" className="mt-8 block w-full py-3 bg-primary text-white rounded-xl text-center text-sm font-semibold hover:bg-primary/95">Select Premium</Link>
            </div>

            {/* Plan 3 */}
            <div className="glass rounded-3xl border border-border p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold">Family Secure</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold">₹4999</span>
                  <span className="text-foreground/60 text-sm">/ year</span>
                </div>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Up to 4 family members</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Central Family Vault</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> GPS Alerts for all members</li>
                </ul>
              </div>
              <Link href="/signup" className="mt-8 block w-full py-3 bg-surface-alt rounded-xl text-center text-sm font-semibold hover:bg-surface/50 border border-border">Select Family Plan</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
