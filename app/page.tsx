export default function Home() {
  const target = 75000;
  const current = 5000; // Update this number as you earn!
  const progress = (current / target) * 100;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      <div className="max-w-3xl mx-auto py-20 px-6">
        
        {/* Header */}
        <header className="mb-16">
          <p className="text-blue-400 font-mono text-sm mb-2">Verified Developer • Karachi</p>
          <h1 className="text-6xl font-black mb-4 tracking-tighter">YOUTUN.DEV</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            16-year-old Full Stack Developer building high-performance digital solutions for the local market.
          </p>
        </header>

        {/* iPhone 13 Fund */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-12">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-xl font-bold">📱 iPhone 13 Fund</h2>
            <p className="text-sm text-slate-400">Target: Rs. {target.toLocaleString()}</p>
          </div>
          <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden">
            <div 
              className="bg-blue-500 h-full transition-all duration-1000" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-blue-400 font-mono">{progress.toFixed(1)}% Completed</p>
        </section>

        {/* Services & Projects Grid */}
        <div className="grid gap-8 mb-16">
          <h2 className="text-2xl font-bold border-b border-slate-800 pb-2">Expert Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <h3 className="font-bold text-blue-400">Saddar Special</h3>
              <p className="text-sm text-slate-400">Live price lists & catalogs</p>
              <p className="mt-2 font-bold">Rs. 8,000+</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <h3 className="font-bold text-blue-400">DHA Business Pack</h3>
              <p className="text-sm text-slate-400">Premium landing pages</p>
              <p className="mt-2 font-bold">Rs. 15,000+</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <section className="bg-blue-600 rounded-3xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Start a Project</h2>
          <form action="mailto:youtun.freelance@gmail.com" method="post" encType="text/plain" className="grid gap-4">
            <input name="Name" placeholder="Business Name" className="bg-white/10 border border-white/20 p-3 rounded-lg placeholder:text-white/60 outline-none focus:bg-white/20" required />
            <textarea name="Message" placeholder="What can I build for you?" className="bg-white/10 border border-white/20 p-3 rounded-lg placeholder:text-white/60 h-32 outline-none focus:bg-white/20" required></textarea>
            <button type="submit" className="bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors">Send Inquiry</button>
          </form>
        </section>

        <footer className="mt-20 text-center text-slate-500 text-sm">
          © 2026 Youtun.Dev Portfolio • Karachi, Pakistan
        </footer>
      </div>
    </main>
  );
}
