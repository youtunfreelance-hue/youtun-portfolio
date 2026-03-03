"use client";

import React, { useState, useEffect } from 'react';

export default function Page() {
  const myEmail = "youtun.freelance@gmail.com";
  const [time, setTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Live Karachi Clock for peak Aura
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
      window.location.href = `mailto:${myEmail}?subject=NODE_INQUIRY: ${business}&body=Protocol: ${selectedService}%0D%0AVision: ${vision}`;
      setIsSending(false);
    }, 800);
  };

  return (
    <main className="relative min-h-screen p-6 md:p-24 max-w-[1500px] mx-auto selection:bg-cyan-500/30">
      {/* Partner Addition: Scanning HUD Line */}
      <div className="scan-line"></div>

      {/* TOP HUD: STATUS & CONTACT */}
      <div className="flex justify-between items-center mb-28">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-cyan-400">KARACHI_NODE // {time}</p>
        </div>
        <a href={`mailto:${myEmail}`} className="glow-breathe bg-cyan-400 text-slate-950 px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-110 transition-transform">
          Establish_Contact
        </a>
      </div>
      
      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-40">
        <div className="lg:col-span-8">
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 mb-6">Verified Digital Architect</p>
          <h1 className="text-[9rem] md:text-[14rem] font-black leading-[0.8] tracking-tighter text-white animate-youtun">
            YOUTUN
          </h1>
          <p className="mt-12 text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed">
            Building <span className="text-white border-b border-cyan-400">high-velocity</span> web systems and digital assets for the 2026 trade landscape.
          </p>
        </div>

        {/* STATUS PANEL: HOVER-DOWN */}
        <div className="lg:col-span-4 glass-card p-12 hover-down">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-cyan-400">Deployment_Fund</p>
          <h2 className="text-3xl font-bold mb-8 italic text-white tracking-tighter">iPhone 13 Fund</h2>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-6">
            <div className="h-full w-[6.7%] bg-cyan-400 shadow-[0_0_20px_#00f2ff]"></div>
          </div>
          <div className="flex justify-between font-mono text-[10px] text-slate-500">
            <span>Goal: PKR 75k</span>
            <span className="text-cyan-400 font-bold uppercase">6.7% Active</span>
          </div>
        </div>
      </div>

      {/* SERVICES: DIRECTIONAL HUB */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-48">
        {/* SADDAR: HOVER-LEFT */}
        <div className="glass-card p-14 hover-left group">
          <h3 className="text-5xl font-black italic mb-4 group-hover:text-cyan-400 transition-colors">SADDAR_EDGE</h3>
          <p className="text-[10px] text-cyan-400 font-mono mb-10 tracking-[0.3em] uppercase underline decoration-cyan-400/30">Retail Optimization</p>
          <p className="text-slate-400 text-sm mb-12 leading-relaxed">Bespoke inventory protocols designed for high-volume Saddar-scale logistics.</p>
          <button 
            onClick={() => setSelectedService("SADDAR_EDGE")}
            className={`w-full py-5 border ${selectedService === "SADDAR_EDGE" ? "bg-cyan-400 text-black" : "border-white/10 text-white"} text-[10px] font-black uppercase tracking-widest transition-all glow-breathe`}
          >
            {selectedService === "SADDAR_EDGE" ? "PROTOCOL_LOCKED" : "INITIALIZE_PLAN"}
          </button>
        </div>

        {/* DHA: HOVER-RIGHT */}
        <div className="glass-card p-14 hover-right group">
          <h3 className="text-5xl font-black italic mb-4 group-hover:text-cyan-400 transition-colors">DHA_ELITE</h3>
          <p className="text-[10px] text-cyan-400 font-mono mb-10 tracking-[0.3em] uppercase underline decoration-cyan-400/30">Corp Deployment</p>
          <p className="text-slate-400 text-sm mb-12 leading-relaxed">Ultra-high-end corporate infrastructure for elite identity establishment.</p>
          <button 
            onClick={() => setSelectedService("DHA_ELITE")}
            className={`w-full py-5 border ${selectedService === "DHA_ELITE" ? "bg-white text-black" : "border-white/10 text-white"} text-[10px] font-black uppercase tracking-widest transition-all`}
          >
            {selectedService === "DHA_ELITE" ? "PROTOCOL_LOCKED" : "INITIALIZE_PLAN"}
          </button>
        </div>
      </div>

      {/* INQUIRY HUB: HOVER-UP */}
      <section className="max-w-4xl mx-auto hover-up transition-all duration-1000">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-black mb-6 italic tracking-tighter text-white uppercase">Initialize</h2>
          {selectedService && <p className="text-cyan-400 text-xs font-mono uppercase tracking-[0.5em] animate-pulse">Ready to deploy: {selectedService}</p>}
        </div>
        
        <form onSubmit={handleDispatch} className={`glass-card p-14 md:p-24 text-left transition-all ${isSending ? 'opacity-50 scale-95' : ''}`}>
          <div className="grid grid-cols-1 gap-16">
            <input required name="business" placeholder="ORGANIZATION_NAME" className="bg-transparent border-b-2 border-white/5 py-6 text-white outline-none focus:border-cyan-400 transition-all uppercase text-sm font-bold placeholder:text-slate-800" />
            <textarea 
              required 
              name="vision" 
              placeholder="PROJECT_SCOPE" 
              className="bg-transparent border-b-2 border-white/5 py-6 text-white outline-none focus:border-cyan-400 transition-all uppercase text-sm font-bold placeholder:text-slate-800" 
              rows={1} 
              defaultValue={selectedService ? `Requesting ${selectedService} protocol. Vision: ` : ""}
            />
            <button type="submit" className="glow-breathe w-full py-12 bg-cyan-400 text-slate-950 font-black uppercase tracking-[0.8em] text-xs hover:tracking-[1em] transition-all">
              {isSending ? "TRANSMITTING..." : "DISPATCH_INQUIRY"}
            </button>
          </div>
        </form>
      </section>

      <footer className="mt-48 text-center pb-24 opacity-20">
        <p className="text-[10px] font-mono uppercase tracking-[1.5em]">YOUTUN_PROTOCOLS // KARACHI_PK // MARCH_2026</p>
      </footer>
    </main>
  );
}
