import Hero3D from '../components/Hero3D'
import ParallaxShowcase from '../components/ParallaxShowcase'

export default function Services() {
  return (
    <div className="bg-slate-950 text-white">
      <Hero3D />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Services</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">All your existing services content, elevated with motion, parallax, and modern UI. We maintain your information architecture and copy while transforming presentation.</p>
      </section>
      <ParallaxShowcase />
    </div>
  )
}
