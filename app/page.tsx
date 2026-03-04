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
    <main className="min-h-screen p-8 lg:p-24 max-w-7xl mx-auto relative">
      <div className="scanline"></div>

      <div className="flex justify-between items-center opacity-40 text-[10px] tracking-[0.6em] font-bold mb-24 uppercase">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-cyan-400"></div>
          KHI_NODE // VERIFIED
        </div>
        <div>STABLE_BUILD_04MAR26</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        <div className="lg:col-span-2 space-y-20">
          <h1 className="text-[10rem] lg:text-[16rem] font-black tracking-tighter leading-[0.75] text-white italic oscillate">
            YOUTUN
          </h1>
          
          <div className="space-y-10 max-w-xl">
            <div className="grid grid-cols-1 gap-4">
              <input placeholder="BUSINESS_NAME" className="bg-white/5 border border-white/10 p-6 rounded-2xl text-xs focus:border-cyan-400 outline-none transition-all" />
              <textarea placeholder="PROJECT_VISION" rows={4} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-xs focus:border-cyan-400 outline-none transition-all" />
            </div>
            
            <div className="flex flex-col gap-4">
              <button className="youtun-btn py-6 font-bold italic text-2xl uppercase tracking-widest">
                Initialize Inquiry
              </button>
              <div className="grid grid-cols-2 gap-4">
                <button className="youtun-btn py-4 text-[10px] uppercase">Select Services</button>
                <button className="youtun-btn py-4 text-[10px] uppercase">Send Message</button>
              </div>
            </div>
          </div>
        </div>

        <div className="round-box p-10 space-y-10 lg:mt-48">
          <div className="space-y-3">
            <p className="text-[10px] tracking-[0.5em] text-cyan-400 font-bold uppercase">Target_Goal</p>
            <h2 className="text-4xl font-bold">iPhone 13 Fund</h2>
          </div>
          <div className="space-y-6">
            <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[2px]">
              <div className="h-full bg-cyan-400 w-[6.7%] rounded-full shadow-[0_0_20px_#00f3ff]"></div>
            </div>
            <div className="flex justify-between text-sm font-mono opacity-60">
              <span>PKR 75,000</span>
              <span className="text-cyan-400 font-bold">6.7%</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-40 pt-16 border-t border-white/5 flex flex-col items-center gap-8 text-center">
        <div className="space-y-2">
          <p className="text-[10px] tracking-[0.4em] opacity-40 uppercase">Full Stack AI Developer // Karachi, Pakistan</p>
          <a href="mailto:youtun.freelance@gmail.com" className="text-cyan-400 hover:text-white transition-all text-sm font-mono">
            youtun.freelance@gmail.com
          </a>
        </div>
        <div className="text-3xl font-mono text-white/80 tracking-widest">
          KHI_TIME // {time}
        </div>
      </footer>
    </main>
  );
}
