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
    <section className="relative -mt-48 bg-white w-screen overflow-hidden">
      {/* Full-width outer container with pure white background */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
        
        {/* Section Heading - Above everything */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center absolute" style={{ color: '#ea580c', top: '60px', zIndex: 20 }}>
          Webinar Starts In
        </h2>

        {/* 50% width inner div with animated dotted pattern */}
        <div 
          className="pointer-events-none"
          style={{
            position: 'absolute',
            width: '60%',
            height: '300px',
            left: '50%',
            top: '32%',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden'
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

        {/* 40% width white overlay centered on top - contains all content */}
        <div className="z-10 bg-white rounded-lg" style={{
          position: 'absolute',
          width: '40%',
          left: '50%',
          top: '32%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid #d3d3d3'
        }}>
          <div className="py-5 px-2 lg:px-5">
            {/* Content Container */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              
              {/* Left: Circular Image */}
              <div className="flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48">
                <div className="relative w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                    alt="Webinar Speaker"
                    className="w-full h-full rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* Right: Countdown Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Headline */}
                <p className="text-sm lg:text-base font-semibold text-black mb-4">
                  Join Ediskool's next weekly Live Session
                </p>

                {/* Large Countdown Timer */}
                <div className="mb-4">
                  <div className="text-3xl lg:text-4xl font-bold text-black tracking-wider font-mono">
                    {String(timeLeft.days).padStart(2, '0')} : {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>

                {/* Sub Text */}
                <p className="text-sm lg:text-base text-gray-700 font-light">
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
