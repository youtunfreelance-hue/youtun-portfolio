import React from 'react';

export default function Page() {
  return (
    <main className="min-h-screen p-6 md:p-20 max-w-[1600px] mx-auto">
      
      {/* --- TOP SECTION: LEFT-HEAVY DESIGN --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_10px_#D4AF37]"></span>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gold">Karachi Verified • 2026</p>
          </div>
          <h1 className="text-8xl md:text-[14rem] font-black leading-[0.8] tracking-tighter text-luxury">
            YOUTUN
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-500 max-w-xl font-medium leading-tight">
            Developing <span className="text-white">Elite-Tier</span> digital infrastructure for the Next-Gen Pakistani economy.
          </p>
        </div>

        {/* MIDDLE/RIGHT ASYMMETRIC CARD */}
        <div className="lg:col-span-4 glass-panel p-10">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-gold">Tech Progress</p>
          <h2 className="text-2xl font-bold mb-6">iPhone 13 Fund</h2>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-4">
            <div className="h-full w-[6.7%] bg-gold shadow-[0_0_15px_#D4AF37]"></div>
          </div>
          <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Target: Rs. 75,000</p>
        </div>
      </div>

      {/* --- SERVICE GRID: MIXED ALIGNMENT --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
        <div className="glass-panel p-12 hover:border-gold/30">
          <div className="flex justify-between items-start mb-12">
            <h3 className="text-4xl font-black italic">SADDAR<br/>EDGE</h3>
            <span className="text-gold font-mono">Rs. 8k+</span>
          </div>
          <p className="text-sm text-gray-500 max-w-xs">High-speed retail catalog systems designed for local inventory scaling.</p>
        </div>

        <div className="glass-panel p-12 bg-gold/[0.03] border-gold/10">
          <div className="flex justify-between items-start mb-12">
            <h3 className="text-4xl font-black italic">DHA<br/>ELITE</h3>
            <span className="text-gold font-mono">Rs. 15k+</span>
          </div>
          <p className="text-sm text-gray-500 max-w-xs">Bespoke corporate presence with full-motion design and SEO dominance.</p>
        </div>
      </div>

      {/* --- THE INQUIRY PORTAL: CENTERED FOCUS --- */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="mb-20">
          <h2 className="text-6xl font-black text-luxury mb-4">INITIALIZE</h2>
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-gold/60">Proposal Partnership Portal</p>
        </div>

        <form className="glass-panel p-12 md:p-20 text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
          
          <div className="grid grid-cols-1 gap-16">
            <div className="flex flex-col gap-2">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600">Business Entity Name</label>
              <input type="text" placeholder="WHO ARE YOU REPRESENTING?" className="luxury-input text-white w-full" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600">The Digital Vision</label>
              <textarea placeholder="WHAT ARE WE BUILDING?" className="luxury-input text-white w-full" rows={1} />
            </div>

            <button className="group relative py-10 overflow-hidden bg-gold text-black font-black uppercase tracking-[0.6em] text-xs transition-all duration-700 hover:tracking-[0.8em]">
              <span className="relative z-10">Submit Inquiry</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
          </div>
        </form>
      </section>

      <footer className="mt-40 text-center pb-20">
        <p className="text-[9px] font-black uppercase tracking-[0.8em] text-gray-800">
          © 2026 Youtun.Dev • Built in Karachi
        </p>
      </footer>
    </main>
  );
}
