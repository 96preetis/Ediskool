import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-lg text-slate-600">
            Have questions? We'd love to hear from you. Contact us through any channel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              {/* Email */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Methods</h3>

                <a
                  href="mailto:support@editskool.com"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:shadow-lg transition group cursor-pointer"
                >
                  <div className="text-3xl">📧</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Email</h4>
                    <p className="text-blue-600 font-semibold group-hover:underline">
                      support@editskool.com
                    </p>
                    <p className="text-sm text-slate-600 mt-2">
                      We respond within 24 hours
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919876543210?text=Hello%20Editskool,%20I%20have%20a%20question"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:shadow-lg transition group cursor-pointer"
                >
                  <div className="text-3xl">💬</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 text-lg mb-1">WhatsApp</h4>
                    <p className="text-green-600 font-semibold group-hover:underline">
                      +91 98765 43210
                    </p>
                    <p className="text-sm text-slate-600 mt-2">
                      Chat with us for instant support
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Address</h4>
                    <p className="text-slate-700">
                      Editskool Learning Center<br/>
                      Bangalore, India
                    </p>
                    <p className="text-sm text-slate-600 mt-2">
                      Available Monday to Friday, 10 AM - 7 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h4 className="font-bold text-slate-900 text-lg mb-4">Business Hours</h4>
                <div className="space-y-2 text-slate-700">
                  <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
