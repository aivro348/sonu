'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, UserCircle, Users, LogOut, HeartPulse } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Profile', href: '/profile', icon: UserCircle },
    { name: 'Contacts', href: '/contacts', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-surface-alt flex flex-col md:flex-row pb-20 md:pb-0">
      
      {/* Desktop Sidebar & Mobile Top Header */}
      <aside className="w-full md:w-64 bg-surface border-b md:border-r border-border md:min-h-screen flex flex-col shadow-sm sticky top-0 z-40 md:relative">
        <div className="p-4 md:p-6 border-b border-border flex justify-between items-center md:block">
          <Link href="/dashboard" className="flex items-center gap-2 text-primary font-bold text-xl md:text-2xl tracking-tight">
            <HeartPulse size={24} className="md:w-7 md:h-7" />
            Resqu
          </Link>
          <button className="md:hidden text-alert hover:text-alert/80 p-2">
            <LogOut size={20} />
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 p-4 flex-col space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                  isActive 
                    ? 'bg-primary text-white shadow-md shadow-primary/20' 
                    : 'text-foreground/70 hover:bg-surface-alt hover:text-foreground'
                }`}
              >
                <Icon size={20} />
                {item.name === 'Profile' ? 'Medical Profile' : item.name === 'Contacts' ? 'Emergency Contacts' : item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block p-4 border-t border-border">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-alert hover:bg-alert/10 transition-colors font-medium">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface border-t border-border flex items-center justify-around p-3 pb-safe z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                isActive ? 'text-primary' : 'text-foreground/50'
              }`}
            >
              <Icon size={24} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto view-transition-container pb-8">
          {children}
        </div>
      </main>
    </div>
  );
}
