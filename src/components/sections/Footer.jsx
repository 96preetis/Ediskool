import { Mail, Phone, Clock, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 mt-16 md:mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Top Section - Logo & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Left - Brand & Description */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#ea580c' }}>
              Ediskool
            </h2>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 max-w-sm">
              Empowering the next generation of video editors with industry-standard skills and creative mentorship.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Middle - Contact */}
          <div>
            <h3 className="font-bold mb-2 text-sm md:text-base" style={{ color: '#ea580c' }}>Contact</h3>
            <div className="flex items-center gap-2 md:gap-3">
              <Mail size={18} style={{ color: '#ea580c' }} />
              <a href="mailto:hello@ediskool.com" className="text-gray-600 text-xs md:text-sm hover:text-orange-500 transition">
                hello@ediskool.com
              </a>
            </div>
          </div>

          {/* Right - Operating Hours */}
          <div>
            <h3 className="font-bold mb-2 text-sm md:text-base" style={{ color: '#ea580c' }}>Hours</h3>
            <div className="flex items-center gap-2 md:gap-3">
              <Clock size={18} style={{ color: '#ea580c' }} />
              <div className="text-xs md:text-sm text-gray-600">
                <p>Mon-Sat</p>
                <p>10 AM - 7 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 py-3 md:py-4"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 gap-4">
          <p>© Copyright 2025</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition">Terms of Use</a>
            <a href="#" className="hover:text-orange-500 transition">Contact Us</a>
            <a href="#" className="hover:text-orange-500 transition">Blog</a>
            <a href="#" className="hover:text-orange-500 transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
