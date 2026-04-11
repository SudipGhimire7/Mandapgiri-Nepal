import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1731044900377-93da03bf0675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxuZXBhbCUyMGZlc3RpdmFsJTIwY3VsdHVyZSUyMHByYXllciUyMGZsYWdzfGVufDF8fHx8MTc3NTgyODI5MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Prayer flags"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4D3E]/95 to-[#C8102E]/90" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            Start Your Journey Today
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let us craft your perfect Nepali adventure. From mountain peaks to cultural treasures, your dream trip awaits.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1B4D3E] rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-lg"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            Contact Us <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
