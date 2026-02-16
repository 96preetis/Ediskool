export default function WhatYouWillLearn() {
  const learningPaths = [
    {
      title: 'Web Development',
      skills: [
        'HTML, CSS & JavaScript',
        'React & Modern Frontend',
        'Backend with Node.js',
        'Database Design & SQL',
        'Deployment & DevOps',
        'Real-world Project Building'
      ]
    },
    {
      title: 'Data Science',
      skills: [
        'Python Programming',
        'Data Manipulation & Analysis',
        'Statistics & Probability',
        'Machine Learning',
        'Data Visualization',
        'Real Business Problems'
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        'React Native Basics',
        'UI/UX Best Practices',
        'State Management',
        'API Integration',
        'Testing & Debugging',
        'App Deployment'
      ]
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What Exactly Will You Learn?
          </h2>
          <p className="text-lg text-slate-300">
            Structured curriculum designed for practical skill development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {learningPaths.map((path, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {path.title}
              </h3>
              <ul className="space-y-4">
                {path.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-xl mt-1">✓</span>
                    <span className="text-slate-200">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-700 rounded-lg p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">50+</p>
              <p className="text-slate-300">Detailed Modules</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">200+</p>
              <p className="text-slate-300">Video Lessons</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">100+</p>
              <p className="text-slate-300">Practical Exercises</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">10+</p>
              <p className="text-slate-300">Real Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
