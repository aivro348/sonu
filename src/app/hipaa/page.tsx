import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HIPAACompliancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-surface-alt/20 py-20">
        <article className="max-w-3xl mx-auto px-6 glass p-10 md:p-16 rounded-3xl border border-border space-y-8">
          <header className="space-y-2 border-b border-border pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">HIPAA Compliance</h1>
              <p className="text-foreground/60 text-sm mt-1">Health Insurance Portability and Accountability Act Standards</p>
            </div>
            <div className="bg-primary/10 text-primary border border-primary/20 rounded-xl px-4 py-2 flex items-center gap-2 self-start md:self-center font-bold text-sm shrink-0">
              <ShieldCheck size={20} />
              <span>COMPLIANT</span>
            </div>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">HIPAA Safeguards</h2>
            <p className="text-foreground/75 leading-relaxed text-sm">
              Resqu complies with the Administrative, Physical, and Technical Safeguards defined under the Health Insurance Portability and Accountability Act (HIPAA) to protect Protected Health Information (PHI).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Technical Safeguards</h2>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span><strong>Access Control:</strong> Unique user identifiers and automatic logout mechanisms enforce credential checks.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span><strong>Transmission Security:</strong> All API communication is encrypted using TLS 1.3 to prevent MITM attacks.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span><strong>Audit Logs:</strong> Real-time scan and access logging track when, where, and who reads or modifies PHI records.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. Physical Safeguards</h2>
            <p className="text-foreground/75 leading-relaxed text-sm">
              Our backend services are hosted entirely on AWS and Supabase servers, which maintain strict physical security guidelines (biometric checks, round-the-clock surveillance, and access logging at physical data facilities).
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
