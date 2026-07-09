import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Smartphone, Bell, HeartPulse, UserPlus, MapPin, Eye } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-surface-alt/20">
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">How it Works</h1>
            <p className="text-foreground/75 text-lg leading-relaxed">
              Under the hood of the instant-alert response flow. Here is how your medical details travel securely from your card to emergency personnel.
            </p>
          </div>
        </section>

        <section className="pb-28 max-w-5xl mx-auto px-6 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-2xl font-bold">1. Set Up Your Secure Profile</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Register on our HIPAA-compliant web app. Populate your profile with critical health warnings, prescription strengths, blood donor options, and medical file uploads. Your page stays offline to public searches.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-md">
              <Image src="/images/family-vault.png" alt="Profile Setup Step" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 md:order-last">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-2xl font-bold">2. Card Scan Action</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                In a physical emergency, bystanders or paramedics locate the high-visibility Resqu card in your wallet or keychain. An NFC tap or QR scan prompts a secure connection to our edge servers.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-md">
              <Image src="/images/emergency-scan.png" alt="Card Scan Step" fill className="object-cover" />
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
