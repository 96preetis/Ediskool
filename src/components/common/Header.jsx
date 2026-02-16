export default function Header() {
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

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#" className="transition font-medium hover:opacity-70" style={{ color: '#ea580c' }}>
            Courses
          </a>
          <a href="#" className="transition font-medium hover:opacity-70" style={{ color: '#ea580c' }}>
            About
          </a>
          <a href="#" className="transition font-medium hover:opacity-70" style={{ color: '#ea580c' }}>
            Students
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block hover:opacity-70" style={{ color: '#ea580c' }}>
            🛒
          </button>
          <button className="font-bold py-2 px-6 rounded-lg transition cursor-pointer hover:opacity-90" style={{ backgroundColor: '#ea580c', color: 'white' }}>
            Log In
          </button>
        </div>
      </div>
    </header>
  )
}
