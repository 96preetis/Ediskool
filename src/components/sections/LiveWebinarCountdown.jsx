import { useEffect, useState } from 'react'

export default function LiveWebinarCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 4,
    minutes: 43,
    seconds: 12
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Dummy calculation - using fixed values that update every second
      const webinarDate = new Date('2026-03-02T20:00:00').getTime()
      const now = new Date().getTime()
      const difference = webinarDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-white w-full overflow-hidden">
      {/* Full-width outer container with pure white background */}
      <div className="relative w-full flex flex-col items-center justify-center py-2 md:py-6 px-4 md:px-0">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center" style={{ color: '#ea580c' }}>
          Webinar Starts In
        </h2>

        {/* Animated dotted pattern - responsive */}
        <div 
          className="pointer-events-none hidden md:block absolute"
          style={{
            position: 'absolute',
            width: '60%',
            height: '300px',
            left: '50%',
            top: '60%',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',
            zIndex: 1
          }}
        >
          {/* Randomly positioned floating dots */}
          {[...Array(150)].map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute bg-black rounded-full"
              style={{
                width: '2.5px',
                height: '2.5px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatDot 10s ease-in-out infinite`,
                animationDelay: `${(i / 150) * 10}s`,
                opacity: 0.8
              }}
            ></div>
          ))}
        </div>

        {/* White card - responsive width and positioning */}
        <div className="relative z-10 bg-white rounded-lg w-full md:w-auto" style={{
          width: '100%',
          maxWidth: '700px',
          border: '1px solid #d3d3d3'
        }}>
          <div className="py-6 sm:py-8 px-4 sm:px-8 md:px-10">
            {/* Content Container - flex direction changes on mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
              
              {/* Left: Circular Image - responsive size */}
              <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44">
                <div className="relative w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                    alt="Webinar Speaker"
                    className="w-full h-full rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* Right: Countdown Content - text sizes responsive */}
              <div className="flex-1 text-center sm:text-left">
                {/* Headline */}
                <p className="text-xs sm:text-sm md:text-base font-semibold text-black mb-3 sm:mb-4">
                  Join Ediskool's next weekly Live Session
                </p>

                {/* Large Countdown Timer */}
                <div className="mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-wider font-mono">
                    {String(timeLeft.days).padStart(2, '0')} : {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>

                {/* Sub Text */}
                <p className="text-xs sm:text-sm md:text-base text-gray-700 font-light">
                  Every Sunday at 8pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatDot {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-2px) translateX(1px);
            opacity: 0.82;
          }
          50% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(2px) translateX(-1px);
            opacity: 0.82;
          }
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}
