import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import ParallaxShowcase from './components/ParallaxShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-16">
        <Hero3D />
        <ParallaxShowcase />
        {/* Placeholder sections reflecting existing site structure; content will be fed from current pages */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Services</h2>
            <p className="mt-4 text-slate-300 max-w-3xl">We will maintain your existing services content and navigation, layering in interactive visuals, parallax depth, and modern motion to elevate the experience without changing your information architecture.</p>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Case Studies</h2>
            <p className="mt-4 text-slate-300 max-w-3xl">Immersive storytelling with scroll-driven animations, media reveals, and performance-optimized assets.</p>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Let’s build something remarkable</h2>
            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              <input aria-label="Name" placeholder="Name" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <input aria-label="Email" placeholder="Email" type="email" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <input aria-label="Company" placeholder="Company" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:col-span-2" />
              <textarea aria-label="Project details" placeholder="Project details" rows="5" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:col-span-2" />
              <button className="mt-2 inline-flex items-center justify-center rounded-lg bg-white/90 hover:bg-white text-slate-900 font-semibold px-5 py-3 transition-colors sm:col-span-2">Send request</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
