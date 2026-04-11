import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fullName = (form.elements.namedItem('fullName') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const whatsappNumber = '9779845919784';
    const text = `*New Inquiry via Website*
*Name:* ${fullName}
*Email:* ${email}
*Phone:* ${phone || 'Not provided'}

*Message:* 
${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get in <span className="text-[#C8102E]">Touch</span> / Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 h-full"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact Information
            </h3>

            <a href="tel:+9779845919784" className="flex items-start gap-4 group hover:bg-white p-4 rounded-xl transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E] transition-colors duration-300">
                <Phone className="w-5 h-5 text-[#C8102E] group-hover:text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Phone</p>
                <p className="text-gray-900 font-semibold group-hover:text-[#C8102E] transition-colors">+977-9845919784</p>
              </div>
            </a>

            <a href="mailto:info@mandapgirinepal.com" className="flex items-start gap-4 group hover:bg-white p-4 rounded-xl transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E] transition-colors duration-300">
                <Mail className="w-5 h-5 text-[#C8102E] group-hover:text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                <p className="text-gray-900 font-semibold group-hover:text-[#C8102E] transition-colors break-all">info@mandapgirinepal.com</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#C8102E]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                <p className="text-gray-900 font-semibold">Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#C8102E]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Working Hours</p>
                <p className="text-gray-900 font-semibold">9 AM – 6 PM (Daily)</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200">
              <a
                href="https://wa.me/9779845919784"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 rounded-xl font-bold shadow-md hover:bg-[#1DA851] hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
          >
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-4 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-4 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number <span className="text-gray-400 font-normal text-xs ml-1">(Optional but recommended for Nepal users)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+977-9800000000"
                  className="w-full px-4 py-4 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#1B4D3E] hover:bg-[#C8102E] text-white py-4 md:py-4 px-8 rounded-xl font-bold shadow-md transition-all duration-300 active:scale-95 text-lg"
              >
                <Send className="w-5 h-5" />
                Submit via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
