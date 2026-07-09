import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Hospital, FileInput, LogIn, Lock, Database } from 'lucide-react';

export default function HospitalsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-surface-alt/20">
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">For Hospitals & Clinics</h1>
            <p className="text-foreground/75 text-lg leading-relaxed">
              Standardizing critical patient admission details. Enable your emergency department to read vital medical files instantly and write update logs securely.
            </p>
          </div>
        </section>

        <section className="pb-28 max-w-5xl mx-auto px-6 gap-12 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">EMR Collaborative Bridging</h3>
            <p className="text-foreground/70 leading-relaxed">
              Resqu helps clinics bypass long administrative intake loops. Responders scan the smart QR and can instantly see pre-verified blood groups, chronic allergies, and emergency contact phones. Doctors can log in securely to write diagnosis reports back to the profile.
            </p>
            <div className="space-y-4 text-sm text-foreground/80 pt-2">
              <div className="flex items-start gap-3">
                <LogIn className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Doctor Verification</h4>
                  <p className="text-foreground/60">Secure OTP or token validation for doctors to edit records.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileInput className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Treatment Append</h4>
                  <p className="text-foreground/60">Log medication updates directly to the client profile upon release.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border">
            <Image src="/images/hospital-dashboard.png" alt="Hospital Dashboard Integration" fill className="object-cover" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
