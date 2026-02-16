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
    <section className="relative -mt-32 py-2 px-6 bg-white overflow-hidden">
      {/* Animated Dots Container - Left Side - Outside Border */}
      <div className="absolute left-0 top-0 w-1/3 h-full pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={`left-${i}`}
            className="absolute w-1 h-1 bg-black rounded-full"
            style={{
              animation: `floatDot 8s ease-in-out infinite`,
              animationDelay: `${(i / 25) * 8}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 1
            }}
          ></div>
        ))}
      </div>

      {/* Animated Dots Container - Right Side - Outside Border */}
      <div className="absolute right-0 top-0 w-1/3 h-full pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={`right-${i}`}
            className="absolute w-1 h-1 bg-black rounded-full"
            style={{
              animation: `floatDot 8s ease-in-out infinite`,
              animationDelay: `${(i / 25) * 8}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 1
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center" style={{ color: '#ea580c' }}>
          Webinar Starts In
        </h2>

        {/* Border Container - Image and Content Inside */}
        <div className="border border-black rounded-2xl p-4 lg:p-5" style={{ borderWidth: '1px' }}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
            
            {/* Left: Circular Image - Inside Border */}
            <div className="flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 ml-3 lg:ml-5">
              <div className="relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                  alt="Webinar Speaker"
                  className="w-full h-full rounded-full object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Right: Countdown Content - Inside Border */}
            <div className="flex-2 text-center lg:text-left">
              {/* Headline */}
              <p className="text-sm lg:text-base font-semibold text-black mb-2">
                Join Ediskool's next weekly Live Session
              </p>

              {/* Large Countdown Timer */}
              <div className="mb-2">
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

      <style jsx>{`
        @keyframes floatDot {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 1;
          }
          10% {
            transform: translateY(-8px) translateX(5px);
            opacity: 0.95;
          }
          20% {
            transform: translateY(-15px) translateX(10px);
            opacity: 0.9;
          }
          30% {
            transform: translateY(-20px) translateX(12px);
            opacity: 0.88;
          }
          40% {
            transform: translateY(-25px) translateX(10px);
            opacity: 0.85;
          }
          50% {
            transform: translateY(-22px) translateX(5px);
            opacity: 0.88;
          }
          60% {
            transform: translateY(-18px) translateX(-3px);
            opacity: 0.9;
          }
          70% {
            transform: translateY(-12px) translateX(-8px);
            opacity: 0.92;
          }
          80% {
            transform: translateY(-5px) translateX(-5px);
            opacity: 0.95;
          }
          90% {
            transform: translateY(2px) translateX(2px);
            opacity: 0.98;
          }
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
