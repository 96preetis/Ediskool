import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Courses', href: '#courses' },
    { label: 'Why Ediskool', href: '#why-ediskool' },
    { label: 'Instructor', href: '#instructor' },
    { label: 'Trusted by', href: '#trusted-by' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ]

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md border-b-2" style={{ backgroundColor: 'white', borderColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold"></span>
          <h1 className="text-xl font-bold" style={{ color: '#ea580c' }}>
            Ediskool
            <span className="text-xs block font-normal mt-0.5" style={{ color: '#ea580c', opacity: 0.8 }}>Master Your Skills</span>
          </h1>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition font-medium hover:opacity-70"
              style={{ color: '#ea580c' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="hover:opacity-70" style={{ color: '#ea580c' }}>
            🛒
          </button>
          <button className="font-bold py-2 px-6 rounded-lg transition cursor-pointer hover:opacity-90" style={{ backgroundColor: '#ea580c', color: 'white' }}>
            Log In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: '#ea580c' }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t-2" style={{ borderColor: '#f5f5f5' }}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="transition font-medium py-2 hover:opacity-70"
                style={{ color: '#ea580c' }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t" style={{ borderColor: '#f5f5f5' }}>
              <button className="font-bold py-2 px-6 rounded-lg transition cursor-pointer hover:opacity-90 w-full" style={{ backgroundColor: '#ea580c', color: 'white' }}>
                Log In
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
