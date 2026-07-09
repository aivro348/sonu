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
    { name: 'Medical Profile', href: '/profile', icon: UserCircle },
    { name: 'Emergency Contacts', href: '/contacts', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-surface-alt flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-surface border-r border-border md:min-h-screen flex flex-col shadow-sm">
        <div className="p-6 border-b border-border">
          <Link href="/dashboard" className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tight">
            <HeartPulse size={28} />
            Resqu
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
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
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-alert hover:bg-alert/10 transition-colors font-medium">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto view-transition-container">
          {children}
        </div>
      </main>
    </div>
  );
}
