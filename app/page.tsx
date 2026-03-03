"use client";

import React, { useState, useEffect } from 'react';

export default function Page() {
  const myEmail = "youtun.freelance@gmail.com";
  const [time, setTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Live Node Clock for Karachi Aura
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDispatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(true);
    const formData = new FormData(e.currentTarget);
    const business = formData.get("business") as string;
    const vision = formData.get("vision") as string;
    
    setTimeout(() => {
      window.location.href = `mailto:${myEmail}?subject=Project_REQ: ${business}&body=Selected Service: ${selectedService}%0D%0AVision: ${vision}`;
      setIsSuccess(false);
    }, 1000);
  };

  return (
    <main className="relative min-h-screen p-6 md:p-20 max-w-[1400px] mx-auto selection:bg-accent/30">
      
      {/* HEADER: CLOCK & GMAIL PULSE */}
      <div className="flex justify-between items-center mb-24 animate-in fade-in slide-in-from-top-4 duration-1000">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">Node_Live: {time}</p>
        </div>
        <a href={`mailto:${myEmail}`} className="btn-pulse bg-accent text-slate-950 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-110 transition-transform">
          Direct_Gmail_Contact
        </a>
      </div>
      
      {/* HERO: OSCILLATING TITLE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
        <div className="lg:col-span-8">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-6">VERIFIED_PORTFOLIO // Karachi_Dev_Node</p>
          <h1 className="text-8xl md:text-[13rem] font-black leading-none tracking-tighter text-luxury animate-youtun">
            YOUTUN
          </h1>
        </div>

        {/* STATUS: HOVER-DOWN INTEREST */}
        <div className="lg:col-span-4 glass-panel p-10 hover-down cursor-pointer">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-accent">iPhone 13 Fund Status</p>
          <h2 className="text-2xl font-bold mb-6 italic text-white tracking-tighter">System Progress</h2>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-4">
            <div className="h-full w-[6.7%] bg-accent shadow-[0_0_15px_#00f2ff]"></div>
          </div>
          <p className="text-[10px] font-mono text-slate-600">PKR 75,000 // 6.7% STABLE_AND_ACTIVE</p>
        </div>
      </div>

      {/* SERVICES: DIRECTIONAL GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
        {/* SADDAR: HOVER-LEFT */}
        <div className="glass-panel p-12 hover-left border-l-4 border-accent relative overflow-hidden group">
          <h3 className="text-4xl font-black italic mb-2">SADDAR_EDGE</h3>
          <p className="text-[10px] text-accent font-mono mb-8 tracking-widest uppercase">Inventory Protocols</p>
          <p className="text-slate-400 text-sm mb-12 leading-relaxed max-w-xs">High-velocity synchronization for retail inventory management.</p>
          <button 
            onClick={() => setSelectedService("SADDAR_EDGE_INVENTORY")}
            className={`w-full py-5 border ${selectedService === "SADDAR_EDGE_INVENTORY" ? "bg-accent text-black" : "border-accent/20 text-accent"} text-[10px] font-black uppercase tracking-widest transition-all mb-8`}
          >
            {selectedService === "SADDAR_EDGE_INVENTORY" ? "PROTOCOL_SELECTED" : "INITIALIZE_SERVICE"}
          </button>
          <span className="text-2xl font-black text-white">PKR 8,000+</span>
        </div>

        {/* DHA: HOVER-RIGHT */}
        <div className="glass-panel p-12 hover-right border-r-4 border-white/5 relative group">
          <h3 className="text-4xl font-black italic mb-2">DHA_ELITE</h3>
          <p className="text-[10px] text-accent font-mono mb-8 tracking-widest uppercase">Corp Infrastructure</p>
          <p className="text-slate-400 text-sm mb-12 leading-relaxed max-w-xs">Ultra-premium identity and web infrastructure for corporate scaling.</p>
          <button 
            onClick={() => setSelectedService("DHA_ELITE_CORPORATE")}
            className={`w-full py-5 border ${selectedService === "DHA_ELITE_CORPORATE" ? "bg-white text-black" : "border-white/10 text-white"} text-[10px] font-black uppercase tracking-widest transition-all mb-8`}
          >
            {selectedService === "DHA_ELITE_CORPORATE" ? "PROTOCOL_SELECTED" : "INITIALIZE_SERVICE"}
          </button>
          <span className="text-2xl font-black text-white">PKR 15,000+</span>
        </div>
      </div>

      {/* INQUIRY PORTAL: HOVER-UP */}
      <section className="max-w-4xl mx-auto hover-up transition-all duration-1000">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-black mb-4 italic tracking-tighter text-white uppercase">Initialize</h2>
          {selectedService && <p className="text-accent text-xs font-mono uppercase tracking-[0.4em] animate-pulse">Requesting: {selectedService}</p>}
        </div>
        
        <form onSubmit={handleDispatch} className={`glass-panel p-12 md:p-20 text-left transition-all ${isSuccess ? 'scale-95 opacity-50' : ''}`}>
          <div className="grid grid-cols-1 gap-16">
            <input required name="business" placeholder="BUSINESS_NAME" className="bg-transparent border-b-2 border-white/5 py-4 text-white outline-none focus:border-accent transition-all uppercase text-sm font-bold placeholder:text-slate-800" />
            <textarea 
              required 
              name="vision" 
              placeholder="PROJECT_SCOPE" 
              className="bg-transparent border-b-2 border-white/5 py-4 text-white outline-none focus:border-accent transition-all uppercase text-sm font-bold placeholder:text-slate-800" 
              rows={1} 
              defaultValue={selectedService ? `Inquiry for ${selectedService}. Vision: ` : ""}
            />
            <button type="submit" className="btn-pulse w-full py-10 bg-accent text-slate-950 font-black uppercase tracking-[0.8em] text-xs hover:tracking-[1em] transition-all active:scale-95">
              {isSuccess ? "DISPATCHING..." : "DISPATCH_INQUIRY"}
            </button>
          </div>
        </form>
      </section>

      <footer className="mt-40 text-center pb-20 opacity-20">
        <p className="text-[9px] font-mono uppercase tracking-[1.5em]">YOUTUN_DEVELOPMENT // KARACHI // 2026</p>
      </footer>
    </main>
  );
}
