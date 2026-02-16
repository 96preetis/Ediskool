export default function MeetYourMentor() {
  const mentors = [
    {
      name: 'John Developer',
      role: 'Full Stack Engineer',
      bio: '10+ years at top tech companies. Passionate about teaching real-world development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      expertise: ['React', 'Node.js', 'Python']
    },
    {
      name: 'Sarah Code',
      role: 'Frontend Expert',
      bio: 'Built interfaces for millions. Loves creating beautiful, responsive designs.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      expertise: ['React', 'Vue', 'CSS']
    },
    {
      name: 'Mike Backend',
      role: 'Backend Architecture Lead',
      bio: 'Designed systems serving 100M+ users. Expert in scalable backend solutions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      expertise: ['Node.js', 'Go', 'Kubernetes']
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Meet Your Mentors
          </h2>
          <p className="text-lg text-slate-600">
            Learn from the best professionals in the industry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {mentors.map((mentor, idx) => (
            <div key={idx} className="bg-gradient-to-b from-slate-50 to-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="relative">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {mentor.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {mentor.role}
                </p>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                  {mentor.bio}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-700 mb-3">EXPERTISE</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 rounded-lg transition cursor-pointer">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
