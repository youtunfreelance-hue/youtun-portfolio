import React from 'react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] font-sans p-6 md:p-12 lg:p-24">
      
      {/* --- HERO SECTION --- */}
      <header className="max-w-5xl mx-auto mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-[#D4AF37]"></span>
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Verified Developer • Karachi</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-[#444] bg-clip-text text-transparent">
          YOUTUN.DEV
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed">
          16-year-old Full Stack Developer crafting high-performance, 
          <span className="text-white font-medium"> luxury digital solutions </span> 
          for the elite local market.
        </p>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* --- IPHONE 13 FUND (LUXURY CARD) --- */}
        <section className="group p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#D4AF37]/50 transition-all duration-500">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-2xl font-bold tracking-tight">📱 iPhone 13 Fund</h2>
            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">Active Goal</span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-gray-500 uppercase tracking-widest text-[10px]">Target</span>
              <span>Rs. 75,000</span>
            </div>
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div className="h-full w-[6.7%] bg-gradient-to-r from-[#996515] to-[#D4AF37] rounded-full"></div>
            </div>
            <p className="text-[#D4AF37] font-black text-xs uppercase tracking-widest">6.7% Completed</p>
          </div>
        </section>

        {/* --- EXPERT SERVICES --- */}
        <section className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#D4AF37]/50 transition-all duration-500">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Expert Services</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <div>
                <h3 className="font-bold text-white">Saddar Special</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Live Price Lists & Catalogs</p>
              </div>
              <span className="font-mono text-[#D4AF37]">Rs. 8,000+</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-white">DHA Business Pack</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Premium Landing Pages</p>
              </div>
              <span className="font-mono text-[#D4AF37]">Rs. 15,000+</span>
            </div>
          </div>
        </section>

        {/* --- GOATED CONTACT SECTION (REPLACING THE TRASH ONE) --- */}
        <section className="md:col-span-2 p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-3xl">
          <h2 className="text-3xl font-black mb-10 tracking-tight">Initialize Inquiry</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Business Name</label>
              <input 
                type="text" 
                placeholder="e.g. Prestige Apparel Karachi"
                className="w-full bg-white/[0.05] border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-[#D4AF37] focus:bg-white/[0.08] transition-all placeholder:text-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Project Vision</label>
              <textarea 
                placeholder="What high-end solution can I build for you?"
                rows={1}
                className="w-full bg-white/[0.05] border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-[#D4AF37] focus:bg-white/[0.08] transition-all placeholder:text-gray-700"
              />
            </div>
            <button className="md:col-span-2 w-full py-6 rounded-2xl bg-[#D4AF37] text-black font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] active:scale-95 transition-all duration-300">
              Send Proposal Inquiry
            </button>
          </form>
        </section>

      </div>

      <footer className="max-w-5xl mx-auto mt-20 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-600 font-bold">
          © 2026 Youtun.Dev Portfolio • Karachi, Pakistan
        </p>
      </footer>
    </main>
  );
}
