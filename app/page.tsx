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
    <main className="vibe-container space-y-24">
      {/* 1. The Brand Core */}
      <div className="space-y-4 animate-vibe">
        <p className="text-[10px] tracking-[1em] text-cyan-400 font-bold uppercase opacity-50">Karachi // Node_01</p>
        <h1 className="text-[12rem] lg:text-[18rem] font-black italic tracking-tighter leading-none">
          YOUTUN
        </h1>
      </div>

      {/* 2. The Functional Inquiry Card */}
      <section className="glass-card space-y-10">
        <h3 className="text-xl font-bold tracking-widest uppercase italic">Project Inquiry</h3>
        <div className="space-y-4">
          <input placeholder="BUSINESS_NAME" className="w-full bg-black/40 border border-white/10 p-6 rounded-2xl text-xs text-center outline-none focus:border-cyan-400 transition-all" />
          <textarea placeholder="VISION_STATEMENT" rows={3} className="w-full bg-black/40 border border-white/10 p-6 rounded-2xl text-xs text-center outline-none focus:border-cyan-400 transition-all" />
        </div>
        <button className="w-full bg-cyan-400 text-black py-6 rounded-2xl font-black italic text-2xl uppercase tracking-[0.3em] hover:scale-[1.03] transition-transform">
          Start Build
        </button>
      </section>

      {/* 3. The Financial Growth (iPhone Fund) */}
      <div className="glass-card space-y-8">
        <div className="flex justify-between items-end">
          <div className="text-left">
            <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Growth_Target</p>
            <h2 className="text-4xl font-bold">iPhone 13 Fund</h2>
          </div>
          <span className="font-mono text-xs opacity-40">PKR 75,000</span>
        </div>
        <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[2px]">
          <div className="h-full bg-cyan-400 w-[6.7%] rounded-full shadow-[0_0_20px_#00f3ff]"></div>
        </div>
        <div className="flex justify-between text-[10px] font-mono opacity-60 tracking-tighter">
          <span>PROGRESS_STABLE</span>
          <span>6.7% ACTIVE</span>
        </div>
      </div>

      {/* 4. The Live Identity Footer */}
      <footer className="pt-20 flex flex-col items-center gap-8 opacity-80">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-2">Full Stack AI Developer</p>
          <a href="mailto:youtun.freelance@gmail.com" className="text-cyan-400 text-sm font-mono hover:text-white transition-all underline underline-offset-8">
            youtun.freelance@gmail.com
          </a>
        </div>
        <div className="text-6xl font-mono tracking-tighter italic">
          KHI // {time}
        </div>
      </footer>
    </main>
  );
}