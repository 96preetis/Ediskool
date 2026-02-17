export default function ContactUs() {
  return (
    <section id="contact" className="py-8 px-6 bg-white">
      <div className="max-w-md mx-auto">
        <div className="p-8 rounded-lg" style={{ border: '2px solid #fb923c' }}>
          <div className="text-center">
            <p className="text-slate-600 mb-2">Still have a query? Drop your Questions at our</p>
            <p className="text-slate-900 mb-8">
              Support <span className="font-bold">Email</span> or get in touch on <span className="font-bold">Whatsapp</span>
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="mailto:support@editskool.com"
                className="flex items-center gap-2 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full transition cursor-pointer"
              >
                ✉️ Email Us
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-slate-900 font-semibold rounded-full transition cursor-pointer"
              >
                Whatsapp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
