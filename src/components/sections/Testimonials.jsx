export default function Testimonials() {
  const testimonials = [
    {
      name: 'Vaibhav Sisinty',
      handle: '@vaibhavsisinty',
      text: 'Most of what I do is a skill that I developed through practice, not education. So it was wonderful to contribute to a platform like WebVeda that truly values real-world skills.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop'
    },
    {
      name: 'Raj Shamani',
      handle: '@rajshamani',
      text: 'WebVeda is designed to set you up to win in your personal life and at work. These are all the skills you need to be a top performer and ace life. I can\'t recommend it enough!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop'
    },
    {
      name: 'Niharikaa Kaur',
      handle: '@niharikaakaur',
      text: 'The learning experience has been transformative. Every module is designed with care and attention to detail. Truly ahead of its time.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop'
    },
    {
      name: 'Anabelle Colaco',
      handle: '@anabellecolaco',
      text: 'As a business owner, I know how important it is to be a master of many skills. WebVeda sets you up for exactly that – excellence across the many facets you need in your professional and personal life.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop'
    },
    {
      name: 'Shreya Pattar',
      handle: '@shreyapattar',
      text: 'I believe content creation is entrepreneurship 3.0 and WebVeda will teach you just how to conquer this arena. With the guidance of WebVeda and some hard work on your part, you will absolutely succeed.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop'
    },
    {
      name: 'Chetan Goel',
      handle: '@chetanngoel',
      text: 'As someone who is dedicated to sharing knowledge in a fun and effective way, I really admire what WebVeda has achieved through its courses. Exceptional content and delivery.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop'
    },
    {
      name: 'Sharan Hegde',
      handle: '@financewithsharan',
      text: 'Ankur teaches with clarity, honesty, and transparency. I am sure that their students will learn significantly, grow, and become excellent individuals.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop'
    },
    {
      name: 'Ankur Warikoo',
      handle: '@ankurwarikoo',
      text: 'The best way to learn is through real-world application. WebVeda\'s practical approach to education is exactly what the industry needs.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop'
    }
  ];

  // Split testimonials into 3 columns for vertical marquee
  const col1 = testimonials.filter((_, i) => i % 3 === 0);
  const col2 = testimonials.filter((_, i) => i % 3 === 1);
  const col3 = testimonials.filter((_, i) => i % 3 === 2);

  const TestimonialCard = ({ testimonial }) => (
    <div className="rounded-lg p-6 shadow-md border border-gray-200 min-h-fit" style={{ backgroundColor: '#fef9e7' }}>
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
        "{testimonial.text}"
      </p>
      <div className="h-1 mb-4" style={{ backgroundColor: '#ea580c' }}></div>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
          <p className="text-xs" style={{ color: '#fb923c' }}>{testimonial.handle}</p>
        </div>
      </div>
    </div>
  );

  const MarqueeColumn = ({ items }) => (
    <div className="overflow-hidden h-96 md:h-[600px]">
      <style>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        .marquee-content {
          animation: scroll-up 10s linear infinite;
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-content">
        {/* First pass of items */}
        <div className="space-y-4 pb-4">
          {items.map((testimonial, idx) => (
            <TestimonialCard key={`first-${idx}`} testimonial={testimonial} />
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="space-y-4">
          {items.map((testimonial, idx) => (
            <TestimonialCard key={`second-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="pt-4 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ color: '#ea580c' }}>
            Trusted By Creators
          </h2>
          <p className="text-lg text-black">
            Real success stories from creators who transformed their careers
          </p>
        </div>

        {/* Desktop: 3 Column Marquee */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto" style={{ maxWidth: '1000px' }}>
          <MarqueeColumn items={col1} />
          <MarqueeColumn items={col2} />
          <MarqueeColumn items={col3} />
        </div>

        {/* Mobile: Single Column Marquee */}
        <div className="md:hidden">
          <MarqueeColumn items={testimonials} />
        </div>
      </div>
    </section>
  )
}
