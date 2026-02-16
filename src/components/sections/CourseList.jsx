export default function CourseList() {
  const courses = [
    {
      id: 1,
      module: 'Module 1-6',
      classes: 28,
      time: '6hr 30mins',
      duration: 6.5,
      topics: 42,
      title: 'Advanced Video Editing & Data Management',
      description: 'Learn cutting edge Video Editing with advanced techniques to manipulate your footage exactly the way you wanted. We\'ll not only teach you techniques like pacing, speed ramping, graphics, a solid timeline flow, working on high end projects, BUT - You\'ll also learn Industry standard Data Management which is essential to become a Pro Editor - All of this will be taught from Scratch, you don\'t need any prior knowledge of Video Editing.',
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      module: 'Module 7-12',
      classes: 24,
      time: '5hr 45mins',
      duration: 5.75,
      topics: 38,
      title: 'Motion Graphics & Effects Mastery',
      description: 'Master the art of motion graphics and visual effects in professional video production. Learn how to create stunning animations, transitions, and effects that will elevate your video projects to the next level. From basic animations to complex compositing, this course covers everything you need to know to become an expert in motion graphics.',
      image: 'https://images.unsplash.com/photo-1598148755637-f1e4f56f0f12?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      module: 'Module 13-18',
      classes: 26,
      time: '6hr 15mins',
      duration: 6.25,
      topics: 40,
      title: 'Color Grading & Colour Theory',
      description: 'Master professional color grading techniques to give your videos a cinematic look. Learn color theory, how to work with different color spaces, and apply professional color grades used in Hollywood productions. Transform ordinary footage into visually stunning content with industry-standard color correction workflows.',
      image: 'https://images.unsplash.com/photo-1574375935520-a4632281ae95?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      module: 'Module 19-24',
      classes: 22,
      time: '5hr 20mins',
      duration: 5.33,
      topics: 35,
      title: 'Sound Design & Audio Mixing',
      description: 'Learn professional audio mixing and sound design for video production. Discover how to create immersive soundscapes, mix dialogue with music and effects, and master the art of audio post-production. Make your videos sound as professional as they look with expert audio techniques.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      module: 'Module 25-30',
      classes: 20,
      time: '4hr 50mins',
      duration: 4.83,
      topics: 32,
      title: 'Project Management & Client Work',
      description: 'Master the business side of video editing. Learn how to manage projects, handle client communications, deliver professional work on time, and build a sustainable editing career. Understand workflows, pricing strategies, and how to scale your editing business.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    }
  ]

  // Calculate stats
  const totalDuration = courses.reduce((sum, course) => sum + course.duration, 0).toFixed(1)
  const totalTopics = courses.reduce((sum, course) => sum + course.topics, 0)
  const totalCourses = courses.length

  const handleViewCourse = (courseId) => {
    // Navigate to class plus course page
    window.location.href = `/courses/${courseId}`
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12 mt-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: '#ea580c' }}>
            What EXACTLY will you Learn
          </h2>

          {/* Stats Section */}
          <div className="inline-block border border-gray-300 rounded-2xl px-12 py-4 bg-white shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
              {/* Stat 1: Duration */}
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {totalDuration}
                  <span className="text-xl">+</span>
                </div>
                <p className="text-xs lg:text-sm text-slate-600 font-medium">
                  Hours
                </p>
              </div>

              {/* Stat 2: Topics */}
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {totalTopics}
                  <span className="text-xl">+</span>
                </div>
                <p className="text-xs lg:text-sm text-slate-600 font-medium">
                  Topics
                </p>
              </div>

              {/* Stat 3: Courses */}
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {totalCourses}
                  <span className="text-xl">+</span>
                </div>
                <p className="text-sm lg:text-base text-slate-600 font-medium">
                  Courses
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section with Sticky Stack Scroll Effect */}
        <div className="mt-16 relative">
          <div className="relative max-w-6xl mx-auto px-4">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="relative"
                style={{
                  position: 'sticky',
                  top: `${100 + index * 10}px`,
                  zIndex: index + 1,
                  marginTop: index === 0 ? '0' : '0px'
                }}
              >
                <div className={`rounded-2xl overflow-visible transition-all duration-500 flex flex-col lg:flex-row items-stretch hover:scale-105 hover:shadow-3xl hover:z-50 ${
                  index % 2 === 0 
                    ? 'shadow-2xl' 
                    : 'shadow-xl'
                }`} style={{
                  background: index % 2 === 0 ? '#fef9e7' : '#fed7aa'
                }}>
                {/* Left Content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between min-w-0 relative z-20">
                  <div>
                    {/* Course & Details */}
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold" style={{ color: index % 2 === 0 ? '#78350f' : '#92400e' }}>🎬</span>
                        <span className="text-sm font-semibold" style={{ color: index % 2 === 0 ? '#78350f' : '#92400e' }}>Course {course.id}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold" style={{ color: index % 2 === 0 ? '#78350f' : '#92400e' }}>●</span>
                        <span className="text-sm font-semibold" style={{ color: index % 2 === 0 ? '#78350f' : '#92400e' }}>{course.classes} Classes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold" style={{ color: index % 2 === 0 ? '#78350f' : '#92400e' }}>⏱</span>
                        <span className="text-sm font-semibold" style={{ color: index % 2 === 0 ? '#78350f' : '#92400e' }}>Time: {course.time}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight" style={{ color: index % 2 === 0 ? '#78350f' : '#1f2937' }}>
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm lg:text-base leading-relaxed mb-4" style={{ color: index % 2 === 0 ? '#78350f' : '#1f2937' }}>
                      {course.description}
                    </p>
                  </div>

                  {/* View Button */}
                  <div className="mt-auto pt-4 border-t-2 flex items-center gap-4" style={{ borderColor: index % 2 === 0 ? '#f59e0b' : '#d97706' }}>
                    <button 
                      onClick={() => handleViewCourse(course.id)}
                      className="text-white font-bold py-3 px-8 rounded-lg transition cursor-pointer whitespace-nowrap flex-shrink-0 relative z-30 hover:opacity-90"
                      style={{ backgroundColor: '#fb923c' }}
                    >
                      View Course
                    </button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-80 h-56 lg:h-auto overflow-hidden flex-shrink-0 p-4 lg:p-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300 rounded-lg"
                  />
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
