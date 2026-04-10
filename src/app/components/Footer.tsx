import { Mountain, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1B4D3E] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-[#D4AF37]" />
              <span className="text-xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Mandapgiri Nepal
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted companion for authentic Nepali adventures since 2010.
            </p>
          </div>

          <div>
            <h3 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#destinations" className="hover:text-[#D4AF37] transition-colors">Destinations</a></li>
              <li><a href="#packages" className="hover:text-[#D4AF37] transition-colors">Packages</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Thamel, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+977 1-4123456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@mandapgirinepal.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-sm text-gray-300">
          <p>&copy; 2026 Mandapgiri Nepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
