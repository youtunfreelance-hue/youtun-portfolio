export default function Home() {
  return (
    <main className="min-h-screen p-8 lg:p-24 max-w-7xl mx-auto relative">
      <div className="scanline"></div>

      {/* Header Info */}
      <div className="flex items-center gap-4 opacity-50 text-[10px] tracking-[0.4em] font-bold mb-20">
        <div className="w-8 h-[1px] bg-cyan-400"></div>
        KHI_NODE // VERIFIED_PORTFOLIO
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        {/* Main Brand Section */}
        <div className="lg:col-span-2 space-y-12">
          <h1 className="text-[10rem] lg:text-[14rem] font-black leading-none tracking-tighter text-white">
            YOUTUN
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 max-w-xl leading-relaxed">
            Architecting <span className="text-white font-semibold">high-velocity</span> digital infrastructure and proprietary web solutions.
          </p>
        </div>

        {/* System Status Card */}
        <div className="status-card p-10 space-y-8 mt-12 lg:mt-0">
          <div className="space-y-2">
            <p className="text-[10px] tracking-[0.3em] text-cyan-400 font-bold uppercase">System_Status</p>
            <h2 className="text-3xl font-bold text-white">iPhone 13 Fund</h2>
          </div>
          
          <div className="space-y-5">
            <div className="progress-bar">
              <div className="progress-fill w-[6.7%]"></div>
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono opacity-60">
              <span>PKR 75,000</span>
              <span className="text-cyan-400">6.7% ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[150px] rounded-full"></div>
      </div>
    </main>
  );
}
