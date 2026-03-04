"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [projectType, setProjectType] = useState("SADDAR_EDGE");

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
    <main className="min-h-screen p-6 lg:p-20 max-w-7xl mx-auto relative bg-[#050505]">
      <div className="scanline"></div>

      {/* Node Info */}
      <div className="flex justify-between items-center opacity-30 text-[9px] tracking-[0.7em] font-bold mb-16 uppercase">
        <div className="flex items-center gap-6">
          <div className="w-16 h-[1px] bg-cyan-400"></div>
          KHI_SYSTEM // VERIFIED_PORTFOLIO
        </div>
        <div>BUILD_STABLE_V2.0</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        <div className="lg:col-span-2 space-y-24">
          <h1 className="text-[9rem] lg:text-[14rem] font-black tracking-tighter leading-none text-white italic oscillate">
            YOUTUN
          </h1>
          
          {/* Inquiry Form */}
          <div className="space-y-8 max-w-2xl bg-white/5 p-10 rounded-[40px] border border-white/10">
            <div className="space-y-4">
              <input placeholder="BUSINESS_NAME" className="w-full bg-black/40 border border-white/10 p-6 rounded-2xl text-xs focus:border-cyan-400 transition-all outline-none" />
              <textarea 
                value={`Type: ${projectType}\nVision: `} 
                onChange={() => {}} 
                rows={4} 
                className="w-full bg-black/40 border border-white/10 p-6 rounded-2xl text-xs focus:border-cyan-400 transition-all outline-none" 
              />
            </div>
            
            <div className="flex flex-col gap-4">
              <button className="bg-cyan-400 text-black py-6 font-bold italic text-2xl uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] transition-transform pulse-cyan">
                Initialize Dispatch
              </button>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setProjectType("SADDAR_EDGE")} className="service-card py-4 text-[10px] uppercase font-bold">Saddar Edge</button>
                <button onClick={() => setProjectType("DHA_ELITE")} className="service-card py-4 text-[10px] uppercase font-bold">DHA Elite</button>
              </div>
            </div>
          </div>
        </div>

        {/* Status Card */}
        <div className="service-card p-12 space-y-10 lg:mt-56">
          <div className="space-y-3">
            <p className="text-[10px] tracking-[0.5em] text-cyan-400 font-bold uppercase">Hardware_Fund</p>
            <h2 className="text-4xl font-bold">iPhone 13</h2>
          </div>
          <div className="space-y-6">
            <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 p-1">
              <div className="h-full bg-cyan-400 w-[6.7%] rounded-full shadow-[0_0_20px_#00f3ff]"></div>
            </div>
            <div className="flex justify-between text-sm font-mono">
              <span className="opacity-40">PKR 75,000</span>
              <span className="text-cyan-400 font-bold">6.7%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-40 pt-16 border-t border-white/5 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[10px] tracking-[0.4em] opacity-30 uppercase">Backend & Full-Stack AI Developer</p>
          <a href="mailto:youtun.freelance@gmail.com" className="text-cyan-400 hover:text-white transition-all text-sm font-mono underline underline-offset-8">
            youtun.freelance@gmail.com
          </a>
        </div>
        <div className="text-4xl font-mono text-white/90 tracking-[0.2em]">
          KHI_TIME // {time}
        </div>
      </footer>
    </main>
  );
}
