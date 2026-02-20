import { useState } from 'react'

export default function CourseList() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)

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

  const handleViewCourse = (course) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCourse(null)
  }

  return (
    <section id="courses" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12 mt-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#ea580c' }}>
            Our professional Courses
          </h2>
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
                      onClick={() => handleViewCourse(course)}
                      className="text-white font-bold py-3 px-8 rounded-lg transition cursor-pointer whitespace-nowrap flex-shrink-0 relative z-30 hover:opacity-90"
                      style={{ backgroundColor: '#fb923c' }}
                    >
                      View Details
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

      {/* Modal */}
      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition"
                style={{ color: '#ea580c' }}
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Course Header Info */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-3" style={{ color: '#ea580c' }}>
                  {selectedCourse.title}
                </h2>
                
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎬</span>
                    <div>
                      <p className="text-xs text-gray-600">Module</p>
                      <p className="font-semibold text-gray-800">{selectedCourse.module}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📚</span>
                    <div>
                      <p className="text-xs text-gray-600">Classes</p>
                      <p className="font-semibold text-gray-800">{selectedCourse.classes}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">⏱</span>
                    <div>
                      <p className="text-xs text-gray-600">Duration</p>
                      <p className="font-semibold text-gray-800">{selectedCourse.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    <div>
                      <p className="text-xs text-gray-600">Topics</p>
                      <p className="font-semibold text-gray-800">{selectedCourse.topics}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1f2937' }}>
                  About This Course
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              {/* Course Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-4 rounded-lg" style={{ backgroundColor: '#fef9e7' }}>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Duration</p>
                  <p className="text-lg font-bold" style={{ color: '#ea580c' }}>{selectedCourse.duration} hrs</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Learning Topics</p>
                  <p className="text-lg font-bold" style={{ color: '#ea580c' }}>{selectedCourse.topics} Topics</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Classes</p>
                  <p className="text-lg font-bold" style={{ color: '#ea580c' }}>{selectedCourse.classes}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Ideal For</p>
                  <p className="text-lg font-bold" style={{ color: '#ea580c' }}>All Levels</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={closeModal}
                  className="flex-1 py-3 px-6 rounded-lg font-bold transition border-2"
                  style={{ borderColor: '#ea580c', color: '#ea580c' }}
                >
                  Close
                </button>
                <button
                  className="flex-1 py-3 px-6 rounded-lg font-bold text-white transition hover:opacity-90"
                  style={{ backgroundColor: '#ea580c' }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
