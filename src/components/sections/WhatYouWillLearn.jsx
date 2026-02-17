
  export default function WhatYouWillLearn() {
  // Course data with hours and topics
  const courses = [
    {
      id: 1,
      name: 'Web Development',
      hours: 120,
      topics: 25
    },
    {
      id: 2,
      name: 'Data Science',
      hours: 100,
      topics: 20
    },
    {
      id: 3,
      name: 'Mobile Development',
      hours: 90,
      topics: 18
    },
    {
      id: 4,
      name: 'UI/UX Design',
      hours: 60,
      topics: 15
    }
  ];

  // Calculate totals
  const totalDuration = courses.reduce((sum, course) => sum + course.hours, 0);
  const totalTopics = courses.reduce((sum, course) => sum + course.topics, 0);
  const totalCourses = courses.length;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12 mt-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-15" style={{ color: '#ea580c' }}>
            What EXACTLY will you Learn
          </h2>

          {/* Stats Section */}
          <div className="inline-block border border-gray-300 rounded-2xl px-20 py-6 bg-white shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-35">
              {/* Stat 1: Duration */}
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                  {totalDuration}
                  <span className="text-2xl">+</span>
                </div>
                <p className="text-lg lg:text-xl text-slate-600 font-medium">
                  Hours
                </p>
              </div>

              {/* Stat 2: Topics */}
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                  {totalTopics}
                  <span className="text-2xl">+</span>
                </div>
                <p className="text-lg lg:text-xl text-slate-600 font-medium">
                  Topics
                </p>
              </div>

              {/* Stat 3: Courses */}
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                  {totalCourses}
                  <span className="text-2xl">+</span>
                </div>
                <p className="text-lg lg:text-xl text-slate-600 font-medium">
                  Courses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
