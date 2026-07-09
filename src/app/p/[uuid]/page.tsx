import Link from 'next/link';
import { AlertTriangle, Phone, Activity, HeartPulse } from 'lucide-react';

export default function PublicEmergencyView({ params }: { params: { uuid: string } }) {
  // In a real app, we'd fetch profile data using params.uuid here via Server Components.
  
  return (
    <div className="min-h-screen bg-surface text-foreground font-sans selection:bg-alert/20 selection:text-alert">
      
      {/* Critical Header */}
      <header className="bg-alert text-white p-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              {/* Dummy Image for Verification */}
              <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Jenkins" className="w-16 h-16 rounded-full border-2 border-white object-cover shadow-sm" />
              <div className="absolute -bottom-1 -right-1 bg-white text-alert rounded-full p-1 shadow-sm">
                <AlertTriangle size={14} className="animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">EMERGENCY PROFILE</h1>
              <p className="text-white font-semibold text-lg">Sarah Jenkins, 32</p>
              <p className="text-white/80 text-sm">123 Maple Street, Seattle, WA</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/20 px-4 py-3 rounded-xl backdrop-blur-md border border-white/10 shrink-0">
            <HeartPulse size={24} />
            <div className="font-bold text-2xl">O+</div>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-3xl mx-auto space-y-6 pb-24">
        
        <div className="p-4 rounded-xl bg-alert/10 border-l-4 border-alert">
          <p className="text-alert font-semibold">An emergency alert has been sent to Sarah's emergency contacts.</p>
        </div>

        {/* Medical Info */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold border-b border-border pb-2">Critical Information</h2>
          
          <div className="glass rounded-xl p-5 border-l-4 border-l-alert space-y-2">
            <h3 className="text-sm uppercase tracking-widest text-foreground/50 font-bold">Allergies</h3>
            <p className="font-semibold text-lg text-alert">Peanuts (Severe - carries EpiPen)</p>
          </div>
          
          <div className="glass rounded-xl p-5 border border-border space-y-2">
            <h3 className="text-sm uppercase tracking-widest text-foreground/50 font-bold">Current Medications</h3>
            <p className="font-medium text-lg">Lisinopril 10mg daily</p>
          </div>

          <div className="glass rounded-xl p-5 border border-border space-y-2">
            <h3 className="text-sm uppercase tracking-widest text-foreground/50 font-bold">Chronic Conditions</h3>
            <p className="font-medium text-lg">Hypertension</p>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="space-y-4 pt-4">
          <h2 className="text-xl font-bold border-b border-border pb-2">Emergency Contacts</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4 border border-border">
              <p className="font-semibold text-lg">Mark Jenkins</p>
              <p className="text-sm text-foreground/60 mb-3">Husband</p>
              <a href="tel:+15551234567" className="flex items-center gap-2 justify-center w-full py-2 bg-action text-white rounded-lg font-medium hover:bg-action/90 transition-colors">
                <Phone size={16} />
                Call +1 (555) 123-4567
              </a>
            </div>
            <div className="glass rounded-xl p-4 border border-border">
              <p className="font-semibold text-lg">Emily Davis</p>
              <p className="text-sm text-foreground/60 mb-3">Sister</p>
              <a href="tel:+15559876543" className="flex items-center gap-2 justify-center w-full py-2 bg-action text-white rounded-lg font-medium hover:bg-action/90 transition-colors">
                <Phone size={16} />
                Call +1 (555) 987-6543
              </a>
            </div>
          </div>
        </section>

        {/* Hospital Login Prompt */}
        <section className="mt-12 p-8 border border-action/20 bg-action/5 rounded-2xl text-center space-y-4">
          <h2 className="text-lg font-semibold text-action flex items-center justify-center gap-2">
            <Activity size={20} />
            Are you an authorized medical professional?
          </h2>
          <p className="text-sm text-foreground/70">
            Log in to our secure portal to access this patient's complete past health records, medical reports, and comprehensive history.
          </p>
          <Link href={`/login?redirect=/p/${params.uuid}/edit`} className="inline-flex items-center justify-center px-8 py-3 bg-action text-white rounded-xl text-sm font-medium hover:bg-action/90 transition-colors shadow-lg shadow-action/20">
            Hospital / Doctor Login
          </Link>
        </section>

      </main>

    </div>
  );
}
