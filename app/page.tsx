"use client";

import React from 'react';

export default function Page() {
  const myEmail = "youtun.freelance@gmail.com"; 

  const handleDispatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof window === "undefined") return;

    const formData = new FormData(e.currentTarget);
    const business = formData.get("business") as string;
    const vision = formData.get("vision") as string;
    
    // Automatically generates the formal inquiry email
    window.location.href = `mailto:${myEmail}?subject=Project_Inquiry: ${business}&body=Hello Youtun.Dev,%0D%0A%0D%0AI want to initialize a project for ${business}.%0D%0A%0D%0AVision Detail:%0D%0A${vision}`;
  };

  return (
    <main className="min-h-screen p-6 md:p-20 max-w-[1400px] mx-auto selection:bg-accent/20">
      
      {/* --- HERO SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-accent/50"></span>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">KHI_NODE // VERIFIED_PORTFOLIO</p>
          </div>
          
          {/* Animated YOUTUN Heading */}
          <h1 className="text-8xl md:text-[13rem] font-black leading-none tracking-tighter text-luxury animate-youtun">
            YOUTUN
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl text-slate-500 max-w-xl font-medium leading-tight">
            Architecting <span className="text-white">high-velocity</span> digital infrastructure and proprietary web solutions.
          </p>
        </div>

        {/* GOAL TRACKER CARD */}
        <div className="lg:col-span-4 glass-panel p-10 group">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-accent/60">SYSTEM_STATUS</p>
          <h2 className="text-2xl font-bold mb-6 italic text-white tracking-tight">iPhone 13 Fund</h2>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-4">
            <div className="h-full w-[6.7%] bg-accent shadow-[0_0_15px_#00f2ff]"></div>
          </div>
          <div className="flex justify-between font-mono text-[10px] text-slate-600">
            <span>PKR 75,000</span>
            <span className="text-accent font-bold uppercase">6.7% Active</span>
          </div>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
        <div className="glass-panel p-12 group">
          <h3 className="text-4xl font-black italic mb-2 group-hover:text-accent transition-all">SADDAR_EDGE</h3>
          <p className="text-[10px] text-accent font-mono mb-6 tracking-widest uppercase">RETAIL_PROTOCOL</p>
          <p className="text-slate-500 mb-10 text-sm leading-relaxed max-w-xs">Bespoke catalog systems for local retail giants requiring instant synchronization.</p>
          <span className="text-2xl font-black text-white">PKR 8,000+</span>
        </div>

        <div className="glass-panel p-12 group">
          <h3 className="text-4xl font-black italic mb-2 group-hover:text-accent transition-all">DHA_ELITE</h3>
          <p className="text-[10px] text-accent font-mono mb-6 tracking-widest uppercase">CORP_INFRA</p>
          <p className="text-slate-500 mb-10 text-sm leading-relaxed max-w-xs">Ultra-premium corporate landing pages with high-end motion design.</p>
          <span className="text-2xl font-black text-white">PKR 15,000+</span>
        </div>
      </div>

      {/* --- INQUIRY PORTAL: CENTERED --- */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="mb-20">
          <h2 className="text-6xl font-black mb-4 italic tracking-tighter text-white">INITIALIZE</h2>
          <p className="text-[10px] font-black uppercase tracking-[0.8em] text-accent/60">Proposal Partnership Dispatch</p>
        </div>

        <form onSubmit={handleDispatch} className="glass-panel p-12 md:p-20 text-left">
          <div className="grid grid-cols-1 gap-16">
            <div className="flex flex-col gap-2">
              <label className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600">Representing Entity</label>
              <input required name="business" type="text" placeholder="BUSINESS_NAME" className="luxury-input uppercase text-sm font-bold" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600">Technical Vision</label>
              <textarea required name="vision" placeholder="PROJECT_SCOPE" className="luxury-input uppercase text-sm font-bold" rows={1} />
            </div>

            <button type="submit" className="w-full py-10 bg-accent text-slate-950 font-black uppercase tracking-[0.6em] text-xs hover:tracking-[0.8em] transition-all active:scale-95 shadow-[0_20px_40px_rgba(0,242,255,0.2)]">
              Send Proposal Inquiry
            </button>
          </div>
        </form>
      </section>

      <footer className="mt-40 text-center pb-20 opacity-20">
        <p className="text-[9px] font-mono uppercase tracking-[1em]">© 2026 Youtun.Dev Portfolio • Karachi, Pakistan</p>
      </footer>
    </main>
  );
}
