import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Contact(): React.ReactElement {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    document.title = "Contact | Baron's Artistry";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Contact Baron's Artistry for bookings, inquiries, or collaborations. We're here to help you capture your story."
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Thank you for reaching out! We’ll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* ===== Hero Section ===== */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/contactus.jpg"
          alt="Contact Baron's Artistry Studio"
          className="absolute inset-0 w-full h-full object-cover object-center sm:object-[center_top]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40"></div>
     </section>


      {/* ===== Contact Section ===== */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid lg:grid-cols-2 gap-16">
        {/* Left Side - Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            At <strong>Baron&apos;s Artistry</strong>, we value meaningful
            connections and authentic moments. Reach out to us for inquiries,
            bookings, or collaborations we&apos;ll respond as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:baronsartistry@gmail.com"
                  className="text-gray-700 hover:underline"
                >
                  baronsartistry@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a
                  href="tel:+2348129293539"
                  className="text-gray-700 hover:underline"
                >
                  +234 812 929 3539
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold">Studio</h4>
                <p className="text-gray-700">
                  19 Old Otukpo Rd, opposite Old School, Makurdi, Nigeria. Available for travel & bookings
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold">Instagram</h4>
                <a
                  href="https://www.instagram.com/baron_artistry/?igsh=aXNkb2NnamRncTlx&utm_source=qr#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:underline"
                >
                  @baron_artistry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
