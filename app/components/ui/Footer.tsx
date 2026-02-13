import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter mb-4 text-blue-600">SLEEKSITES.</h2>
            <p className="text-slate-500 max-w-xs text-lg">
              Crafting high-performance digital engines for local and global brands from Nairobi, Kenya.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-slate-600">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">SEO & Growth</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">AI Systems</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Connect</h4>
            <ul className="space-y-4 text-slate-600">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Instagram</Link></li>
              <li><Link href="mailto:hello@sleeksites.co.ke" className="hover:text-blue-600 transition-colors">Email Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 SleekSites Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-600">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-600">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;