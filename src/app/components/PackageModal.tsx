import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Clock, Activity, Users, Cloud, Star, Map, TrendingUp, Lock } from 'lucide-react';
import { allPackageDetails } from '../data/packageDetails';
import { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { useAuth } from '../context/AuthContext';
import { MapComponent } from './MapComponent';
import { ElevationProfile } from './ElevationProfile';

interface PackageModalProps {
  isOpen: boolean;
  packageName: string | null;
  onClose: () => void;
}

export function PackageModal({ isOpen, packageName, onClose }: PackageModalProps) {
  const details = packageName ? allPackageDetails[packageName] : null;
  const { formatPrice } = useCurrency();
  const { user, setAuthModalOpen } = useAuth();
  const [travelers, setTravelers] = useState(1);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTravelers(1);
      setBookingDate('');
      setBookingSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen || !details) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

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

                {/* Route Map & Elevation Profile */}
                {(details.mapData || details.elevationData) && (
                  <section>
                    <h3 className="text-2xl font-bold text-[#1B4D3E] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                      Route Map &amp; Elevation
                    </h3>
                    <div className="space-y-5">
                      {details.mapData && (
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Map className="w-5 h-5 text-[#C8102E]" />
                            <h4 className="font-semibold text-gray-800">Interactive Trek Route</h4>
                          </div>
                          <MapComponent mapData={details.mapData} title={details.title} />
                        </div>
                      )}
                      {details.elevationData && (
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp className="w-5 h-5 text-[#C8102E]" />
                            <h4 className="font-semibold text-gray-800">Altitude Climb</h4>
                          </div>
                          <ElevationProfile data={details.elevationData} />
                        </div>
                      )}
                    </div>
                  </section>
                )}
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
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                      Book Your Trip
                    </h4>

                    {/* Auth gate — must be logged in */}
                    {!user ? (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-2xl border border-dashed border-[#C8102E]/40 bg-[#C8102E]/5 p-6 text-center space-y-4"
                      >
                        <div className="flex justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#C8102E]/10 flex items-center justify-center">
                            <Lock className="w-6 h-6 text-[#C8102E]" />
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 mb-1">Sign in to Book</p>
                          <p className="text-sm text-gray-500">
                            You need to be logged in to confirm a booking. It only takes a moment!
                          </p>
                        </div>
                        <button
                          onClick={() => { onClose(); setAuthModalOpen(true); }}
                          className="w-full px-6 py-3 bg-[#C8102E] text-white rounded-xl font-semibold hover:bg-[#a00d24] transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                          Sign In / Register
                        </button>
                      </motion.div>
                    ) : bookingSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 rounded-xl p-4 text-center"
                      >
                        <p className="text-green-800 font-semibold mb-2">Booking Requested!</p>
                        <p className="text-green-600 text-sm">
                          Hi {user.name}, our team will contact you at {user.email} shortly to confirm your dates.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleBooking} className="space-y-4">
                        <div className="flex items-center gap-2 px-3 py-2 bg-green-50 border border-green-200 rounded-lg">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-sm text-green-700 font-medium">Booking as <span className="font-bold">{user.name}</span></p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Departure Date
                          </label>
                          <input
                            type="date"
                            required
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Number of Travelers
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="20"
                            required
                            value={travelers}
                            onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                          />
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-600 font-medium">Total Price:</span>
                          <span className="text-2xl font-bold text-[#C8102E]" style={{ fontFamily: 'var(--font-heading)' }}>
                            {formatPrice(details!.price * travelers)}
                          </span>
                        </div>
                        <button
                          type="submit"
                          className="w-full px-6 py-3 bg-[#1B4D3E] text-white rounded-xl hover:bg-[#C8102E] transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl"
                        >
                          Confirm Booking
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
