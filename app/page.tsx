"use client";

import React, { useState, useEffect } from 'react';

export default function Page() {
  const myEmail = "youtun.freelance@gmail.com";
  const [time, setTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Live Node Clock for Karachi Aura
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDispatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const formData = new FormData(e.currentTarget);
    const business = formData.get("business") as string;
    const vision = formData.get("vision") as string;
    
    setTimeout(() => {
      window.location.href = `mailto:${myEmail}?subject=REQ: ${business}&body=Service: ${selectedService}%0D%0AVision: ${vision}`;
      setIsSending(false);
    }, 800);
  };

  return (
    <main className="relative min-h-screen p-6 md:p-16 max-w-[1300px] mx-auto selection:bg-accent/30">
      <div className="scan-line"></div>

      {/* TOP HUD */}
      <div className="flex justify-between items-center mb-16 animate-in fade-in slide-in-from-top-4 duration-1000">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
          <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-accent">KHI_NODE // {time}</p>
        </div>
        <a href={`mailto:${myEmail}`} className="btn-pulse bg-accent text-slate-950 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest hover:scale-105 transition-all">
          GMAIL_DIRECT
        </a>
      </div>
      
      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-24">
        <div className="lg:col-span-8">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600 mb-2">VERIFIED_PORTFOLIO // 2026</p>
          <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter text-white animate-youtun">
            YOUTUN
          </h1>
          <p className="mt-6 text-lg text-slate-500 max-w-lg font-medium leading-snug">
            Engineering <span className="text-white">high-velocity</span> web systems and digital architecture for the modern trade landscape.
          </p>
        </div>

        {/* STATUS CARD (Moves DOWN on hover) */}
        <div className="lg:col-span-4 glass-card p-8 hover-down">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-4 text-accent/60">SYSTEM_STATUS</p>
          <h2 className="text-xl font-bold mb-4 italic text-white tracking-tight">iPhone 13 Fund</h2>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-3">
            <div className="h-full w-[6.7%] bg-accent shadow-[0_0_10px_#00f2ff]"></div>
          </div>
          <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">6.7% STABLE_AND_ACTIVE</p>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
        {/* Card 1: Moves LEFT on hover */}
        <div className="glass-card p-10 hover-left border-l-2 border-accent/20 hover:border-accent">
          <h3 className="text-3xl font-black italic mb-1">SADDAR_EDGE</h3>
          <p className="text-[9px] text-accent font-mono mb-6 tracking-widest uppercase text-opacity-70">Inventory_Protocol</p>
          <p className="text-slate-500 text-xs mb-8 leading-relaxed">High-sync catalog systems for scaling retail trade operations.</p>
          <button 
            onClick={() => setSelectedService("SADDAR_EDGE")}
            className={`w-full py-3 border ${selectedService === "SADDAR_EDGE" ? "bg-accent text-black" : "border-accent/20 text-accent"} text-[8px] font-black uppercase tracking-widest transition-all mb-4`}
          >
            {selectedService === "SADDAR_EDGE" ? "PROTOCOL_LOCKED" : "SELECT_SERVICE"}
          </button>
          <span className="text-xl font-black text-white">PKR 8,000+</span>
        </div>

        {/* Card 2: Moves RIGHT on hover */}
        <div className="glass-card p-10 hover-right border-r-2 border-white/5 hover:border-white/20">
          <h3 className="text-3xl font-black italic mb-1">DHA_ELITE</h3>
          <p className="text-[9px] text-accent font-mono mb-6 tracking-widest uppercase text-opacity-70">Corp_Infrastructure</p>
          <p className="text-slate-500 text-xs mb-8 leading-relaxed">Ultra-premium identity deployment for elite corporate entities.</p>
          <button 
            onClick={() => setSelectedService("DHA_ELITE")}
            className={`w-full py-3 border ${selectedService === "DHA_ELITE" ? "bg-white text-black" : "border-white/10 text-white"} text-[8px] font-black uppercase tracking-widest transition-all mb-4`}
          >
            {selectedService === "DHA_ELITE" ? "PROTOCOL_LOCKED" : "SELECT_SERVICE"}
          </button>
          <span className="text-xl font-black text-white">PKR 15,000+</span>
        </div>
      </div>

      {/* INQUIRY FORM (Moves UP on hover) */}
      <section className="max-w-3xl mx-auto hover-up transition-all duration-700">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-black mb-2 italic tracking-tighter text-white uppercase">Initialize</h2>
          {selectedService && <p className="text-accent text-[9px] font-bold uppercase tracking-widest animate-pulse">Ready: {selectedService}</p>}
        </div>
        
        <form onSubmit={handleDispatch} className={`glass-card p-10 md:p-16 text-left transition-all ${isSending ? 'opacity-50 scale-95' : ''}`}>
          <div className="grid grid-cols-1 gap-12">
            <input required name="business" placeholder="BUSINESS_NAME" className="bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-accent transition-all uppercase text-xs font-bold placeholder:text-slate-800" />
            <textarea 
              required 
              name="vision" 
              placeholder="PROJECT_SCOPE" 
              className="bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-accent transition-all uppercase text-xs font-bold placeholder:text-slate-800" 
              rows={1} 
              defaultValue={selectedService ? `Requesting ${selectedService}. Vision: ` : ""}
            />
            <button type="submit" className="btn-pulse w-full py-8 bg-accent text-slate-950 font-black uppercase tracking-[0.5em] text-[10px] hover:tracking-[0.7em] transition-all active:scale-95">
              {isSending ? "TRANSMITTING..." : "DISPATCH_INQUIRY"}
            </button>
          </div>
        </form>
      </section>

      <footer className="mt-32 text-center pb-16 opacity-20">
        <p className="text-[8px] font-mono uppercase tracking-[1em]">YOUTUN_PROTOCOLS // KARACHI // 2026</p>
      </footer>
    </main>
  );
}
