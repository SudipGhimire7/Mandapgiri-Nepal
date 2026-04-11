import { motion } from 'motion/react';
import { Target, Globe, Heart, Mountain } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#C8102E]/5 opacity-50 blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#1B4D3E]/5 opacity-50 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About <span className="text-[#C8102E]">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Mandapgiri Nepal is a travel and tourism platform dedicated to showcasing the breathtaking beauty, rich culture, and spiritual heritage of Nepal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 text-[#1B4D3E]" style={{ fontFamily: 'var(--font-heading)' }}>
                Who We Are 🌄
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We are passionate explorers who believe Nepal is more than just a destination — it is an experience of a lifetime. From the towering Himalayas to ancient temples and vibrant traditions, we bring Nepal closer to the world.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-[#1B4D3E]" style={{ fontFamily: 'var(--font-heading)' }}>
                Why We Created Mandapgiri Nepal 💡
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Mandapgiri Nepal was created with a simple vision: <br />
                <strong className="text-gray-800 font-semibold mt-2 block border-l-4 border-[#C8102E] pl-4 italic">
                  To make exploring Nepal easier, more meaningful, and more accessible for everyone.
                </strong>
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                We noticed that many travelers struggle to find reliable information, trusted tour options, and authentic experiences in one place.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                So we built Mandapgiri Nepal as a single platform where travelers can:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'Discover top destinations',
                  'Explore curated travel packages',
                  'Learn about Nepal’s culture and heritage',
                  'Plan their journey with confidence'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1B4D3E]/20 to-[#D4AF37]/20 rounded-2xl transform rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Nepal prayer flags in Himalayas"
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[600px] border-4 border-white"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <Target className="w-12 h-12 text-[#C8102E] mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Mission 🎯
            </h3>
            <p className="text-gray-600 mb-6">
              Our mission is to promote Nepal as a world-class travel destination while preserving its cultural and natural heritage. We aim to:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <Globe className="w-6 h-6 text-[#1B4D3E] flex-shrink-0" />
                <span>Inspire people to explore Nepal responsibly</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Mountain className="w-6 h-6 text-[#1B4D3E] flex-shrink-0" />
                <span>Promote sustainable tourism in the Himalayas</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Heart className="w-6 h-6 text-[#1B4D3E] flex-shrink-0" />
                <span>Connect travelers with authentic local experiences</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Target className="w-6 h-6 text-[#1B4D3E] flex-shrink-0" />
                <span>Share Nepal’s beauty with the world</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <Heart className="w-12 h-12 text-[#C8102E] mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Vision ❤️
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become one of the most trusted tourism platforms for Nepal, helping travelers from around the world experience the true soul of the Himalayas.
            </p>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                ✨ Join Us on the Journey
              </h4>
              <p className="text-gray-600 mb-6">
                Whether you're planning a trek to Everest, a peaceful trip to Pokhara, or a cultural tour in Kathmandu — Mandapgiri Nepal is here to guide you every step of the way.
              </p>
              <div className="font-bold text-[#D4AF37] text-lg text-center bg-gray-50 py-4 rounded-lg">
                👉 “Explore the Soul of Nepal”
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
