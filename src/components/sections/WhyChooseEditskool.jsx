import { Brain, BookOpen, Palette, Clock, Volume2 } from 'lucide-react'
import { useState } from 'react'

export default function WhyChooseEditskool() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const reasons = [
    {
      icon: Brain,
      label: 'Hands-On Learning',
      description: 'Learn by doing — not memorising'
    },
    {
      icon: BookOpen,
      label: 'Structured Curriculum',
      description: 'Structured syllabus (no random lessons)'
    },
    {
      icon: Palette,
      label: 'Industry-Ready Skills',
      description: 'Industry-relevant editing style'
    },
    {
      icon: Clock,
      label: 'Self-Paced Learning',
      description: 'Online access, learn at your pace'
    },
    {
      icon: Volume2,
      label: 'Bilingual Learning',
      description: 'Hindi and English explanations, real examples'
    }
  ]

  return (
    <section id="why-ediskool" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ea580c' }}>
            Why Learners Trust Ediskool
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon
            const isHovered = hoveredIdx === idx
            
            return (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Main Card - Expands on hover */}
                <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center border border-slate-200 hover:shadow-xl hover:border-orange-400 transition-all duration-300 cursor-pointer overflow-hidden ${isHovered ? 'min-h-72' : 'min-h-56'}`} style={{ backgroundColor: '#fef9e7' }}>
                  {/* Icon - Moves up on hover */}
                  <div className={`text-orange-500 mb-4 transition-all duration-300 ${isHovered ? '-translate-y-3' : 'translate-y-0'}`}>
                    <IconComponent size={56} strokeWidth={1.5} />
                  </div>
                  
                  {/* Label */}
                  <p className="text-center font-semibold text-slate-900 text-sm">
                    {reason.label}
                  </p>

                  {/* Description - Slides in on hover */}
                  <div className={`mt-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 hidden'}`}>
                    <p className="text-center text-slate-700 text-sm leading-relaxed max-w-xs flex items-start gap-3">
                      <span className="text-orange-500 font-bold text-lg flex-shrink-0">✔</span>
                      <span>{reason.description}</span>
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-sm lg:text-base text-slate-700 font-light">
            This isn't a recorded dump.<br />
            <span className="font-semibold" style={{ color: '#ea580c' }}>It's a guided video editing course online built for results.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
