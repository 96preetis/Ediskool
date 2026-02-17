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
    <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
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
                {/* Main Card - Icon + Label */}
                <div className="rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center border border-slate-200 hover:shadow-xl hover:border-orange-400 transition-all duration-300 min-h-56 cursor-pointer" style={{ backgroundColor: '#fef9e7' }}>
                  <div className="text-orange-500 mb-4 transform transition-transform duration-300">
                    <IconComponent size={56} strokeWidth={1.5} />
                  </div>
                  <p className="text-center font-semibold text-slate-900 text-sm">
                    {reason.label}
                  </p>
                </div>

                {/* Hover Card - Appears Below */}
                {isHovered && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-full max-w-xs z-50 animate-fadeInUp">
                    <div className="rounded-2xl shadow-2xl overflow-hidden border border-orange-400" style={{ backgroundColor: '#fef9e7' }}>
                      {/* Orange Gradient Header */}
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 flex flex-col items-center">
                        <div className="text-white mb-4">
                          <IconComponent size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white font-bold text-center text-lg">
                          {reason.label}
                        </h3>
                      </div>

                      {/* Description Section */}
                      <div className="p-6">
                        <p className="text-slate-700 text-sm leading-relaxed flex items-start gap-3">
                          <span className="text-orange-500 font-bold text-lg flex-shrink-0">✔</span>
                          <span>{reason.description}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
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
