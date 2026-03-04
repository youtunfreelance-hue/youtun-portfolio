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
    <main className="min-h-screen p-6 lg:p-24 relative bg-[#050505] flex flex-col items-center">
      <div className="scanline"></div>

      {/* Top Node Info */}
      <div className="w-full max-w-7xl flex justify-between items-center opacity-30 text-[9px] tracking-[0.7em] font-bold mb-24 uppercase">
        <div className="flex items-center gap-6">
          <div className="w-16 h-[1px] bg-cyan-400"></div>
          KHI_SYSTEM // VERIFIED
        </div>
        <div>BUILD_STABLE_V2.0</div>
      </div>

      <div className="centered-container w-full max-w-4xl space-y-24">
        {/* Massive Centered Title */}
        <h1 className="text-[10rem] lg:text-[16rem] font-black tracking-tighter leading-none text-white italic oscillate">
          YOUTUN
        </h1>
        
        {/* Inquiry Section */}
        <div className="glass-card space-y-8">
          <div className="space-y-4">
            <input placeholder="BUSINESS_NAME" className="w-full bg-black/40 border border-white/10 p-6 rounded-2xl text-xs focus:border-cyan-400 transition-all outline-none" />
            <textarea 
              value={`Type: ${projectType}\nVision: `} 
              readOnly
              rows={4} 
              className="w-full bg-black/40 border border-white/10 p-6 rounded-2xl text-xs focus:border-cyan-400 transition-all outline-none" 
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <button className="bg-cyan-400 text-black py-6 font-bold italic text-2xl uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] transition-transform">
              Initialize Dispatch
            </button>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => setProjectType("SADDAR_EDGE")} className="youtun-btn py-4 text-[10px] font-bold">Saddar
