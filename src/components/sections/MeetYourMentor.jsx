export default function MeetYourMentor() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#fef9e7' }}>
      <div className="max-w-7xl mx-auto">
        {/* Wrapper at 70% width centered */}
        <div className="w-full lg:w-[70%] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2" style={{ color: '#ea580c' }}>
              Meet Your Instructor
            </h2>
            <p className="text-xl text-slate-700 font-light">
              -Shobhit Gour
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Top Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="rounded-3xl overflow-hidden shadow-xl" style={{ maxWidth: '320px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&h=300&fit=crop"
                    alt="Shobhit Gour"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Bottom Info Boxes */}
              <div className="space-y-3">
                <p className="text-slate-800 font-semibold text-base">
                  Just because of Video Editing,
                </p>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-slate-800 font-bold text-lg flex-shrink-0">→</span>
                    <p className="text-slate-700 text-sm">I have the Freedom to work from anywhere in the World. All I need is a Laptop and Internet connection.</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-800 font-bold text-lg flex-shrink-0">→</span>
                    <p className="text-slate-700 text-sm">I am earning in Dollars while working with International clients, that allows me to live a life the way I wanted while travelling the World.</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-800 font-bold text-lg flex-shrink-0">→</span>
                    <p className="text-slate-700 text-sm">I have been able to reach hundreds of thousands of people just from my own organic content that I edited on Instagram of Editing Skool</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 flex flex-col">
              {/* Top Text Content */}
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                  Learn From Someone Who's Actually Done the Work
                </h3>
                
                <div className="space-y-3">
                  <p className="text-slate-800 text-base">
                    <span className="font-semibold">Shobhit Gour is not just a trainer — he's a working creative.</span>
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    From client edits to brand content, his experience shapes every lesson inside Ediskool.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-md space-y-2" style={{ backgroundColor: '#fed7aa' }}>
                  <p className="text-slate-800 font-semibold text-base">
                    No fake promises.
                    <br />
                    Only practical learning.
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Because skills grow faster when taught by someone who's been there.
                  </p>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="flex justify-center lg:justify-end mt-auto">
                <div className="rounded-3xl overflow-hidden shadow-xl" style={{ maxWidth: '320px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=350&h=300&fit=crop"
                    alt="Mentor lifestyle"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
