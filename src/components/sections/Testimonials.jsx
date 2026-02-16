export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Singh',
      role: 'Software Developer',
      company: 'TCS',
      text: 'Editskool courses completely transformed my career. Got promoted within 3 months!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      rating: 5
    },
    {
      name: 'Rahul Kumar',
      role: 'Junior Developer → Senior Developer',
      company: 'Flipkart',
      text: 'The projects were so practical. I could directly apply them in my work. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      rating: 5
    },
    {
      name: 'Neha Patel',
      role: 'Career Changer to Data Scientist',
      company: 'Amazon',
      text: 'Started with zero knowledge in data science. Now working as a Data Scientist at Amazon!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      rating: 5
    },
    {
      name: 'Arjun Reddy',
      role: 'Full Stack Developer',
      company: 'Google',
      text: 'The mentorship and community support is unmatched. Worth every penny spent!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      rating: 5
    },
    {
      name: 'Deepika Sharma',
      role: 'Freelancer',
      company: 'Self-Employed',
      text: 'Took multiple courses, started my own freelance business. Making 2x my previous salary!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Product Manager',
      company: 'Myntra',
      text: 'The structured learning path helped me transition to product management smoothly.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-slate-600">
            Real stories from students who transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 shadow-md hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-10 text-white text-center">
          <p className="text-lg mb-4">⭐ 4.8 Rating from 50,000+ Reviews</p>
          <h3 className="text-3xl font-bold mb-3">Join Our Success Stories</h3>
          <p className="text-blue-100 mb-6">Start your transformation journey today</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-10 rounded-lg hover:bg-blue-50 transition cursor-pointer">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  )
}
