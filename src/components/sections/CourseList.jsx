import { Star } from 'lucide-react'

export default function CourseList() {
  const courses = [
    {
      id: 1,
      title: 'Web Development Mastery',
      category: 'Web Development',
      instructor: 'John Developer',
      rating: 4.8,
      students: 12500,
      price: '₹4,999',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&h=200&fit=crop',
      features: ['30 Hours', 'Lifetime Access', 'Certificate']
    },
    {
      id: 2,
      title: 'React & Next.js Advanced',
      category: 'Frontend',
      instructor: 'Sarah Code',
      rating: 4.9,
      students: 9800,
      price: '₹5,999',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop',
      features: ['25 Hours', 'Lifetime Access', 'Certificate']
    },
    {
      id: 3,
      title: 'Backend Development with Node.js',
      category: 'Backend',
      instructor: 'Mike Backend',
      rating: 4.7,
      students: 8200,
      price: '₹5,499',
      image: 'https://images.unsplash.com/photo-1542309503-a966c46bbd33?w=300&h=200&fit=crop',
      features: ['28 Hours', 'Lifetime Access', 'Certificate']
    },
    {
      id: 4,
      title: 'Python for Data Science',
      category: 'Data Science',
      instructor: 'Emma Data',
      rating: 4.8,
      students: 15600,
      price: '₹4,499',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop',
      features: ['35 Hours', 'Lifetime Access', 'Certificate']
    },
    {
      id: 5,
      title: 'Mobile App Development',
      category: 'Mobile',
      instructor: 'Alex Mobile',
      rating: 4.6,
      students: 7400,
      price: '₹5,999',
      image: 'https://images.unsplash.com/photo-1507238691301-588d7440c3d6?w=300&h=200&fit=crop',
      features: ['32 Hours', 'Lifetime Access', 'Certificate']
    },
    {
      id: 6,
      title: 'Machine Learning Bootcamp',
      category: 'AI/ML',
      instructor: 'Dr. AI',
      rating: 4.9,
      students: 11200,
      price: '₹7,999',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e67f71?w=300&h=200&fit=crop',
      features: ['40 Hours', 'Lifetime Access', 'Certificate']
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-slate-600">
            Learn from industry experts and elevate your skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden group">
              {/* Course Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.category}
                </div>
              </div>

              {/* Course Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {course.title}
                </h3>

                <p className="text-sm text-slate-600 mb-4">
                  by <span className="font-semibold">{course.instructor}</span>
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {course.rating} ({course.students.toLocaleString()} students)
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {course.price}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition cursor-pointer">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-12 rounded-lg transition cursor-pointer">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  )
}
