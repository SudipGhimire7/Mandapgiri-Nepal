import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, MapPin, Utensils,
  Landmark, Music, Paintbrush, Leaf
} from 'lucide-react';

const highlights = [
  {
    icon: Landmark,
    title: 'Temple & Heritage Visits',
    description: 'Walk through centuries-old temples, palaces, and UNESCO World Heritage sites that breathe living history.',
  },
  {
    icon: Music,
    title: 'Local Festivals & Traditions',
    description: 'Witness Dashain, Tihar, Indra Jatra and other vibrant celebrations unique to Nepal.',
  },
  {
    icon: Leaf,
    title: 'Spiritual & Meditation Experiences',
    description: 'Find inner peace through guided meditation sessions at ancient monasteries and sacred sites.',
  },
  {
    icon: Utensils,
    title: 'Traditional Nepali Food Experience',
    description: 'Savor authentic Dal Bhat, Momo, and Newari feasts in local homes and traditional restaurants.',
  },
  {
    icon: MapPin,
    title: 'Ancient Newari Culture Walk',
    description: 'Stroll through maze-like Newari courtyards, hidden shrines, and centuries-old merchant streets.',
  },
  {
    icon: Paintbrush,
    title: 'Handicrafts & Local Art Workshops',
    description: 'Get hands-on with Thangka painting, Dhaka weaving, and traditional wood carving workshops.',
  },
];

const destinations = [
  {
    name: 'Kathmandu Durbar Square',
    image: 'https://i.pinimg.com/1200x/93/11/ca/9311cab34100a602e9ba039476dfac40.jpg',
    description: 'The vibrant heart of Kathmandu — a royal plaza adorned with stunning palaces, temples, and intricately carved courtyards that tell the story of ancient Nepal.',
  },
  {
    name: 'Bhaktapur Durbar Square',
    image: 'https://i.pinimg.com/736x/77/35/be/7735beacc24d7926da0c6747afa39156.jpg',
    description: 'A UNESCO treasure trove of medieval Newari art and architecture — famous for the 55-Window Palace, pottery squares, and the famous Bhaktapur curd (Juju Dhau).',
  },
  {
    name: 'Patan Durbar Square',
    image: 'https://i.pinimg.com/736x/f8/8f/dd/f88fdda5ff8241bb3967c942169fa6d1.jpg',
    description: 'Known as "The City of Fine Arts," Patan dazzles with its ancient courtyards, metalwork artisans, and the beautiful Krishna Mandir temple.',
  },
  {
    name: 'Swayambhunath Stupa',
    image: 'https://i.pinimg.com/1200x/46/a1/e3/46a1e38e42340c4d164f4a2e9866d960.jpg',
    description: 'The ancient "Monkey Temple" atop a hill west of Kathmandu offers panoramic city views and a spiritual atmosphere shared by both Hindus and Buddhists.',
  },
  {
    name: 'Boudhanath Stupa',
    image: 'https://images.unsplash.com/photo-1765272792722-32b547665c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMGZlc3RpdmFsJTIwY3VsdHVyZSUyMHByYXllciUyMGZsYWdzfGVufDF8fHx8MTc3NTgyODI5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'One of the largest spherical stupas in the world, Boudhanath is the focal point of Tibetan Buddhism in Nepal, surrounded by monasteries and the smoky fragrance of incense.',
  },
  {
    name: 'Pashupatinath Temple',
    image: 'https://i.pinimg.com/736x/f1/e3/dd/f1e3dd656855e943ea89ba101c839cd5.jpg',
    description: 'One of the most sacred Hindu temples of Nepal, dedicated to Lord Shiva, located on the banks of the Bagmati River where ancient holy rituals continuously take place.',
  },
  {
    name: 'Lumbini Sacred Garden',
    image: 'https://i.pinimg.com/1200x/e8/41/1c/e8411c38887df2fef80a4461337d625e.jpg',
    description: 'The birthplace of Lord Buddha, a profound spiritual center featuring the Mayadevi Temple, the ancient Ashoka Pillar, and beautiful monasteries built by nations worldwide.',
  },
];

interface CulturalToursModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CulturalToursModal({ isOpen, onClose }: CulturalToursModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 24 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* ─── Hero Section ─── */}
          <div className="relative h-72 sm:h-80 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1765272792722-32b547665c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMGZlc3RpdmFsJTIwY3VsdHVyZSUyMHByYXllciUyMGZsYWdzfGVufDF8fHx8MTc3NTgyODI5MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nepal Cultural Heritage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Hero Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
              <span className="inline-block px-3 py-1 bg-[#C8102E] rounded-full text-sm font-semibold mb-4">
                Cultural Tours
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Discover Nepal's Living Culture
              </h2>
            </div>
          </div>

          {/* ─── Scrollable Content ─── */}
          <div className="overflow-y-auto custom-scrollbar">

            {/* ─── Tour Highlights ─── */}
            <section className="p-6 sm:p-10">
              <h3
                className="text-2xl font-bold text-[#1B4D3E] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Tour Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07 }}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-[#1B4D3E]" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ─── Popular Destinations ─── */}
            <section className="px-6 sm:px-10 pb-10">
              <h3
                className="text-2xl font-bold text-[#1B4D3E] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Popular Cultural Destinations
              </h3>
              <div className="space-y-4">
                {destinations.map((dest, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="flex gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300 group"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-[#C8102E]" />
                        <h4 className="font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                          {dest.name}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{dest.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
