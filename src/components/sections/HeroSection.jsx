export default function HeroSection() {
  return (
    <section 
      className="relative overflow-visible"
      style={{
        background: 'linear-gradient(to bottom, #fef3c7 0%, #fb923c 100%)'
      }}
    >
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-0 w-96 h-96 rounded-full blur-3xl animate-floatingBlob" style={{ backgroundColor: '#fb923c' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-floatingBlob" style={{ backgroundColor: '#ea580c', animationDelay: '1s' }}></div>
      </div>

      {/* Smooth Texture Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 20px 20px, rgba(235, 88, 12, 0.3) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-32 text-center">
        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fadeInUp" style={{ color: '#78350f' }}>
          Master Editing Like a <span style={{ color: '#fb923c' }}>Pro</span>
        </h1>

        {/* Subheadings */}
        <div className="flex justify-center items-center gap-12 max-w-5xl mx-auto mb-6 animate-fadeInUp flex-wrap" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#fb923c' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-lg font-semibold" style={{ color: '#78350f' }}>Industry Tools</h3>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#fb923c' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="text-lg font-semibold" style={{ color: '#78350f' }}>Beginner to Pro</h3>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#fb923c' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4m0 2a2 2 0 11-4 0m0 0a2 2 0 014 0m6 0v2m0-2a2 2 0 11-4 0m0 0a2 2 0 014 0M9 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
            <h3 className="text-lg font-semibold" style={{ color: '#78350f' }}>Real-World Skills</h3>
          </div>
        </div>

        {/* CTA Button */}
        <button className="font-bold py-4 px-12 rounded-xl transition transform hover:scale-105 cursor-pointer shadow-lg hover:opacity-90 animate-fadeInUp button-running-border" style={{ animationDelay: '0.4s', color: 'white', border: '2px solid transparent' }}>
          Explore Ediskool Courses
        </button>
      </div>

      {/* Blue Curved Section with Video Overlay */}
      <div className="relative h-0" style={{ paddingBottom: '100px' }}>
        {/* Blue Curve Background */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          style={{ height: '200px' }}
        >
          <path d="M0,100 Q300,20 600,100 T1200,100 L1200,200 L0,200 Z" fill="rgba(255, 255, 255, 1)" />
        </svg>

        {/* Video Card - Overlapping on Curve */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-24 z-10 w-full max-w-2xl px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition bg-white">
            {/* Video Thumbnail */}
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=700&fit=crop"
              alt="Online Learning Instructor"
              className="w-full h-96 object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition flex items-center justify-center cursor-pointer group">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition transform shadow-2xl">
                <svg
                  className="w-14 h-14 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: '#ea580c' }}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Section Below */}
      <div className="relative bg-white py-64">
        {/* This space is available for content or next section */}
      </div>
    </section>
  )
}
