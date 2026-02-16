export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">🎓 Editskool</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Transform your career with world-class online education. Learn from industry experts.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition">f</a>
              <a href="#" className="text-slate-400 hover:text-white transition">𝕏</a>
              <a href="#" className="text-slate-400 hover:text-white transition">in</a>
              <a href="#" className="text-slate-400 hover:text-white transition">▶</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition">Browse Courses</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Our Mentors</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Categories</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Become Instructor</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Report Issue</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Feedback</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Refund Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-slate-800 rounded-lg p-8 mb-12">
          <div className="max-w-md">
            <h4 className="font-bold text-white text-lg mb-2">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Get notified about new courses and special offers
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>
            © 2026 Editskool. All rights reserved. | Empowering learners worldwide 🚀
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <select className="bg-slate-800 text-slate-300 border border-slate-700 rounded py-2 px-4 focus:outline-none cursor-pointer">
              <option>🌍 English</option>
              <option>🇮🇳 Hindi</option>
              <option>🇯🇵 日本語</option>
            </select>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110 cursor-pointer"
      >
        ↑
      </button>
    </footer>
  )
}
