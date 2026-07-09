import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SmartphoneNfc, ShieldCheck, Zap, Layers, Cpu, Award } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-surface-alt/20">
        {/* Hero */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">Our Products</h1>
            <p className="text-foreground/75 text-lg leading-relaxed">
              Explore the detailed technical specifications and features of the Resqu smart medical hardware family. Engineered for durability, speed, and instant vital recognition.
            </p>
          </div>
        </section>

        {/* Detailed Grid */}
        <section className="pb-28 max-w-7xl mx-auto px-6 space-y-24">
          
          {/* Smart Card details */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <SmartphoneNfc size={16} />
                <span>NFC Smart Card</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Resqu Smart Card</h2>
              <p className="text-foreground/70 leading-relaxed">
                Designed to fit perfectly into standard wallet card slots. Made from high-grade PVC that is fully waterproof, scratch-resistant, and flexible enough to prevent snapping.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <h4 className="font-bold">NXP NTAG213 Chip</h4>
                  <p className="text-foreground/60">Embedded high-frequency microchip with passive power activation on contact.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold">Waterproof Matte Finish</h4>
                  <p className="text-foreground/60">Tested for submersion and resistant to cleaning solutions/sanitizers.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border">
              <Image src="/images/nfc-card-hero.png" alt="Smart Card Details" fill className="object-cover" />
            </div>
          </div>

          {/* Keychain details */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Cpu size={16} />
                <span>Leather Key Fob</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Resqu Premium Keychain</h2>
              <p className="text-foreground/70 leading-relaxed">
                A stylish accessory that attaches easily to your house keys, car keys, or medical devices. Wrapped in water-resistant leather with reinforced perimeter stitching.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <h4 className="font-bold">Full-Grain Leather</h4>
                  <p className="text-foreground/60">Sourced sustainably and treated to age beautifully over time without losing shape.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold">Reinforced Ring</h4>
                  <p className="text-foreground/60">Spring-action alloy ring tested to withstand over 20 lbs of pulling force.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border">
              <Image src="/images/nfc-keychain.png" alt="Keychain Details" fill className="object-cover" />
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
