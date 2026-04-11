import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Clock, Activity, Users, Cloud, Star } from 'lucide-react';
import { allPackageDetails } from '../data/packageDetails';

interface PackageModalProps {
  isOpen: boolean;
  packageName: string | null;
  onClose: () => void;
}

export function PackageModal({ isOpen, packageName, onClose }: PackageModalProps) {
  const details = packageName ? allPackageDetails[packageName] : null;
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
          className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-80 shrink-0">
            <img
              src={details.image}
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
                {details.duration}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {details.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 italic hidden sm:block">
                {details.subtitle}
              </p>
            </div>
          </div>

          {/* Content Area */}
          <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <section>
                  <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    Overview
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    {details.overview.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                {/* Highlights */}
                <section>
                  <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    Trip Highlights
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {details.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <Star className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Photo Gallery — shown only for packages with gallery data */}
                {details.gallery && details.gallery.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                      Photo Gallery
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {/* Large primary image */}
                      <motion.div
                        className="col-span-3 sm:col-span-2 row-span-2 rounded-2xl overflow-hidden h-56 sm:h-64"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={details.gallery[0]}
                          alt="Gallery main"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </motion.div>
                      {/* Smaller thumbnails */}
                      {details.gallery.slice(1).map((img, idx) => (
                        <motion.div
                          key={idx}
                          className="col-span-3 sm:col-span-1 rounded-2xl overflow-hidden h-28 sm:h-[7.5rem]"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={img}
                            alt={`Gallery ${idx + 2}`}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Itinerary */}
                <section>
                  <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    Itinerary
                  </h3>
                  <div className="space-y-4">
                    {details.itinerary.map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
                        <div className="shrink-0 w-12 h-12 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center font-bold">
                          D{item.day}
                        </div>
                        <div className="flex items-center">
                          <p className="font-medium text-gray-800">{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar / Trip Outlook */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 sticky top-0">
                  <h3 className="text-xl font-bold text-[#1B4D3E] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                    Trip Outlook
                  </h3>
                  <div className="space-y-5">
                    <div className="flex gap-3">
                      <Activity className="w-6 h-6 text-[#C8102E] shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Trip Mode</p>
                        <p className="text-sm text-gray-600">{details.tripOutlook.tripMode}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Activity className="w-6 h-6 text-[#C8102E] shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Trek Grade</p>
                        <p className="text-sm text-gray-600">{details.tripOutlook.trekGrade}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="w-6 h-6 text-[#C8102E] shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Peak Altitude</p>
                        <p className="text-sm text-gray-600">{details.tripOutlook.highestAltitude}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Users className="w-6 h-6 text-[#C8102E] shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">People & Culture</p>
                        <p className="text-sm text-gray-600">{details.tripOutlook.peopleAndCulture}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="w-6 h-6 text-[#C8102E] shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Duration</p>
                        <p className="text-sm text-gray-600">{details.tripOutlook.trekkingDuration}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Calendar className="w-6 h-6 text-[#C8102E] shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Total Trip</p>
                        <p className="text-sm text-gray-600">{details.tripOutlook.totalTrip}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Cloud className="w-6 h-6 text-[#C8102E] shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Best Season</p>
                        <p className="text-sm text-gray-600">{details.tripOutlook.season}</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-8 px-6 py-3 bg-[#1B4D3E] text-white rounded-xl hover:bg-[#C8102E] transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl">
                    Book This Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
