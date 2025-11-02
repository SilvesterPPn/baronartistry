import React, { useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import WhoWeAre from "../components/WhoWeAre";

export default function About(): React.ReactElement {
  useEffect(() => {
    document.title = "About | Baron's Artistry";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', "Learn about Baron's Artistry, our team, our story, and our creative approach to photography in Makurdi, Nigeria.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-8 sm:pt-25 pt-20 pb-10 px-4 sm:px-8 lg:px-12">

        {/* Left Sidebar */}
        <aside className="md:col-span-3 lg:col-span-3 order-2 md:order-1">
          <div className="sticky md:top-8 space-y-6">
            {/* Brand */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-md overflow-hidden bg-gray-200">
                <img
                  src="/assets/photo1.jpg"
                  alt="Baron's Artistry"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Baron&apos;s Artistry</h3>
                <p className="text-xs text-gray-500">
                  Professional Photo Studio
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <a href="/contact" className="flex items-center gap-2 font-medium hover:underline">
                <span>Contact Us</span>
                <span aria-hidden>↗</span>
              </a>

              <div className="border-t pt-4 space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <a href="tel:+2348129293539" className="block font-medium">
                    +2348129293539
                  </a>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <a
                    href="mailto:baronsartistry@gmail.com"
                    className="block font-medium"
                  >
                    baronsartistry@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm">Makurdi, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-5 lg:col-span-6 bg-white rounded-lg shadow-sm p-6 sm:p-10 order-1 md:order-2">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              About Us
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Baron&apos;s Artistry is a creative photography company based in Makurdi, Nigeria. We
            specialize in portrait, lifestyle, and event photography, with a focus on storytelling
            and authenticity. Our passion lies in transforming real moments into timeless visual
            art that reflects the heart and personality of every client.
          </p>

          {/* Two-column info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold">Our Goal</h4>
              <p className="text-sm text-gray-600 mt-2">
                We capture real moments that feel like you. We want you to feel comfortable and be
                yourself in front of the camera.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">What to Expect</h4>
              <p className="text-sm text-gray-600 mt-2">
                Friendly guidance, relaxed shoots, and a collaborative approach from concept to
                final images.
              </p>
            </div>
          </div>

          {/* Main image */}
          <div className="rounded-xl overflow-hidden mb-10">
            <img
              src="/assets/aboutus.jpg"
              alt="Baron's Artistry Studio"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>

          {/* Gear list */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Our Gear & Software</h3>
            <ul className="divide-y border rounded-md">
              {[
                { id: "01", title: "Canon EOS R5", meta: "Camera" },
                { id: "02", title: "Canon RF 24-70mm f/2.8L IS USM", meta: "Zoom lens" },
                { id: "03", title: "Sigma 85mm f/1.4 DG HSM Art", meta: "Prime lens" },
                { id: "04", title: "DJI Mavic Air 2", meta: "Drone" },
                { id: "05", title: "Godox AD200 Pro", meta: "Flash" },
                { id: "06", title: "Adobe Lightroom & Photoshop", meta: "Editing software" },
              ].map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between px-6 py-4 flex-wrap"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-xs text-gray-400 w-8">{item.id}</div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.meta}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-600 mt-8">
              At Baron&apos;s Artistry, we don&apos;t just take photos—we craft experiences.
              When we&apos;re not behind the camera, we&apos;re researching creative ideas, scouting
              new locations, and exploring visual storytelling techniques.
            </p>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="md:col-span-8 lg:col-span-3 hidden md:block order-3">
          <div className="sticky top-8 space-y-6">
            <div className="bg-white rounded-lg p-4 shadow-sm text-sm">
              <strong>Instagram</strong>
              <p className="text-xs text-gray-500 mt-2">@baron_artistry</p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm text-sm">
              <strong>Studio</strong>
              <p className="text-xs text-gray-500 mt-2">
                Available for bookings & travel on request
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-8 flex flex-col sm:flex-row gap-6 items-center justify-between text-sm">
          <div className="text-center sm:text-left">
            <h4 className="font-semibold">Let&apos;s work together</h4>
            <p className="text-gray-600">
              Email us at{" "}
              <a href="mailto:baronsartistry@gmail.com" className="font-medium">
                baronsartistry@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:baronsartistry@gmail.com" className="inline-flex items-center gap-2 font-medium">
              <Mail size={16} /> Email
            </a>
            <a href="tel:+2348129293539" className="inline-flex items-center gap-2 font-medium">
              <Phone size={16} /> Call
            </a>
            <a href="#" className="inline-flex items-center gap-2 font-medium">
              <MapPin size={16} /> Visit
            </a>
          </div>
        </div>
      </footer>

      <WhoWeAre />
    </div>
  );
}
