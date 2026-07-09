import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SplashScreen from '@/components/SplashScreen';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Resqu - Instant Emergency Medical Profile',
  description: 'Tap-to-access medical profiles for emergency situations powered by NFC & QR codes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-surface text-foreground antialiased min-h-screen flex flex-col`}>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
