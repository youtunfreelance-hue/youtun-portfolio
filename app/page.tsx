import React from 'react';

export default function Page() {
  const myEmail = "youtun.dev@email.com"; // Replace with your actual email

  return (
    <main className="min-h-screen p-6 md:p-24 max-w-[1400px] mx-auto">
      
      {/* --- ASYMMETRICAL HERO SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-40">
        <div className="lg:col-span-8 animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-12 bg-accent/50"></span>
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-accent">KHI_NODE // VERIFIED_2026</p>
          </div>
          <h1 className="text-8xl md:text-[14rem] font-black leading-[0.85] tracking-tighter mb-10">
            YOUTUN
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-xl font-medium leading-relaxed">
            Architecting <span className="text-white">high-velocity</span> digital infrastructure and proprietary web solutions.
          </p>
        </div>

        {/* MIDDLE-RIGHT CARD: GOAL TRACKER */}
        <div className="lg:col-span-4 glass-panel p-12 hover:border-accent/40 group">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-accent/60 group-hover:text-accent">Project_Target</p>
          <h2 className="text-2xl font-bold mb-6 italic text-white">iPhone 13 Fund</h2>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-4">
            <div className="h-full w-[6.7%] bg-accent shadow-[0_0_20px_rgba(0,242,255,0.4)]"></div>
          </div>
          <div className="flex justify-between font-mono text-[10px] text-gray-600">
            <span>PKR 75,000</span>
            <span className="text-accent">6.7% READY</span>
          </div>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
        <div className="glass-panel p-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-3xl"></div>
          <h3 className="text-4xl font-black italic mb-2">SADDAR_EDGE</h3>
          <p className="text-xs text-accent font-mono mb-8 tracking-widest uppercase">Inventory Scaling Protocol</p>
          <p className="text-gray-500 mb-12 text-sm leading-relaxed max-w-xs font-medium">Bespoke catalog systems for local retail giants requiring instant synchronization.</p>
          <span className="text-2xl font-black">PKR 8,000+</span>
        </div>

        <div className="glass-panel p-16 bg-white/[0.01]">
          <h3 className="text-4xl font-black italic mb-2">DHA_ELITE</h3>
          <p className="text-xs text-accent font-mono mb-8 tracking-widest uppercase">Corporate Deployment</p>
          <p className="text-gray-500 mb-12 text-sm leading-relaxed max-w-xs font-medium">Ultra-premium corporate landing pages with high-end motion design & SEO dominance.</p>
          <span className="text-2xl font-black">PKR 15,000+</span>
        </div>
      </div>

      {/* --- CENTERED INQUIRY PORTAL --- */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="mb-24">
          <h2 className="text-7xl font-black mb-4 italic tracking-tighter">INITIALIZE</h2>
          <p className="text-[10px] font-black uppercase tracking-[0.8em] text-accent/60">Proposal Partnership Dispatch</p>
        </div>

        <form 
          className="glass-panel p-12 md:p-20 text-left relative"
          onSubmit={(e) => {
            e.preventDefault();
            const business = (e.target as any)[0].value;
            const vision = (e.target as any)[1].value;
            window.location.href = `mailto:${myEmail}?subject=Project_REQ: ${business}&body=Initialization Request:%0D%0A%0D%0A${vision}`;
          }}
        >
          <div className="grid grid-cols-1 gap-16">
            <div className="flex flex-col gap-3">
              <label className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-600">Representing Entity</label>
              <input required type="text" placeholder="BUSINESS_NAME" className="luxury-input uppercase text-sm" />
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-600">Technical Vision</label>
              <textarea required placeholder="PROJECT_SCOPE" className="luxury-input uppercase text-sm" rows={1} />
            </div>

            <button type="submit" className="w-full py-10 bg-accent text-deep font-black uppercase tracking-[0.6em] text-xs hover:tracking-[0.8em] transition-all duration-700 active:scale-95 shadow-[0_20px_40px_rgba(0,242,255,0.2)]">
              Send Proposal Inquiry
            </button>
          </div>
        </form>
      </section>

      <footer className="mt-40 text-center pb-20 opacity-30">
        <p className="text-[9px] font-mono uppercase tracking-[1em]">
          YOUTUN_DEVELOPMENT_LOG // 2026 // KHI_PAK
        </p>
      </footer>
    </main>
  );
}
