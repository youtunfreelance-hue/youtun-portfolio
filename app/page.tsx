"use client";

import React from 'react';

export default function Page() {
  const myEmail = "youtun.freelance@gmail.com"; 

  const handleDispatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const business = formData.get("business") as string;
    const vision = formData.get("vision") as string;
    
    // Using window.location.href safely inside a client component
    window.location.href = `mailto:${myEmail}?subject=Project_Inquiry: ${business}&body=Hello Youtun.Dev,%0D%0A%0D%0AI want to initialize a project for ${business}.%0D%0A%0D%0AVision Detail:%0D%0A${vision}`;
  };

  return (
    <main className="min-h-screen p-6 md:p-24 max-w-[1400px] mx-auto selection:bg-cyan-500/20 text-slate-200">
      
      {/* --- ASYMMETRICAL HERO SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-40">
        <div className="lg:col-span-8 animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-12 bg-cyan-500/50"></span>
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-cyan-400">KHI_NODE // VERIFIED_2026</p>
          </div>
          <h1 className="text-8xl md:text-[14rem] font-black leading-[0.85] tracking-tighter mb-10 text-white">
            YOUTUN
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-xl font-medium leading-relaxed">
            Architecting <span className="text-white font-bold">high-velocity</span> digital infrastructure and proprietary web solutions.
          </p>
        </div>

        {/* MIDDLE-RIGHT CARD: GOAL TRACKER */}
        <div className="lg:col-span-4 p-10 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[32px] hover:border-cyan-400/30 transition-all group">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-cyan-400/60 group-hover:text-cyan-400 transition-colors">Project_Target</p>
          <h2 className="text-2xl font-bold mb-6 italic text-white tracking-tight">iPhone 13 Fund</h2>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-4">
            <div className="h-full w-[6.7%] bg-cyan-400 shadow-[0_0_20px_rgba(0,242,255,0.4)]"></div>
          </div>
          <div className="flex justify-between font-mono text-[10px] text-slate-500">
            <span>PKR 75,000</span>
            <span className="text-cyan-400 font-bold">6.7% READY</span>
          </div>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
        <div className="p-16 bg-slate-900/30 border border-white/5 rounded-[40px] group hover:bg-slate-900/50 transition-all">
          <h3 className="text-4xl font-black italic mb-2 group-hover:text-cyan-400 transition-colors">SADDAR_EDGE</h3>
          <p className="text-[10px] text-cyan-400 font-mono mb-8 tracking-widest uppercase">Inventory Scaling Protocol</p>
          <p className="text-slate-500 mb-12 text-sm leading-relaxed max-w-xs font-medium">Bespoke catalog systems for local retail giants requiring instant synchronization.</p>
          <span className="text-2xl font-black text-white">PKR 8,000+</span>
        </div>

        <div className="p-16 bg-slate-900/30 border border-white/5 rounded-[40px] group hover:bg-slate-900/50 transition-all">
          <h3 className="text-4xl font-black italic mb-2 group-hover:text-cyan-400 transition-colors">DHA_ELITE</h3>
          <p className="text-[10px] text-cyan-400 font-mono mb-8 tracking-widest uppercase">Corporate Deployment</p>
          <p className="text-slate-500 mb-12 text-sm leading-relaxed max-w-xs font-medium">Ultra-premium corporate landing pages with high-end motion design & SEO dominance.</p>
          <span className="text-2xl font-black text-white">PKR 15,000+</span>
        </div>
      </div>

      {/* --- CENTERED INQUIRY PORTAL --- */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="mb-24">
          <h2 className="text-7xl font-black mb-4 italic tracking-tighter text-white">INITIALIZE</h2>
          <p className="text-[10px] font-black uppercase tracking-[0.8em] text-cyan-400/60">Proposal Partnership Dispatch</p>
        </div>

        <form 
          onSubmit={handleDispatch}
          className="p-12 md:p-20 bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-[48px] text-left relative overflow-hidden"
        >
          <div className="grid grid-cols-1 gap-16 relative z-10">
            <div className="flex flex-col gap-3">
              <label className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-500 ml-1">Representing Entity</label>
              <input 
                required 
                name="business"
                type="text" 
                placeholder="BUSINESS_NAME" 
                className="bg-transparent border-b-2 border-white/10 py-4 text-white outline-none focus:border-cyan-400 transition-all uppercase text-sm font-bold placeholder:text-slate-800" 
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-500 ml-1">Technical Vision</label>
              <textarea 
                required 
                name="vision"
                placeholder="PROJECT_SCOPE" 
                className="bg-transparent border-b-2 border-white/10 py-4 text-white outline-none focus:border-cyan-400 transition-all uppercase text-sm font-bold placeholder:text-slate-800" 
                rows={1} 
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-10 bg-cyan-400 text-slate-950 font-black uppercase tracking-[0.6em] text-xs hover:tracking-[0.8em] transition-all duration-700 active:scale-95 shadow-[0_20px_40px_rgba(0,242,255,0.2)] rounded-xl"
            >
              Dispatch Proposal
            </button>
          </div>
        </form>
      </section>

      <footer className="mt-40 text-center pb-20 opacity-20">
        <p className="text-[9px] font-mono uppercase tracking-[1em]">
          YOUTUN_DEVELOPMENT_LOG // 2026 // KHI_PAK
        </p>
      </footer>
    </main>
  );
}
