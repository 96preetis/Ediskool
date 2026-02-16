import { useState } from 'react'

export default function FAQ() {
  const [expandedIdx, setExpandedIdx] = useState(null)

  const faqs = [
    {
      question: 'Do I need any prior experience to enroll?',
      answer: 'No! Our courses are designed for beginners as well as experienced professionals. Each course has prerequisites mentioned. Start from beginner-friendly courses if you\'re new.'
    },
    {
      question: 'Can I download the course videos?',
      answer: 'Yes! With lifetime access, you can download videos for offline viewing on our mobile app. Desktop downloads may have restrictions based on your plan.'
    },
    {
      question: 'What is the refund policy?',
      answer: 'We offer a 14-day, 100% money-back refund guarantee. No questions asked! If you\'re not satisfied, simply request a refund within 14 days of purchase.'
    },
    {
      question: 'How long do I have access to the courses?',
      answer: 'With our lifetime access plan, you have indefinite access to the course materials. You can learn at your own pace and revisit the courses anytime.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes! We offer career support including resume reviews, interview prep, and job board access. Our placement team actively helps students find opportunities.'
    },
    {
      question: 'Is the certificate recognized by employers?',
      answer: 'Our certificates are verified and recognized by major tech companies and employers. They showcase your skills and commitment to continuous learning.'
    },
    {
      question: 'Can I study at my own pace?',
      answer: 'Absolutely! All courses are self-paced. There are no deadlines. Start when you want, progress at your speed, and complete whenever you\'re ready.'
    },
    {
      question: 'What if I have questions while learning?',
      answer: 'You\'ll have access to our community forum, live Q&A sessions with instructors, and direct messaging with mentors. We\'re here to help 24/7.'
    }
  ]

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about Editskool
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <button
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition cursor-pointer"
              >
                <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                <span
                  className={`text-2xl text-blue-600 transition transform ${
                    expandedIdx === idx ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {expandedIdx === idx && (
                <div className="px-6 pb-6 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-blue-100 mb-6">Get in touch with our support team</p>
          <button className="bg-white text-blue-600 font-bold py-2 px-8 rounded-lg hover:bg-blue-50 transition cursor-pointer">
            Connect with Support
          </button>
        </div>
      </div>
    </section>
  )
}
