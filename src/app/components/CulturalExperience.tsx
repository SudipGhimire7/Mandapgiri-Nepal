import { motion } from 'motion/react';

export function CulturalExperience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1765272792722-32b547665c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMGZlc3RpdmFsJTIwY3VsdHVyZSUyMHByYXllciUyMGZsYWdzfGVufDF8fHx8MTc3NTgyODI5MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cultural Experience"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#1B4D3E' }}>
              Immerse in Nepali Culture
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Experience the rich tapestry of Nepali traditions, from ancient temple rituals to vibrant festivals that have been celebrated for centuries.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#D4AF37]" />
                <div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    Sacred Festivals
                  </h3>
                  <p className="text-gray-600">
                    Witness Dashain, Tihar, and other vibrant celebrations that showcase Nepal's spiritual heritage
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#D4AF37]" />
                <div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    Ancient Temples
                  </h3>
                  <p className="text-gray-600">
                    Explore UNESCO World Heritage sites including Pashupatinath, Boudhanath, and Swayambhunath
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#D4AF37]" />
                <div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    Local Traditions
                  </h3>
                  <p className="text-gray-600">
                    Engage with local communities and learn traditional crafts, music, and culinary practices
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-8 px-8 py-3 bg-[#C8102E] text-white rounded-full hover:bg-[#1B4D3E] transition-colors duration-300">
              Explore Cultural Tours
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
