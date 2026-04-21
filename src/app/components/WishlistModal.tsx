import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Calendar, MapPin } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';

export function WishlistModal() {
  const { wishlist, removeFromWishlist, isWishlistModalOpen, setWishlistModalOpen } = useWishlist();
  const { formatPrice } = useCurrency();

  return (
    <AnimatePresence>
      {isWishlistModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setWishlistModalOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-[51] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-[#1B4D3E] text-white">
              <h2 className="text-xl font-semibold flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Your Wishlist
                <span className="bg-[#C8102E] text-white text-xs px-2 py-0.5 rounded-full">
                  {wishlist.length}
                </span>
              </h2>
              <button
                onClick={() => setWishlistModalOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
              {wishlist.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-gray-300" />
                  </div>
                  <p className="text-lg font-medium">Your wishlist is empty</p>
                  <p className="text-sm mt-1">Start exploring packages to save them here.</p>
                  <button 
                    onClick={() => setWishlistModalOpen(false)}
                    className="mt-6 px-6 py-2 bg-[#1B4D3E] text-white rounded-full hover:bg-[#C8102E] transition-colors"
                  >
                    Explore Now
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {wishlist.map((pkg) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={pkg.id}
                      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex h-28"
                    >
                      <div className="w-28 flex-shrink-0">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 p-4 flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-semibold text-gray-900 leading-tight line-clamp-2">
                            {pkg.title}
                          </h3>
                          <button
                            onClick={() => removeFromWishlist(pkg.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {pkg.duration}
                          </div>
                          <div className="font-bold text-[#C8102E]">
                            {formatPrice(pkg.price)}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {wishlist.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-white">
                <button className="w-full py-3 bg-[#C8102E] text-white rounded-xl font-medium hover:bg-[#A00D24] transition-colors shadow-sm">
                  Book All Selected
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
