export default function Home() {
  const goal = 75000;
  const saved = 0; 
  const progress = (saved / goal) * 100;
  const remaining = goal - saved;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8 font-sans selection:bg-blue-500/30">
      
      {/* BACKGROUND DECORATION */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </div>

      <main className="max-w-5xl mx-auto space-y-24 pb-32">
        
        {/* HERO & TRACKER SECTION */}
        <section className="flex flex-col items-center pt-12 md:pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Verified Developer • Karachi
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white text-center tracking-tight mb-4">
            YOUTUN<span className="text-blue-500">.</span>DEV
          </h1>
          <p className="text-slate-400 text-center max-w-2xl mb-12 text-sm md:text-base leading-relaxed">
            15-year-old Full Stack Developer building high-performance digital solutions for the local market.
          </p>

          {/* IPHONE FUND CARD */}
          <div className="w-full max-w-md bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group transition-all hover:border-blue-500/30">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">📱</div>
            <h2 className="text-xl font-bold text-white mb-6">iPhone 13 Fund</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs mb-3 font-bold uppercase tracking-wider text-slate-500">
                  <span>Goal Progress</span>
                  <span className="text-blue-400 font-black">{progress.toFixed(0)}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden p-[2px]">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(37,99,235,0.5)]" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center py-4 border-t border-slate-800/50">
                <span className="text-xs font-bold text-slate-500 uppercase">Target Remaining</span>
                <span className="text-2xl font-black text-white">Rs. {remaining.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section className="space-y-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-white tracking-tight">Portfolio Projects</h2>
            <div className="h-1 w-12 bg-blue-600 rounded-full mt-2 mx-auto md:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-slate-900/40 border border-slate-800 p-8 rounded-[2rem] hover:border-blue-500/50 transition-all hover:translate-y-[-5px]">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-indigo-900 rounded-2xl mb-6 flex items-center justify-center text-5xl shadow-inner group-hover:scale-[1.02] transition-transform">🛍️</div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400">Saddar Mobile Catalog</h3>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">Inventory management and price-tracking dashboard for Karachi vendors.</p>
            </div>
            <div className="group bg-slate-900/40 border border-slate-800 p-8 rounded-[2rem] hover:border-emerald-500/50 transition-all hover:translate-y-[-5px]">
              <div className="aspect-video bg-gradient-to-br from-emerald-600 to-teal-900 rounded-2xl mb-6 flex items-center justify-center text-5xl shadow-inner group-hover:scale-[1.02] transition-transform">🏋️</div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400">DHA Fitness Portal</h3>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">High-performance landing pages for premium gym membership services.</p>
            </div>
          </div>
        </section>

        {/* PRICING & INQUIRY SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight text-center md:text-left">Services</h2>
              <div className="h-1 w-12 bg-blue-600 rounded-full mt-2 mx-auto md:mx-0"></div>
            </div>
            <div className="bg-slate-900/40 border border-slate-800 rounded-[2rem] overflow-hidden">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-800/50">
                  <tr className="hover:bg-blue-500/5 transition-colors">
                    <td className="px-6 py-5 font-bold text-white">The "Saddar Special"<br/><span className="text-[10px] text-slate-500 font-normal">Single-page live price list</span></td>
                    <td className="px-6 py-5 text-emerald-400 font-black text-right">Rs. 8,000</td>
                  </tr>
                  <tr className="hover:bg-blue-500/5 transition-colors">
                    <td className="px-6 py-5 font-bold text-white">Business Landing Page<br/><span className="text-[10px] text-slate-500 font-normal">Sites for Gyms/Cafes</span></td>
                    <td className="px-6 py-5 text-emerald-400 font-black text-right">Rs. 15,000</td>
                  </tr>
                  <tr className="hover:bg-blue-500/5 transition-colors">
                    <td className="px-6 py-5 font-bold text-white">Premium Portfolio<br/><span className="text-[10px] text-slate-500 font-normal">Custom Multi-page Design</span></td>
                    <td className="px-6 py-5 text-emerald-400 font-black text-right">Rs. 25,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Next.js', 'React 19', 'Tailwind', 'TS', 'Node'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-tighter rounded-md border border-slate-700/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* INQUIRY FORM - LINKED TO mqedonpa */}
          <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700 p-8 rounded-[2.5rem] shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-2">Request a Quote</h3>
            <p className="text-slate-500 text-xs mb-8">Direct inquiry to youtun.freelance@gmail.com</p>
            
            <form action="https://formspree.io/f/mqedonpa" method="POST" className="space-y-4">
              <input 
                type="text" 
                name="business_name"
                placeholder="Business/Store Name" 
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                required 
              />
              <input 
                type="email" 
                name="client_email"
                placeholder="Your Email Address" 
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                required 
              />
              <textarea 
                name="message"
                placeholder="What project can I build for you?"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all h-24 resize-none"
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 uppercase tracking-widest text-xs"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 flex flex-col items-center border-t border-slate-900">
           <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.4em] mb-4 text-center">
             Professional Full Stack Developer • Karachi Based
           </p>
           <a href="mailto:youtun.freelance@gmail.com" className="text-blue-500 font-bold hover:text-blue-400 transition-colors text-sm">
             youtun.freelance@gmail.com
           </a>
           <p className="mt-8 text-slate-800 text-[10px] font-bold">
             © 2026 Youtun.Dev Portfolio
           </p>
        </footer>

      </main>
    </div>
  );
}