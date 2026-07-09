import Link from 'next/link';
import { Activity, ShieldCheck, QrCode } from 'lucide-react';

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
      
    </div>
  );
}
