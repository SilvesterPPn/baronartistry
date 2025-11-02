import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Consultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //  replace this with actual API call or email integration
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="consultation" className="py-24 bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-4 text-center"
        >
          Book a Consultation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 mb-12 text-center"
        >
          Fill out the form below, and our team will get back to you to schedule your consultation.
        </motion.p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md text-center">
            Thank you! Your consultation request has been submitted.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col gap-6 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
            >
              <option value="">Select Service</option>
              <option value="Photography">Photography</option>
              <option value="Photo Editing">Photo Editing</option>
              <option value="Branding & Identity">Branding & Identity</option>
              <option value="Event Coverage">Event Coverage</option>
            </select>
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={5}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition resize-none"
          />

          <button
            type="submit"
            className="bg-amber-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-amber-600 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Consultation;
