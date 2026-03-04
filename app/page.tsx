export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-4">
      {/* The Scanning Animation */}
      <div className="scanline"></div>

      <div className="z-10 text-center space-y-8">
        <h1 className="text-6xl font-bold tracking-tighter text-cyan-400 animate-pulse">
          YOUTUN
        </h1>
        
        <p className="text-sm opacity-70 tracking-widest">
          KHI_NODE // VERIFIED_PORTFOLIO
        </p>

        <div className="flex gap-4 justify-center">
          <button className="modern-button px-8 py-2 uppercase text-xs tracking-widest">
            Initialize
          </button>
          <button className="modern-button px-8 py-2 uppercase text-xs tracking-widest">
            Network
          </button>
        </div>
      </div>
      
      {/* Background Blur Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-900/20 rounded-full blur-[120px]"></div>
    </main>
  );
}
