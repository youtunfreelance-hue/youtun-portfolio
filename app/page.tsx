"use client";

import React, { useState, useEffect } from 'react';

export default function Page() {
  const myEmail = "youtun.freelance@gmail.com";
  const [time, setTime] = useState("");

  // Partner Addition: Live Karachi Node Clock
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDispatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const business = formData.get("business") as string;
    const vision = formData.get("vision") as string;
    window.location.href = `mailto:${myEmail}?subject=Project_Inquiry: ${business}&body=Hello Youtun.Dev,%0D%0A%0D%0AI want to initialize a project for ${business}.%0D%0A%0D%0AVision Detail:%0D%0A${vision}`;
  };

  return (
    <main className="relative min-h-screen p-6 md:p-20 max-w-[1400px] mx-auto">
      {/* Moving Background Grid */}
      <div className="fixed inset-0 bg-grid -z-10 pointer-events-none"></div>

      {/* TOP HEADER: CLOCK & STATUS */}
      <div className="flex justify-between items-center mb-20">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">Node_Live: {time}</p>
        </div>
        <a 
          href={`mailto:${myEmail}`}
          className="gmail-pulse bg-accent text-slate-950 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
        >
          Direct_Gmail
        </a>
      </div>
      
      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
        <div className="lg:col-span-8">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-4">VERIFIED_PORTFOLIO // 2026</p>
          <h1 className="text-8xl md:text-[13rem] font-black leading-none tracking-tighter text-luxury animate-youtun">
            YOUTUN
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-slate-400 max-w-xl font-medium">
            Architecting <span className="text-white">high-velocity</span> digital infrastructure for the modern economy.
          </p>
        </div>

        {/* STATUS CARD */}
        <div className="lg:col-span-4 glass-panel p-10 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent/20"></div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-accent">SYSTEM_STATUS</p>
          <h2 className="text-2xl font-bold mb-6 italic text-white">iPhone 13 Fund</h2>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-4">
            <div className="h-full w-[6.7%] bg-accent shadow-[0_0_15px_#00f2ff]"></div>
          </div>
          <div className="flex justify-between font-mono text-[10px] text-slate-500">
            <span>PKR 75,000</span>
            <span className="text-accent font-bold">6.7% READY</span>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
        <div className="glass-panel p-12 hover:bg-slate-900/40 transition-all border-l-4 border-l-accent">
          <h3 className="text-4xl font-black italic mb-2">SADDAR_EDGE</h3>
          <p className="text-[10px] text-accent font-mono mb-8 tracking-widest">RETAIL_PROTOCOL</p>
          <p className="text-slate-500 text-sm mb-10 leading-relaxed">High-sync inventory systems for scaling local trade operations.</p>
          <span className="text-2xl font-black text-white">PKR 8,000+</span>
        </div>

        <div className="glass-panel p-12 hover:bg-slate-900/40 transition-all border-l-4 border-l-white/10">
          <h3 className="text-4xl font-black italic mb-2">DHA_ELITE</h3>
          <p className="text-[10px] text-accent font-mono mb-8 tracking-widest">CORP_INFRA</p>
          <p className="text-slate-500 text-sm mb-10 leading-relaxed">Bespoke identity deployment for elite corporate entities.</p>
          <span className="text-2xl font-black text-white">PKR 15,000+</span>
        </div>
      </div>

      {/* INQUIRY PORTAL */}
      <section className="max-w-4xl mx-auto text-center relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent/10 blur-[100px]"></div>
        <h2 className="text-6xl font-black mb-12 italic tracking-tighter text-white">INITIALIZE</h2>
        <form onSubmit={handleDispatch} className="glass-panel p-12 md:p-20 text-left">
          <div className="grid grid-cols-1 gap-16">
            <input required name="business" placeholder="BUSINESS_NAME" className="bg-transparent border-b-2 border-white/10 py-4 text-white outline-none focus:border-accent transition-colors uppercase text-sm font-bold placeholder:text-slate-800" />
            <textarea required name="vision" placeholder="PROJECT_SCOPE" className="bg-transparent border-b-2 border-white/10 py-4 text-white outline-none focus:border-accent transition-colors uppercase text-sm font-bold placeholder:text-slate-800" rows={1} />
            <button type="submit" className="gmail-pulse w-full py-10 bg-accent text-slate-950 font-black uppercase tracking-[0.6em] text-xs hover:tracking-[0.8em] transition-all active:scale-95">
              Dispatch Inquiry
            </button>
          </div>
        </form>
      </section>

      <footer className="mt-40 text-center pb-20 opacity-30">
        <p className="text-[9px] font-mono uppercase tracking-[1.5em]">YOUTUN_PROTOCOLS // KARACHI_PAK // 2026</p>
      </footer>
    </main>
  );
}
