export default function Home() {
  return (
    <main className="min-h-screen p-8 lg:p-24 max-w-7xl mx-auto relative">
      <div className="scanline"></div>
      
      <div className="flex items-center gap-4 opacity-40 text-[10px] tracking-[0.6em] font-bold mb-16 uppercase">
        <div className="w-12 h-[1px] bg-cyan-400"></div>
        KHI_NODE // VERIFIED_PORTFOLIO
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        <div className="lg:col-span-2 space-y-16">
          <h1 className="text-[10rem] lg:text-[15rem] font-black tracking-tighter leading-[0.75] text-white italic">
            YOUTUN
          </h1>
          
          <div className="space-y-8 max-w-xl">
            <div className="grid grid-cols-1 gap-4">
              <input placeholder="BUSINESS_NAME" className="bg-white/5 border border-white/10 p-5 rounded-xl text-xs" />
              <textarea placeholder="PROJECT_VISION" rows={3} className="bg-white/5 border border-white/10 p-5 rounded-xl text-xs" />
            </div>
            <button className="youtun-btn w-full py-5 font-bold italic text-xl">INITIALIZE_SADDAR_EDGE</button>
            <div className="grid grid-cols-2 gap-4">
              <button className="youtun-btn py-4 text-[10px]">Select Services</button>
              <button className="youtun-btn py-4 text-[10px]">Send Inquiry</button>
            </div>
          </div>
        </div>

        {/* The Round Box */}
        <div className="round-box space-y-8 lg:mt-40">
          <div className="space-y-2">
            <p className="text-[10px] tracking-[0.4em] text-cyan-400 font-bold uppercase">System_Status</p>
            <h2 className="text-4xl font-bold">iPhone 13 Fund</h2>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-400 w-[6.7%] shadow-[0_0_20px_#00f3ff]"></div>
          </div>
          <div className="flex justify-between text-xs font-mono opacity-60">
            <span>PKR 75,000</span>
            <span className="text-cyan-400">6.7% ACTIVE</span>
          </div>
        </div>
      </div>
    </main>
  );
}
