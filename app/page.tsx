"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Intl.DateTimeFormat('en-GB', {
        timeStyle: 'medium',
        timeZone: 'Asia/Karachi'
      }).format(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="master-vibe-center space-y-32 bg-[#050505]">
      {/* Brand Identity */}
      <div className="animate-brand space-y-4">
        <p className="text-[10px] tracking-[1.2em] text-cyan-400 font-bold uppercase opacity-40">System_Node // KHI</p>
        <h1 className="text-[11rem] lg:text-[18rem] font-black italic tracking-tighter leading-none text-white">
          YOUTUN
        </h1>
      </div>

      {/* Centered Inquiry Form */}
      <section className="glass-panel space-y-12">
        <div className="space-y-4">
          <input placeholder="BUSINESS_NAME" className="w-full bg-white/5 border border-white/10 p-7 rounded-3xl text-xs text-center outline-none focus:border-cyan-400 transition-all" />
          <textarea placeholder="PROJECT_VISION" rows={3} className="w-full bg-white/5 border border-white/10 p-7 rounded-3xl text-xs text-center outline-none focus:border-cyan-400 transition-all" />
        </div>
        <button className="w-full bg-cyan-400 text-black py-7 rounded-3xl font-black italic text-2xl uppercase tracking-[0.4em] hover:brightness-110 transition-all shadow-[0_0_40px_rgba(0,243,255,0.4)]">
          Launch Project
        </button>
      </section>

      {/* iPhone 13 Tracker */}
      <div className="glass-panel space-y-10">
        <div className="flex justify-between items-end">
          <h2 className="text-4xl font-bold italic">iPhone 13 Fund</h2>
          <span className="font-mono text-xs opacity-30">PKR 75,000</span>
        </div>
        <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 p-1">
          <div className="h-full bg-cyan-400 w-[6.7%] rounded-full shadow-[0_0_25px_#00f3ff]"></div>
        </div>
        <p className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 text-center">6.7% ACHIEVED // STATUS_STABLE</p>
      </div>

      {/* Live Karachi Time Footer */}
      <footer className="pt-20 flex flex-col items-center gap-10 opacity-70">
        <div className="text-center space-y-2">
          <p className="text-[9px] tracking-[0.6em] uppercase">Full Stack AI Developer</p>
          <a href="mailto:youtun.freelance@gmail.com" className="text-cyan-400 text-sm font-mono underline underline-offset-8">
            youtun.freelance@gmail.com
          </a>
        </div>
        <div className="text-7xl lg:text-9xl font-mono tracking-tighter italic text-white/90">
          {time}
        </div>
      </footer>
    </main>
  );
}