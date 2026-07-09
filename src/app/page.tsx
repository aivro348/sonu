'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ShieldAlert, 
  Activity, 
  HeartPulse, 
  SmartphoneNfc, 
  Zap, 
  Lock, 
  Hospital, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Heart,
  Plus,
  HelpCircle,
  Award
} from 'lucide-react';

const storySteps = [
  {
    title: "1. Living Confidently & Active",
    description: "Sarah wears her Resqu smart key fob on her hiking backpack during her weekend morning jog. She lives confidently, knowing she is prepared for any situation.",
    image: "/images/story-step-1.png",
    meta: "SARAH'S JOG • 08:30 AM"
  },
  {
    title: "2. The Scan in a Crisis",
    description: "Sarah experiences a sudden asthma flare-up and collapses. Paramedics arrive within minutes. They spot the smart key fob on her backpack and scan the high-visibility QR code.",
    image: "/images/story-step-2.png",
    meta: "RESPONDER DISPATCH • 09:12 AM"
  },
  {
    title: "3. Auto-Alerts Dispatched",
    description: "Instantly, our system geolocates the scan coordinates and sends an automated SMS & email alert directly to Sarah's husband, Mark, detailing exactly where she is.",
    image: "/images/story-step-3.png",
    meta: "ALERT TRANSMITTED • 09:13 AM"
  },
  {
    title: "4. Informed Treatment",
    description: "At the hospital, the emergency room physician reads her vital records (her severe penicillin allergy) off the secure dashboard, avoiding fatal medication mistakes.",
    image: "/images/story-step-4.png",
    meta: "EMERGENCY ROOM • 09:35 AM"
  }
];

