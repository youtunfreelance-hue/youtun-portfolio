export default function Home() {
  return (
    <main className="min-h-screen p-8 lg:p-24 max-w-7xl mx-auto relative">
      <div className="scanline"></div>

      {/* Top Identity Tag */}
      <div className="flex items-center gap-4 opacity-40 text-[10px] tracking-[0.6em] font-bold mb-16">
        <div className="w-12 h-[1px] bg-cyan-400"></div>
        KHI_NODE // VERIFIED_PORTFOLIO
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        {/* Left Side: Brand & Inquiry Form */}
        <div className="lg:col-span-2 space-y-16">
          <h1 className="text-9xl lg:text-[13rem] font-black tracking-tighter leading-[0.8] text-white italic">
            YOUTUN
          </h1>
          
          <div className="space-y-8 max-w-xl">
            <div className="grid grid-cols-1 gap-4">
              <input placeholder="BUSINESS_NAME" className="input-field p-5 text-xs font-mono" />
              <textarea placeholder="PROJECT_VISION" rows={4} className="input-field p-5 text-xs font-mono" />
            </div>
            
            <div className="flex flex-col gap-4">
              <button className="youtun-btn py-5 font-bold italic text-lg">INITIALIZE_SADDAR_EDGE</button>
              <div className="grid grid-cols-2 gap-4">
                <button className="youtun-btn py-4 text-[10px]">Select Services</button>
                <button className="youtun-btn py-4 text-[10px]">Send Inquiry</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: iPhone Fund Round Box */}
        <div className="round-box space-y-8 lg:mt-32">
          <div className="space-y-2">
            <p className="text-[10px] tracking-[0.4em] text-cyan-400 font-bold uppercase">System_Status</p>
            <h2 className="text-3xl font-bold text-white">iPhone 13 Fund</h2>
          </div>
          
          <div className="space-y-6">
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 w-[6.7%] shadow-[0_0_15px_#00f3ff]"></div>
            </div>
            <div className="flex justify-between text-[11px] font-mono opacity-60">
              <span>PKR 75,000</span>
              <span className="text-cyan-400">6.7% ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="mt-32 pt-12 border-t border-white/5 flex flex-col items-center gap-6 text-center">
        <p className="text-[10px] tracking-[0.3em] opacity-40 uppercase">Full Stack AI Developer • Karachi Based</p>
        <a href="mailto:youtun.freelance@gmail.com" className="text-cyan-400 hover:text-white transition-all text-sm underline underline-offset-[12px]">
          youtun.freelance@gmail.com
        </a>
      </div>
    </main>
  );
}
