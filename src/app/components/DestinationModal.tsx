import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Clock, Star, MessageCircle, Navigation, AlertTriangle } from 'lucide-react';
import { destinationDetails } from '../data/destinationDetails';

interface DestinationModalProps {
  isOpen: boolean;
  destinationName: string | null;
  image: string;
  onClose: () => void;
}

export function DestinationModal({ isOpen, destinationName, image, onClose }: DestinationModalProps) {
  const details = destinationName ? destinationDetails[destinationName] : null;
  if (!isOpen || !details) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 shrink-0">
            <img
              src={image}
              alt={details.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <span className="inline-block px-3 py-1 bg-[#C8102E] rounded-full text-sm font-semibold mb-3">
                {details.name}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {details.title}
              </h2>
            </div>
          </div>

          {/* Content Area */}
          <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
            <div className="space-y-8">
                {/* Overview */}
                <section>
                  <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    Overview
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                    <p>{details.overview}</p>
                  </div>
                </section>

                {/* What You'll Experience */}
                <section>
                  <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    What You'll Experience
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {details.experience.map((exp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <Star className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Key Places */}
                <section>
                  <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {details.keyPlacesTitle}
                  </h3>
                  <div className="space-y-3">
                    {details.keyPlaces.map((place, idx) => (
                      <div key={idx} className="flex gap-4 p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors">
                        <MapPin className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
                        <span className="font-medium text-gray-800">{place}</span>
                      </div>
                    ))}
                  </div>
                </section>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
