export default function Home() {
  return (
    <main className="min-h-screen p-6 lg:p-20 max-w-7xl mx-auto relative">
      <div className="scanline"></div>

      {/* Node Identity */}
      <div className="flex items-center gap-4 opacity-40 text-[10px] tracking-[0.5em] font-bold mb-12">
        <div className="w-10 h-[1px] bg-cyan-400"></div>
        KHI_NODE // VERIFIED_PORTFOLIO
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: Brand & Inquiry */}
        <div className="lg:col-span-2 space-y-12">
          <h1 className="text-8xl lg:text-[12rem] font-black tracking-tighter italic leading-none">
            YOUTUN
          </h1>
          
          <div className="space-y-6 max-w-xl">
            <div className="grid grid-cols-1 gap-4">
              <input placeholder="BUSINESS_NAME" className="input-field p-4 text-[10px] font-mono" />
              <textarea placeholder="PROJECT_VISION" rows={3} className="input-field p-4 text-[10px] font-mono" />
            </div>
            
            <div className="flex flex-col gap-3">
              <button className="youtun-btn py-4 font-bold italic text-sm">INITIALIZE_SADDAR_EDGE</button>
              <div className="grid grid-cols-2 gap-3">
                <button className="youtun-btn py-3 text-[9px]">Select Services</button>
                <button className="youtun-btn py-3 text-[9px]">Send Inquiry</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: System Status Card */}
        <div className="status-card p-8 space-y-6 h-fit lg:mt-32">
          <div className="space-y-1">
            <p className="text-[10px] tracking-[0.3em] text-cyan-400 font-bold uppercase">System_Status</p>
            <h2 className="text-2xl font-bold">iPhone 13 Fund</h2>
          </div>
          <div className="space-y-4">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 w-[6.7%] shadow-[0_0_10px_#00f3ff]"></div>
            </div>
            <div className="flex justify-between text-[10px] font-mono opacity-50">
              <span>PKR 75,000</span>
              <span className="text-cyan-400">6.7% ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="mt-24 pt-10 border-t border-white/5 flex flex-col items-center gap-4 text-center">
        <p className="text-[10px] tracking-widest opacity-40 uppercase">Full Stack AI Developer • Karachi Based</p>
        <a href="mailto:youtun.freelance@gmail.com" className="text-cyan-400 hover:text-white transition-colors text-xs underline underline-offset-8">
          youtun.freelance@gmail.com
        </a>
      </div>
    </main>
  );
}
