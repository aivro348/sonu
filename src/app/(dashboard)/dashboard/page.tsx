import Link from 'next/link';
import { Activity, ShieldCheck, QrCode, CreditCard, Key } from 'lucide-react';

export default function DashboardOverview() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back, Sarah</h1>
          <p className="text-foreground/60 mt-1">Here is the status of your emergency profile.</p>
        </div>
        <Link 
          href="/profile"
          className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
        >
          Update Profile
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Profile Status Card */}
        <div className="glass rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Profile Status</h3>
              <p className="text-sm text-foreground/60">80% Complete</p>
            </div>
          </div>
          <div className="w-full bg-surface-alt rounded-full h-2 mb-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <p className="text-sm text-foreground/60">Missing blood type information.</p>
        </div>

        {/* Recent Scans Card */}
        <div className="glass rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-action/10 flex items-center justify-center text-action">
              <Activity size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Recent Scans</h3>
              <p className="text-sm text-foreground/60">Last 30 days</p>
            </div>
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">0</div>
          <p className="text-sm text-foreground/60">Your card hasn't been scanned recently.</p>
        </div>

        {/* NFC Card / QR Status */}
        <div className="glass rounded-2xl p-6 border border-primary/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 blur-xl transition-all group-hover:bg-primary/10" />
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20">
              <QrCode size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Your QR/NFC</h3>
              <p className="text-sm text-primary font-medium">Active</p>
            </div>
          </div>
          <Link href="/p/mock-uuid-1234" className="text-sm font-medium text-action hover:underline relative z-10">
            Preview Public View &rarr;
          </Link>
        </div>

      </div>
      
      {/* Physical Assets Preview */}
      <section className="pt-6 border-t border-border mt-8">
        <h2 className="text-xl font-bold tracking-tight mb-2 flex items-center gap-2">
          <CreditCard size={20} className="text-primary" /> Physical Asset Previews
        </h2>
        <p className="text-sm text-foreground/60 mb-8">This is how your information is dynamically generated and printed on your physical devices.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-surface-alt p-8 rounded-3xl border border-border">
          
          {/* NFC Card Preview */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-[340px] aspect-[1.586/1] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl relative overflow-hidden text-white border border-white/10 flex flex-col justify-between transition-transform hover:scale-105 duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="flex justify-between items-start z-10">
                <div className="font-bold tracking-widest text-lg">RESQU</div>
                <div className="bg-white p-1 rounded-md">
                  <QrCode size={36} className="text-slate-900" />
                </div>
              </div>
              <div className="z-10 space-y-1">
                <p className="text-xs text-white/60 uppercase tracking-widest font-medium mb-1">Emergency ID</p>
                <p className="text-xl font-bold tracking-wide">Sarah Jenkins</p>
                <div className="flex gap-3 text-xs font-bold mt-2">
                  <span className="bg-alert text-white px-2 py-0.5 rounded shadow-sm">O+</span>
                  <span className="bg-white/10 text-white/90 px-2 py-0.5 rounded">DOB: 1991-05-14</span>
                </div>
              </div>
            </div>
            <p className="mt-6 font-semibold text-sm text-foreground">NFC Wallet Card</p>
          </div>

          {/* Keychain Preview */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-[140px] rounded-full bg-gradient-to-b from-primary to-action p-3 shadow-xl relative overflow-hidden text-white flex flex-col items-center justify-between border-4 border-surface shadow-primary/20 transition-transform hover:scale-105 duration-300">
              <div className="w-3 h-3 rounded-full bg-surface shadow-inner mt-1 mb-1 ring-1 ring-black/10" />
              <div className="bg-white p-1 rounded-md shadow-sm">
                <QrCode size={44} className="text-slate-900" />
              </div>
              <div className="text-center w-full mt-1 pb-1">
                <p className="text-[10px] font-bold uppercase truncate leading-tight tracking-tight">Sarah Jenkins</p>
                <p className="text-[10px] bg-alert text-white rounded-sm mx-auto w-fit px-1.5 font-bold mt-0.5 shadow-sm">O+</p>
              </div>
            </div>
            <p className="mt-6 font-semibold text-sm text-foreground">NFC Keychain Tag</p>
          </div>

        </div>
      </section>

    </div>
  );
}
