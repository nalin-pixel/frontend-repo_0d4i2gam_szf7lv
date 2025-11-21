import Hero3D from '../components/Hero3D'
import ParallaxShowcase from '../components/ParallaxShowcase'

export default function Solutions() {
  return (
    <div className="bg-slate-950 text-white">
      <Hero3D />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Solutions</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">We present your current solution areas with upgraded visual storytelling, motion, and interactive components while preserving your existing content and structure.</p>
      </section>
      <ParallaxShowcase />
    </div>
  )
}
