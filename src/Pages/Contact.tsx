import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Back from '../shared/Back';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col items-center backColor min-h-[100vh] pt-[140px] pb-16">
      <Back />
      <section className="w-full max-w-5xl px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-amber-500 text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl">
            لو عندك مشروع، سؤال، أو حابب تتواصل، ابعتلي رسالة وهرجع لك في أقرب وقت ممكن.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1.4fr] gap-6 lg:gap-8">
          {/* Contact Information */}
          <div
            className="backColorCard text-white rounded-2xl p-6 md:p-7 flex flex-col gap-6 shadow-xl border border-gray-800/60"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-500 mb-2">
                Contact Info
              </p>
              <h2 className="text-xl font-semibold mb-2">Let&apos;s work together</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                تقدر تتواصل معايا مباشرة عن طريق الإيميل أو الموبايل، أو استخدم الفورم اللي جنبك.
              </p>
            </div>

            <div className="space-y-5 mt-2">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Email</h4>
                  <p className="text-gray-300 text-sm">abanoubsamir2811@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                  <FaPhone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Phone</h4>
                  <p className="text-gray-300 text-sm">+20127744647</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Location</h4>
                  <p className="text-gray-300 text-sm">Elmataria, Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="backColorCard text-white rounded-2xl p-6 md:p-7 shadow-xl border border-gray-800/60"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-amber-500 mb-4">
              Send Message
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-gray-300 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-800/60 border border-gray-700/80 text-white placeholder-gray-500 text-sm px-3 py-2.5 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-gray-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-800/60 border border-gray-700/80 text-white placeholder-gray-500 text-sm px-3 py-2.5 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 outline-none transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs text-gray-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-gray-800/60 border border-gray-700/80 text-white placeholder-gray-500 text-sm px-3 py-2.5 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-gray-800/60 border border-gray-700/80 text-white placeholder-gray-500 text-sm px-3 py-2.5 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 outline-none transition resize-none"
                  required
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-sm font-medium text-amber-500 border border-amber-500/80 bg-transparent hover:bg-amber-500 hover:text-gray-900 shadow-md shadow-amber-500/10 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact