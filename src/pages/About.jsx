import Hero3D from '../components/Hero3D'

export default function About() {
  return (
    <div className="bg-slate-950 text-white">
      <Hero3D />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">About Us</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">We keep your story, mission, and values intact while upgrading visual expression with subtle motion, layered depth, and engaging interactions that remain accessible and performant.</p>
      </section>
    </div>
  )
}
