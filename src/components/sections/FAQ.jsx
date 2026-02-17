import { useState } from 'react'
import { Briefcase, Clock, Monitor } from 'lucide-react'

export default function FAQ() {
  const [expandedIdx, setExpandedIdx] = useState(null)

  const faqs = [
    {
      question: 'Is video editing a good career?',
      answer: 'Yes. Brands, creators & agencies need editors daily.',
      icon: Briefcase
    },
    {
      question: 'How long does it take to learn video editing?',
      answer: 'Basics in weeks. Confidence in months — with practice.',
      icon: Clock
    },
    {
      question: 'Is this an online video editing course?',
      answer: 'Yes, fully online with lifetime access.',
      icon: Monitor
    }
  ]

  return (
    <section id="faq" className="py-12 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span style={{ color: '#fb923c' }}>Frequently Asked</span> <span style={{ color: '#ea580c' }}>Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const IconComponent = faq.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden hover:shadow-md transition"
                style={{ border: '2px solid #fef9e7' }}
              >
                <button
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                  className="w-full flex items-center gap-4 p-6 text-left transition cursor-pointer"
                  style={{ backgroundColor: expandedIdx === idx ? '#fef9e7' : 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef9e7'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = expandedIdx === idx ? '#fef9e7' : 'white'}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#fef9e7' }}>
                    <IconComponent style={{ color: '#ea580c' }} className="w-6 h-6" />
                  </div>
                  <h3 className="flex-1 text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <span
                    className={`text-2xl flex-shrink-0 transition transform ${
                      expandedIdx === idx ? 'rotate-45' : ''
                    }`}
                    style={{ color: '#ea580c' }}
                  >
                    +
                  </span>
                </button>

                {expandedIdx === idx && (
                  <div className="px-6 pb-6 pl-[88px] text-slate-600 leading-relaxed" style={{ borderTop: '1px solid #fef9e7' }}>
                    <p>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
