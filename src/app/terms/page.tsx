import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-surface-alt/20 py-20">
        <article className="max-w-3xl mx-auto px-6 glass p-10 md:p-16 rounded-3xl border border-border space-y-8">
          <header className="space-y-2 border-b border-border pb-6">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Terms of Service</h1>
            <p className="text-foreground/60 text-sm">Last updated: October 24, 2025</p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
            <p className="text-foreground/75 leading-relaxed text-sm">
              By accessing Resqu, you agree to be bound by these terms. If you disagree with any part of these terms, you may not register or utilize the hardware.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. Medical Disclaimer</h2>
            <p className="text-foreground/75 leading-relaxed text-sm">
              Resqu is an information-sharing platform and does not provide medical advice or diagnoses. We do not guarantee that first responders will locate or scan the card, or verify the validity of details written to the profile.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. Subscription billing</h2>
            <p className="text-foreground/75 leading-relaxed text-sm">
              Resqu plans are billed on an annual subscription basis. Renewal payments are collected automatically unless canceled in your billing dashboard before the renewal date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">4. Liability Limitations</h2>
            <p className="text-foreground/75 leading-relaxed text-sm">
              Resqu is not liable for treatment delays, incorrect drug administration, or medical errors arising from missing, incomplete, or out-of-date records on your profile.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
