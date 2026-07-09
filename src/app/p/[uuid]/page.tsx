import Link from 'next/link';
import { AlertTriangle, Phone, Activity, HeartPulse } from 'lucide-react';

export default function PublicEmergencyView({ params }: { params: { uuid: string } }) {
  // In a real app, we'd fetch profile data using params.uuid here via Server Components.
  
  return (
    <div className="min-h-screen bg-surface text-foreground font-sans selection:bg-alert/20 selection:text-alert">
      
      {/* Critical Header */}
      <header className="bg-alert text-white p-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle size={32} className="animate-pulse" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">EMERGENCY PROFILE</h1>
              <p className="text-white/80 font-medium">Sarah Jenkins</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-md border border-white/10">
            <HeartPulse size={24} />
            <div className="font-bold text-xl">O+</div>
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
        <section className="mt-12 pt-8 border-t border-border text-center space-y-4">
          <p className="text-sm text-foreground/60">Are you an authorized medical professional?</p>
          <Link href={`/login?redirect=/p/${params.uuid}/edit`} className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-xl text-sm font-medium hover:bg-surface-alt transition-colors">
            Hospital / Doctor Login
          </Link>
        </section>

      </main>

    </div>
  );
}
