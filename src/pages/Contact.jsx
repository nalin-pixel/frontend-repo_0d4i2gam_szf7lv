import Hero3D from '../components/Hero3D'

export default function Contact() {
  return (
    <div className="bg-slate-950 text-white">
      <Hero3D />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Contact</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">We preserve your existing contact details and lead capture while enhancing the UX with clear inputs, motion feedback, and responsive layouts.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          <input aria-label="Name" placeholder="Name" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input aria-label="Email" placeholder="Email" type="email" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input aria-label="Company" placeholder="Company" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:col-span-2" />
          <textarea aria-label="Message" placeholder="How can we help?" rows="6" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:col-span-2" />
          <button className="mt-2 inline-flex items-center justify-center rounded-lg bg-white/90 hover:bg-white text-slate-900 font-semibold px-5 py-3 transition-colors sm:col-span-2">Submit</button>
        </form>
      </section>
    </div>
  )
}
