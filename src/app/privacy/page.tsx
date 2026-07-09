import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-surface-alt/20 py-20">
        <article className="max-w-3xl mx-auto px-6 glass p-10 md:p-16 rounded-3xl border border-border space-y-8">
          <header className="space-y-2 border-b border-border pb-6">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
            <p className="text-foreground/60 text-sm">Last updated: October 24, 2025</p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Information We Collect</h2>
            <p className="text-foreground/75 leading-relaxed text-sm">
              Resqu collects medical information explicitly provided by you, including but not limited to allergies, medications, medical history, blood type, and emergency contacts. We also collect basic contact info during signup (name, email).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. How We Share & Expose Data</h2>
            <p className="text-foreground/75 leading-relaxed text-sm">
              Your profile data is private. However, by using the Resqu card or keychain, you agree to make selected emergency vital records publicly accessible to anyone scanning the QR code or tapping the NFC tag. You have complete control over what fields are visible in this view.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. Data Security & Encryption</h2>
            <p className="text-foreground/75 leading-relaxed text-sm">
              All personal medical data is stored securely using AES-256 bank-grade encryption at rest and SSL/TLS protocols in transit. Our database architecture utilizes strict Row Level Security (RLS) policies to prevent unauthorized data access.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">4. Your Rights</h2>
            <p className="text-foreground/75 leading-relaxed text-sm">
              You can view, edit, or permanently purge your complete health profile at any time from your account dashboard. Deleting your account deletes all matching database entries instantly.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
