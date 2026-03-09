import { useEffect, useState, useRef } from 'react'

// Particle class for vector-based motion
class Particle {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.radius = 1.25 // half of 2.5px

    // Generate random angle between 0 and 2π
    const angle = Math.random() * Math.PI * 2

    // Generate small random speed (0.1 to 0.4)
    const speed = 0.1 + Math.random() * 0.3

    // Calculate velocity using cos/sin
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed
  }

  update() {
    // Update position using velocity
    this.x += this.vx
    this.y += this.vy

    // Apply wrap-around logic
    if (this.x + this.radius < 0) {
      this.x = this.width + this.radius
    } else if (this.x - this.radius > this.width) {
      this.x = -this.radius
    }

    if (this.y + this.radius < 0) {
      this.y = this.height + this.radius
    } else if (this.y - this.radius > this.height) {
      this.y = -this.radius
    }
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
    ctx.fill()
  }
}

// Particle system manager
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.particles = []
    this.particleCount = 250

    // Initialize particles
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          canvas.width,
          canvas.height
        )
      )
    }
  }

  update() {
    this.particles.forEach(particle => particle.update())
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.particles.forEach(particle => particle.draw(this.ctx))
  }

  animate() {
    this.update()
    this.draw()
  }

  resize(width, height) {
    this.canvas.width = width
    this.canvas.height = height
    this.particles.forEach(particle => {
      particle.width = width
      particle.height = height
    })
  }
}

export default function LiveWebinarCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 4,
    minutes: 43,
    seconds: 12
  })
  const canvasRef = useRef(null)
  const particleSystemRef = useRef(null)
  const animationIdRef = useRef(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Dummy calculation - using fixed values that update every second
      const webinarDate = new Date('2026-03-10T20:00:00').getTime()
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

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    updateCanvasSize()

    // Initialize particle system
    particleSystemRef.current = new ParticleSystem(canvas)

    // Animation loop
    const animate = () => {
      particleSystemRef.current.animate()
      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      updateCanvasSize()
      if (particleSystemRef.current) {
        particleSystemRef.current.resize(canvas.width, canvas.height)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [])

  return (
    <section className="relative bg-white w-full overflow-hidden -mt-40 md:-mt-48">
      {/* Full-width outer container with pure white background */}
      <div className="relative w-full flex flex-col items-center justify-center pt-0 md:pt-2 pb-2 md:pb-6 px-4 md:px-0">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center" style={{ color: '#ea580c' }}>
          Webinar Starts In
        </h2>

        {/* Animated particle system - responsive */}
        <div 
          className="pointer-events-none hidden md:block absolute"
          style={{
            position: 'absolute',
            width: '60%',
            height: '300px',
            left: '50%',
            top: '65%',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',
            zIndex: 1
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              display: 'block',
              width: '100%',
              height: '100%'
            }}
          />
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
              <div className="flex-1 text-center">
                {/* Headline */}
                <p className="text-xs sm:text-sm md:text-base font-semibold text-black mb-3 sm:mb-4">
                  Join Ediskool's next weekly Live Session
                </p>

                {/* Large Countdown Timer */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
                    {/* Days */}
                    <div className="flex flex-col items-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-wider font-mono">
                        {String(timeLeft.days).padStart(2, '0')}
                      </div>
                      <p className="text-xs sm:text-xs md:text-sm text-gray-600 font-light mt-1">day</p>
                    </div>

                    {/* Separator */}
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">:</span>

                    {/* Hours */}
                    <div className="flex flex-col items-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-wider font-mono">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </div>
                      <p className="text-xs sm:text-xs md:text-sm text-gray-600 font-light mt-1">hours</p>
                    </div>

                    {/* Separator */}
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">:</span>

                    {/* Minutes */}
                    <div className="flex flex-col items-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-wider font-mono">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </div>
                      <p className="text-xs sm:text-xs md:text-sm text-gray-600 font-light mt-1">minutes</p>
                    </div>

                    {/* Separator */}
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">:</span>

                    {/* Seconds */}
                    <div className="flex flex-col items-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-wider font-mono">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <p className="text-xs sm:text-xs md:text-sm text-gray-600 font-light mt-1">seconds</p>
                    </div>
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
    </section>
  )
}
