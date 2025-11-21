import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero3D() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.6])

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/30 blur-[120px]" />
      </div>

      {/* Foreground content */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_40px_rgba(139,92,246,0.35)]">
            Futuristic Digital Experiences
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            We transform brands with immersive 3D, micro-interactions, and performance-first engineering.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white/90 hover:bg-white text-slate-900 font-semibold px-5 py-3 transition-colors">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 backdrop-blur border border-white/10 transition-colors">
              See our work
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient mask for smooth scroll transition */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
