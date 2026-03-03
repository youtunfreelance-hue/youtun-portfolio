import React from 'react';

export default function Page() {
  return (
    <main className="min-h-screen p-6 md:p-24 selection:bg-gold/30 selection:text-gold">
      
      {/* --- HERO SECTION: CENTERED --- */}
      <header className="max-w-4xl mx-auto text-center mb-32">
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="h-[1px] w-12 bg-gold/50"></span>
          <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em]">Karachi • Verified Developer</span>
          <span className="h-[1px] w-12 bg-gold/50"></span>
        </div>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 gold-text-gradient">
          YOUTUN.DEV
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
          16-year-old Full Stack Architect. Turning basic ideas into 
          <span className="text-white"> elite-tier digital real estate</span>.
        </p>
      </header>

      {/* --- THE 3-COLUMN GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        
        {/* LEFT: IPHONE FUND */}
        <section className="glass-card p-10">
          <h2 className="text-xl font-bold mb-6">📱 Tech Goal</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
              <span>iPhone 13 Fund</span>
              <span className="text-gold">6.7%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[6.7%] bg-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]"></div>
            </div>
            <p className="text-[10px] text-gray-600 font-bold leading-tight">Every project fuels the research lab.</p>
          </div>
        </section>

        {/* MIDDLE: SADDAR SPECIAL */}
        <section className="glass-card p-10">
          <div className="mb-6 px-3 py-1 rounded-full bg-gold/10 text-gold text-[9px] font-black uppercase tracking-widest w-fit">Fastest Delivery</div>
          <h2 className="text-xl font-bold mb-3">Saddar Special</h2>
          <p className="text-sm text-gray-500 mb-8">Live price catalogs for local retailers. Instant updates.</p>
          <div className="text-2xl font-black text-white">Rs. 8,000<span className="text-gold">+</span></div>
        </section>

        {/* RIGHT: DHA ELITE */}
        <section className="glass-card p-10">
          <div className="mb-6 px-3 py-1 rounded-full bg-white/5 text-gray-400 text-[9px] font-black uppercase tracking-widest w-fit">Premium Only</div>
          <h2 className="text-xl font-bold mb-3">DHA Elite Pack</h2>
          <p className="text-sm text-gray-500 mb-8">Full SEO-optimized corporate landings with high-end motion.</p>
          <div className="text-2xl font-black text-white">Rs. 15,000<span className="text-gold">+</span></div>
        </section>
      </div>

      {/* --- INQUIRY PORTAL: CENTERED --- */}
      <section className="max-w-4xl mx-auto glass-card p-12 md:p-16 border-white/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[100px]"></div>
        <h2 className="text-4xl font-black mb-12 text-center tracking-tight">Initialize Project</h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gold/60 ml-1">Entity Name</label>
            <input type="text" placeholder="e.g. Prestige Wear Karachi" className="p-6 rounded-2xl text-white w-full" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gold/60 ml-1">The Vision</label>
            <textarea placeholder="Describe your digital goals..." className="p-6 rounded-2xl text-white w-full" rows={1} />
          </div>
          <button className="md:col-span-2 py-8 rounded-3xl bg-gradient-to-r from-gold-muted via-gold to-gold-muted text-black font-black uppercase tracking-[0.5em] text-xs hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] active:scale-95">
            Submit Proposal Inquiry
          </button>
        </form>
      </section>

    </main>
  );
}
