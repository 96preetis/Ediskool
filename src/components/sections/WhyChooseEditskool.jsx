export default function WhyChooseEditskool() {
  const reasons = [
    {
      icon: '👨‍🏫',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with 10+ years of experience'
    },
    {
      icon: '⏱️',
      title: 'Self-Paced Learning',
      description: 'Study at your own pace with lifetime access to course materials'
    },
    {
      icon: '🏆',
      title: 'Industry Recognized Certificates',
      description: 'Get certified credentials that boost your career prospects'
    },
    {
      icon: '💰',
      title: '14-Day Refund Policy',
      description: 'Try risk-free! Get full refund if not satisfied'
    },
    {
      icon: '🤝',
      title: 'Active Community Support',
      description: 'Get help from mentors and peers in our thriving community'
    },
    {
      icon: '📱',
      title: 'Learn Anywhere',
      description: 'Access courses on mobile, tablet, or desktop devices'
    }
  ]

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Editskool?
          </h2>
          <p className="text-lg text-slate-600">
            We provide the best online learning experience for your career growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-10 text-white text-center">
          <h3 className="text-3xl font-bold mb-3">
            Ready to Transform Your Career?
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Join thousands of students who have already changed their lives with Editskool
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-10 rounded-lg hover:bg-blue-50 transition cursor-pointer">
            Start Learning Today
          </button>
        </div>
      </div>
    </section>
  )
}
