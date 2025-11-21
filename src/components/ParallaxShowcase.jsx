import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { Monitor, Layers, Zap, Rocket, Sparkles } from 'lucide-react'

export default function ParallaxShowcase() {
  const { scrollYProgress } = useScroll()
  const translateY1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section id="work" className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Design. Motion. Code.</h2>
          <p className="mt-4 text-slate-300">A premium, interactive layer across your existing pages — built for speed and crafted with care.</p>
        </div>

        {/* Layers */}
        <div className="relative mt-16 grid md:grid-cols-2 gap-8">
          <motion.div style={{ y: translateY1, rotate }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-fuchsia-400" />
              <h3 className="text-xl font-semibold">Micro-interactions</h3>
            </div>
            <p className="mt-3 text-slate-300">Hover, press, and scroll interactions that feel alive and purposeful.</p>
          </motion.div>

          <motion.div style={{ y: translateY2, scale }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-semibold">Parallax depth</h3>
            </div>
            <p className="mt-3 text-slate-300">Layered backgrounds and foregrounds respond to motion for cinematic depth.</p>
          </motion.div>

          <motion.div style={{ y: translateY2 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Monitor className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-semibold">3D heroes</h3>
            </div>
            <p className="mt-3 text-slate-300">Spline-powered hero sections that anchor each page with a wow moment.</p>
          </motion.div>

          <motion.div style={{ y: translateY1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Rocket className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-semibold">Performance-first</h3>
            </div>
            <p className="mt-3 text-slate-300">Lazy loading, GPU-accelerated animations, and image optimization out of the box.</p>
          </motion.div>
        </div>
      </div>

      {/* Background grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,rgba(255,255,255,0.04)_25px),linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.04)_25px)] bg-[size:25px_25px]" />
    </section>
  )
}