export default function LandingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % storySteps.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar />

      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-surface-alt/25 to-transparent">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-action/10 blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-center lg:text-left space-y-8 z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:scale-[1.02] transition-transform">
                <Award size={16} />
                <span>The new standard for medical emergency preparedness</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                Your life-saving data, <span className="text-primary">a tap away.</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-foreground/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Resqu empowers paramedics and doctors to instantly access your critical medical history, severe allergies, and emergency contacts in under 5 seconds with a simple card tap or QR scan.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link href="/signup" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 text-center flex items-center justify-center gap-2">
                  Activate Your Card <ArrowRight size={18} />
                </Link>
                <a href="#story" className="w-full sm:w-auto px-8 py-4 rounded-xl glass text-foreground font-semibold hover:bg-surface-alt transition-all text-center border border-border">
                  Watch the Story
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 border-t border-border/50 text-xs text-foreground/50 font-semibold uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-primary" size={18} />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="text-primary" size={18} />
                  <span>HIPAA Compliant</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 w-full relative z-10"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-surface-alt aspect-[4/3] max-w-lg mx-auto transform hover:scale-[1.015] hover:shadow-primary/5 transition-all duration-500">
                <Image 
                  src="/images/nfc-card-hero.png" 
                  alt="Resqu NFC Medical Emergency Card" 
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="products" className="py-28 border-t border-border/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">Wearable Safety Ecosystem</h2>
              <p className="text-foreground/75 text-lg">Robust, durable hardware configurations designed to stay with you, no matter where your life leads.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass rounded-3xl border border-border p-8 flex flex-col justify-between hover:border-primary/40 hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-alt border border-border">
                    <Image 
                      src="/images/nfc-card-hero.png" 
                      alt="Resqu Smart Card" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Resqu Wallet Card</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    A durable, credit-card-sized emergency card optimized for your wallet. Features high-visibility medical iconography, clean layout, and a scratch-resistant finish.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-sm font-semibold text-primary pt-4 border-t border-border/30">
                  <Link href="/products" className="hover:underline flex items-center gap-1">Details <ArrowRight size={14} /></Link>
                  <SmartphoneNfc size={20} />
                </div>
              </motion.div>

              {/* Product 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass rounded-3xl border border-border p-8 flex flex-col justify-between hover:border-primary/40 hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-alt border border-border">
                    <Image 
                      src="/images/nfc-keychain.png" 
                      alt="Resqu Premium Keychain" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Resqu Premium Keychain</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Crafted from water-resistant, premium full-grain leather. Tethers securely to keys, backpacks, or active gear. Features embedded NTAG213 microchip inside.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-sm font-semibold text-primary pt-4 border-t border-border/30">
                  <Link href="/products" className="hover:underline flex items-center gap-1">Details <ArrowRight size={14} /></Link>
                  <Heart size={20} />
                </div>
              </motion.div>

              {/* Product 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass rounded-3xl border border-border p-8 flex flex-col justify-between hover:border-primary/40 hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-alt border border-border">
                    <Image 
                      src="/images/emergency-scan.png" 
                      alt="Emergency MedTags" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Emergency MedTags</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Ultra-sticky, water-resistant decals featuring reflective backing. Designed to adhere directly to helmets, bicycles, or mobile device backings.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-sm font-semibold text-primary pt-4 border-t border-border/30">
                  <Link href="/products" className="hover:underline flex items-center gap-1">Details <ArrowRight size={14} /></Link>
                  <Plus size={20} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STORY / HOW IT WORKS SLIDESHOW */}
        <section id="story" className="py-28 bg-surface-alt/70 border-t border-border/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
                <span>Visual Narrative</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">A Life-Saving Story</h2>
              <p className="text-foreground/75 text-lg">Watch how the Resqu hardware and software ecosystem functions in real-time during an unexpected crisis.</p>
            </motion.div>

            {/* Interactive Slideshow */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Visual Step Showcase */}
              <div className="lg:col-span-7 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-surface aspect-[4/3] w-full hover:scale-[1.01] transition-transform duration-500">
                  <Image 
                    src={storySteps[currentStep].image} 
                    alt={storySteps[currentStep].title} 
                    fill
                    className="object-cover transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute bottom-6 left-6 bg-black/75 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-white tracking-widest uppercase">
                    {storySteps[currentStep].meta}
                  </div>
                </div>
              </div>

              {/* Right Column: Step Selectors & Details */}
              <div className="lg:col-span-5 space-y-6">
                {storySteps.map((step, idx) => {
                  const isActive = currentStep === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 hover:translate-x-1 ${
                        isActive 
                          ? 'bg-surface border-primary/45 shadow-md shadow-primary/5' 
                          : 'border-transparent hover:bg-surface/30'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                        isActive ? 'bg-primary text-white scale-105' : 'bg-foreground/10 text-foreground/60'
                      }`}>
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className={`font-bold text-lg transition-colors ${isActive ? 'text-foreground' : 'text-foreground/60'}`}>
                          {step.title}
                        </h4>
                        {isActive && (
                          <p className="text-foreground/70 text-sm leading-relaxed mt-2 animate-fade-in">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            <div className="text-center mt-12">
              <Link href="/how-it-works" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                View Full Interactive Journey Details <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </section>

        {/* FAMILY VAULT SECTION */}
        <section id="family-vault" className="py-28 border-t border-border/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  <Users size={16} />
                  <span>Centralized Health Management</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Family Vault Dashboard</h2>
                <p className="text-foreground/75 text-lg leading-relaxed">
                  Safeguard your entire household from one centralized dashboard. Family Vault provides configuration tools, medical profile toggling, and card syncing for children, spouses, and elderly parents.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Unified Interface: Instantly switch between family member profiles",
                    "Independent Hardware: Configure bespoke data for every individual card",
                    "GPS-Enabled SMS Alerts: Automatically notify up to 5 emergency contacts per member"
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 text-foreground/80 hover:translate-x-0.5 transition-transform">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href="/family-vault" className="px-6 py-3 bg-surface border border-border rounded-xl text-sm font-semibold hover:bg-surface-alt transition-colors inline-flex items-center gap-2">
                    Learn More About Family Secure <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-surface-alt aspect-[4/3] max-w-lg mx-auto">
                  <Image 
                    src="/images/family-vault.png" 
                    alt="Family sitting together looking at phone" 
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* HEALTH PLANS & PRICING */}
        <section id="health-plans" className="py-28 bg-surface-alt/70 border-t border-border/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">Flexible Safety Subscriptions</h2>
              <p className="text-foreground/75 text-lg">All plans include standard dynamic database profile updates, HIPAA-compliant encryption, and initial hardware distribution.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" id="pricing">
              {/* Plan 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass rounded-3xl border border-border p-8 flex flex-col justify-between hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl font-bold text-foreground">Individual Basic</h3>
                  <p className="text-foreground/60 text-sm mt-1">Bespoke solo adventure security.</p>
                  <div className="flex items-baseline gap-1 mt-6 mb-8">
                    <span className="text-4xl font-extrabold text-foreground">₹999</span>
                    <span className="text-foreground/60 text-sm">/ year</span>
                  </div>
                  <ul className="space-y-4 text-sm text-foreground/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span>1 Physical Smart Card</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span>Dynamic Medical Profile Setup</span>
                    </li>
                  </ul>
                </div>
                <Link href="/health-plans" className="mt-8 block w-full py-3.5 rounded-xl bg-surface-alt border border-border font-medium text-center hover:bg-surface/50 transition-colors">
                  Plan Details
                </Link>
              </motion.div>

              {/* Plan 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass rounded-3xl border-2 border-primary p-8 flex flex-col justify-between relative shadow-xl shadow-primary/5 hover:scale-[1.01] hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Individual Premium</h3>
                  <p className="text-foreground/60 text-sm mt-1">Full alert coverage and hardware combo.</p>
                  <div className="flex items-baseline gap-1 mt-6 mb-8">
                    <span className="text-4xl font-extrabold text-foreground">₹1999</span>
                    <span className="text-foreground/60 text-sm">/ year</span>
                  </div>
                  <ul className="space-y-4 text-sm text-foreground/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span className="font-semibold text-foreground">1 Card + 1 Leather Keychain</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span>Allergies, Medications & Vitals</span>
                    </li>
                  </ul>
                </div>
                <Link href="/health-plans" className="mt-8 block w-full py-3.5 rounded-xl bg-primary text-white font-bold text-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Plan Details
                </Link>
              </motion.div>

              {/* Plan 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass rounded-3xl border border-border p-8 flex flex-col justify-between hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl font-bold text-foreground">Family Secure</h3>
                  <p className="text-foreground/60 text-sm mt-1">Multi-profile household network.</p>
                  <div className="flex items-baseline gap-1 mt-6 mb-8">
                    <span className="text-4xl font-extrabold text-foreground">₹4999</span>
                    <span className="text-foreground/60 text-sm">/ year</span>
                  </div>
                  <ul className="space-y-4 text-sm text-foreground/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span className="font-semibold text-foreground">Up to 4 Household Members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span>4 Cards + 2 Keychains included</span>
                    </li>
                  </ul>
                </div>
                <Link href="/health-plans" className="mt-8 block w-full py-3.5 rounded-xl bg-surface-alt border border-border font-medium text-center hover:bg-surface/50 transition-colors">
                  Plan Details
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FOR HOSPITALS SECTION */}
        <section id="hospitals" className="py-28 border-t border-border/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full order-last lg:order-first"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-surface-alt aspect-[4/3] max-w-lg mx-auto">
                  <Image 
                    src="/images/hospital-dashboard.png" 
                    alt="Hospital medical profiles screen" 
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-action/10 text-action text-sm font-medium border border-action/20">
                  <Hospital size={16} />
                  <span>EMR & Doctor Collaboration</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Direct Hospital Write-Back</h2>
                <p className="text-foreground/75 text-lg leading-relaxed">
                  Resqu acts as a direct bridge. Doctors can log in securely using standardized credentials from any medical facility. They can view comprehensive files (X-Rays, MRI, ECG reports) and immediately write discharge reports back to the patient's card.
                </p>

                <div className="pt-4">
                  <Link href="/hospitals" className="px-6 py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/95 transition-all inline-flex items-center gap-2 shadow-md shadow-primary/10">
                    Hospital Integration Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section id="contact" className="py-28 relative overflow-hidden bg-primary text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 -z-10 mix-blend-overlay" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-6 text-center space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Be prepared. Protect your life today.</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Register your Resqu profile, select your hardware bundle, and receive your card with standard free shipping dispatched in 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/signup" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-primary font-bold hover:bg-white/90 transition-all shadow-lg text-lg">
                Register Now
              </Link>
              <a href="mailto:support@resqu.com" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-dark/20 backdrop-blur-sm text-white font-medium hover:bg-black/10 transition-all border border-white/20 text-lg">
                Contact Support
              </a>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
      
    </div>
  );
}
