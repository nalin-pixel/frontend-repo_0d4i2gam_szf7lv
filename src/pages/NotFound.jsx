export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-7xl font-extrabold">404</h1>
        <p className="mt-4 text-slate-300">The page you’re looking for doesn’t exist yet.</p>
        <a href="/" className="mt-6 inline-flex items-center rounded-lg bg-white/90 hover:bg-white text-slate-900 font-semibold px-5 py-3 transition-colors">Back home</a>
      </div>
    </div>
  )
}
