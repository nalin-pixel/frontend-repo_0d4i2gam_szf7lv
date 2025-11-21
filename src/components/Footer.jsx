export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold">Aurexis Solution</h4>
            <p className="mt-2 text-sm text-slate-400">Innovative digital products and experiences.</p>
          </div>
          <div>
            <h5 className="text-white font-medium">Company</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium">Work</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/industries" className="hover:text-white">Industries</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium">Legal</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Aurexis Solution. All rights reserved.</div>
      </div>
    </footer>
  )
}
