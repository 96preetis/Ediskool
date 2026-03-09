import { Brain, BookOpen, Palette, Clock, Volume2 } from 'lucide-react'

export default function WhyChooseEditskool() {
  const reasons = [
    {
      icon: Brain,
      label: 'Hands-On Learning',
      shortDesc: 'Learn by doing — not memorising',
      longDesc: 'Get your hands dirty from day one. Practice real-world editing techniques in live sessions.'
    },
    {
      icon: BookOpen,
      label: 'Structured Curriculum',
      shortDesc: 'Structured syllabus (no random lessons)',
      longDesc: 'Follow a carefully planned roadmap that builds your skills progressively and logically.'
    },
    {
      icon: Palette,
      label: 'Industry-Ready Skills',
      shortDesc: 'Industry-relevant editing style',
      longDesc: 'Learn the exact techniques used by professional editors in the film and YouTube industry.'
    },
    {
      icon: Clock,
      label: 'Self-Paced Learning',
      shortDesc: 'Online access, learn at your pace',
      longDesc: 'Study whenever you want, wherever you want. Full access to all course materials forever.'
    },
    {
      icon: Volume2,
      label: 'Bilingual Learning',
      shortDesc: 'Hindi and English explanations, real examples',
      longDesc: 'Understand concepts in your preferred language with detailed examples and clear explanations.'
    }
  ]

  return (
    <section id="why-ediskool" className="py-20 px-6" style={{ backgroundColor: '#ffffff' }}>
      <style>{`
        .card-hover-reveal {
          aspect-ratio: 3 / 4.2;
        }

        .card-hover-reveal:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(234, 88, 12, 0.15);
          border-color: #ea580c;
        }

        .card-hover-reveal:hover .card-bg {
          filter: brightness(0.92) saturate(1.05);
        }

        .card-hover-reveal:hover .card-icon {
          transform: scale(1.12) translateY(-8px);
        }

        .card-hover-reveal:hover .card-overlay {
          background: linear-gradient(to top, rgba(26, 26, 26, 0.9) 0%, rgba(26, 26, 26, 0.5) 100%);
        }

        .card-hover-reveal:hover .card-title-section {
          transform: translateY(-4px);
        }

        .card-extra-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(26, 26, 26, 0.95) 0%, rgba(26, 26, 26, 0.85) 100%);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 30px 20px;
          transition: left 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          border-radius: 16px;
          z-index: 10;
        }

        .card-hover-reveal:hover .card-extra-overlay {
          left: 0;
        }

        .card-extra-content {
          color: #ffffff;
          font-size: 13px;
          line-height: 1.7;
          font-weight: 500;
          text-align: left;
          opacity: 0;
          transition: opacity 0.4s ease 0.2s;
        }

        .card-hover-reveal:hover .card-extra-content {
          opacity: 1;
        }

        .card-short-desc-overlay {
          font-size: 12.5px;
          opacity: 0;
          transition: opacity 0.4s ease 0.15s, font-size 0.4s ease 0.15s;
          margin-bottom: 12px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          text-align: left;
        }

        .card-label-overlay {
          font-size: 16px;
          opacity: 0;
          transition: opacity 0.4s ease 0.12s, font-size 0.4s ease 0.12s;
          margin-bottom: 8px;
          color: #ffffff;
          font-weight: 700;
          text-align: left;
        }

        .card-hover-reveal:hover .card-label-overlay {
          opacity: 1;
          font-size: 18px;
        }

        .card-hover-reveal:hover .card-short-desc-overlay {
          opacity: 1;
          font-size: 15px;
        }
      `}</style>

      <div className="mx-auto w-full px-8" style={{ maxWidth: '1300px' }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ea580c' }}>
            Why Learners Trust Ediskool
          </h2>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-5 gap-4 mb-12">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon

            return (
              <div
                key={idx}
                className="card-hover-reveal"
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '2px solid #f0ece4',
                  transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease',
                }}
              >
                {/* Background with icon */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `linear-gradient(135deg, #fef9e7 0%, #f5f0e4 100%)`,
                    transition: 'filter 0.5s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                  }}
                  className="card-bg"
                >
                  <IconComponent size={80} strokeWidth={1.2} style={{ color: '#ea580c', transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)' }} className="card-icon" />
                </div>

                {/* Gradient overlay - light to darker */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(234, 88, 12, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                    transition: 'background 0.4s ease',
                    borderRadius: '16px',
                    pointerEvents: 'none',
                  }}
                  className="card-overlay"
                />

                {/* Long Description Overlay - slides from left */}
                <div className="card-extra-overlay">
                  <div className="card-label-overlay">
                    {reason.label}
                  </div>
                  <div className="card-short-desc-overlay">
                    {reason.shortDesc}
                  </div>
                  <div className="card-extra-content">
                    {reason.longDesc}
                  </div>
                </div>

                {/* Content Block */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '20px',
                    background: 'linear-gradient(to top, rgba(26, 26, 26, 0.6) 0%, rgba(26, 26, 26, 0) 100%)',
                    transition: 'background 0.4s ease 0.05s',
                    paddingBottom: '24px',
                    borderRadius: '0 0 16px 16px',
                  }}
                  className="card-content-block"
                >
                  {/* Title + Short Desc */}
                  <div
                    style={{
                      transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                    className="card-title-section"
                  >
                    <h3 style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '18px', margin: '0 0 6px 0' }}>
                      {reason.label}
                    </h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '13px', margin: 0, lineHeight: '1.4' }}>
                      {reason.shortDesc}
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
