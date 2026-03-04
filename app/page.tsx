"use client";
import React, { useState, useEffect } from 'react';

export default function YoutunPortfolio() {
  const [time, setTime] = useState("");
  const [selectedService, setSelectedService] = useState("SADDAR_EDGE");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Karachi', 
        hour12: false 
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen p-6 md:p-16 max-w-[1400px] mx-auto youtun-bg">
      <div className="scan-line"></div>
      
      {/* HEADER SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-24">
        <div className="lg:col-span-8">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-2">
            KHI_NODE // VERIFIED_PORTFOLIO
          </p>
          <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter text-white hover:italic transition-all cursor-default">
            YOUTUN
          </h1>
        </div>

        {/* IPHONE 13 FUND TRACKER */}
        <div className="lg:col-span-4 glass-card p-8">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-4 text-cyan-400">FUND_STATUS</p>
          <h2 className="text-xl font-bold mb-4 text-white">iPhone 13 Fund</h2>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-3">
            <div className="h-full w-[6.7%] bg-cyan-400 shadow-[0_0_10px_#00f3ff]"></div>
          </div>
          <p className="text-[10px] font-mono text-slate-500 tracking-widest">PKR 75,000 // 6.7% ACTIVE</p>
        </div>
      </div>

      {/* SERVICE SELECTOR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        <div 
          onClick={() => setSelectedService("SADDAR_EDGE")}
          className={`glass-card p-10 cursor-pointer group ${selectedService === "SADDAR_EDGE" ? 'border-cyan-400' : ''}`}
        >
          <h3 className="text-2xl font-black mb-2 group-hover:text-cyan-400 transition-colors">SADDAR_EDGE</h3>
          <p className="text-slate-500 text-sm">High-velocity retail infrastructure for local commerce.</p>
        </div>
        <div 
          onClick={() => setSelectedService("DHA_ELITE")}
          className={`glass-card p-10 cursor-pointer group ${selectedService === "DHA_ELITE" ? 'border-cyan-400' : ''}`}
        >
          <h3 className="text-2xl font-black mb-2 group-hover:text-cyan-400 transition-colors">DHA_ELITE</h3>
          <p className="text-slate-500 text-sm">Premium aesthetic digital experiences for luxury brands.</p>
        </div>
      </div>

      {/* INQUIRY FORM */}
      <section className="max-w-2xl mx-auto glass-card p-12 mb-24">
        <h2 className="text-4xl font-black mb-8 text-center italic">INITIALIZE_{selectedService}</h2>
        <form className="space-y-6">
          <input type="text" placeholder="BUSINESS_NAME" className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm focus:border-cyan-400 outline-none" />
          <textarea placeholder="PROJECT_VISION" rows={4} className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm focus:border-cyan-400 outline-none"></textarea>
          <button className="w-full bg-cyan-500 text-black font-black p-5 hover:bg-white transition-all uppercase tracking-widest">
            Send Inquiry
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 border-t border-white/5 flex flex-col items-center">
        <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest mb-2">
          Full Stack AI Developer • Karachi Based
        </p>
        <a href="mailto:youtun.freelance@gmail.com" className="text-cyan-400 text-sm font-mono hover:underline">
          youtun.freelance@gmail.com
        </a>
        <p className="mt-8 text-slate-800 text-[10px] font-bold">
          © 2026 Youtun.Dev Portfolio
        </p>
      </footer>

      {/* FLOATING KARACHI CLOCK */}
      <div className="fixed bottom-6 right-6 font-mono text-[10px] tracking-[0.3em] text-slate-500 vertical-text">
        KHI_TIME // {time}
      </div>
    </main>
  );
}
