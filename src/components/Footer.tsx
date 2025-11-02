import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 relative shadow-md">
      <div className="px-2 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Tagline */}
        <div className="flex flex-col gap-4">
          <img
            src="/assets/logo.jpeg"
            alt="Baron's Artistry Photography"
            className="h-12 w-auto object-contain rounded-lg"
          />
          <p className="text-gray-400 max-w-xs">
            Enhance Your Brand Potential With Baron&apos;s Artistry Photography. Capturing your vision with creativity and excellence.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://m.facebook.com/@ba.ron.701335/?ref=waios.wa_vpl_m2_vf_app&wtsid=rdr_0WeYcE5w16Imra7kQ&hr=1" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/baron_artistry?igsh=aXNkb2NnamRncTlx&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          {['Home', 'About', 'Portfolio', 'Contact'].map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="text-gray-400 hover:text-amber-500 transition"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-white mb-3">Services</h4>
          {['Photography', 'Photo Editing', 'Branding & Identity', 'Event Coverage'].map((service) => (
            <span key={service} className="text-gray-400 hover:text-amber-500 transition cursor-pointer">
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Baron&apos;s Artistry Photography. All rights reserved.
      </div>
      <div className='text-center pb-2 text-gray-600 text-sm'>
        Developed by Uhana Silvester.
      </div>
    </footer>
  );
};

export default Footer;
