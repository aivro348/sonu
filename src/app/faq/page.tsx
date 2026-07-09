import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do paramedics need a special app to scan my card?",
    answer: "No. First responders simply tap the NFC card against their phone or scan the high-visibility QR code using their default camera app. It instantly loads the web-based profile in under 1 second."
  },
  {
    question: "Is my personal medical data secure and private?",
    answer: "Absolutely. Resqu utilizes bank-grade, AES-256 encryption for data at rest and TLS for transmission. Your public emergency link uses secure, randomized UUIDs that cannot be guessed or searched."
  },
  {
    question: "Can I update my profile if my medications change?",
    answer: "Yes, you can edit your profile details, chronic conditions, emergency contacts, and active prescriptions anytime from your dashboard. The updates apply instantly to your physical card."
  },
  {
    question: "How does the Hospital Write-Back system work?",
    answer: "Authorized doctors can log in directly from your scanned emergency view to write treatment history, update prescriptions, or note hospitalizations. This ensures your record stays complete and accurate."
  },
  {
    question: "What happens if I lose my Resqu card or keychain?",
    answer: "You can instantly deactivate the lost hardware from your dashboard to prevent scans. You can order a replacement card that maps to your existing profile in seconds."
  },
  {
    question: "Can I manage records for my children or parents?",
    answer: "Yes, our Family Secure plan supports adding up to 4 members. You can configure individual medical cards for each dependent under a single parent account."
  }
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-surface-alt/20">
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-sans">Frequently Asked Questions</h1>
            <p className="text-foreground/75 text-lg leading-relaxed">
              Find answers to common questions about our emergency profiles, medical security compliance, and physical card distribution.
            </p>
          </div>
        </section>

        <section className="pb-28 max-w-3xl mx-auto px-6">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl border border-border">
                <h4 className="font-bold text-lg text-foreground mb-3">{faq.question}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
