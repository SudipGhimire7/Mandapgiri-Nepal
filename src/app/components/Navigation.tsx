import { useState, useEffect } from 'react';
import { Menu, X, Mountain, Heart, User as UserIcon, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCurrency, Currency } from '../context/CurrencyContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const { wishlist, setWishlistModalOpen } = useWishlist();
  const { user, setAuthModalOpen, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Destinations', 'Packages', 'About', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Mountain className={`h-8 w-8 ${isScrolled ? 'text-[#C8102E]' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-[#1B4D3E]' : 'text-white'}`} style={{ fontFamily: 'var(--font-heading)' }}>
              Mandapgiri Nepal
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-200 hover:text-[#C8102E] ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className={`bg-transparent border ${isScrolled ? 'border-gray-300 text-gray-700' : 'border-white/50 text-white'} rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-[#C8102E] transition-colors`}
            >
              <option value="NPR" className="text-gray-900">NPR</option>
              <option value="USD" className="text-gray-900">USD</option>
              <option value="EUR" className="text-gray-900">EUR</option>
              <option value="AUD" className="text-gray-900">AUD</option>
            </select>

            <button
              onClick={() => setWishlistModalOpen(true)}
              className={`relative p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/20 text-white'}`}
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#C8102E] text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isScrolled ? 'bg-gray-100' : 'bg-white/20'}`}>
                    <UserIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/20 text-white'}`}
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  isScrolled 
                    ? 'border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-[#C8102E]'
                }`}
              >
                Sign In
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className={`bg-transparent border ${isScrolled ? 'border-gray-300 text-gray-700' : 'border-white/50 text-white'} rounded-md px-2 py-1 outline-none text-sm`}
            >
              <option value="NPR" className="text-gray-900">NPR</option>
              <option value="USD" className="text-gray-900">USD</option>
              <option value="EUR" className="text-gray-900">EUR</option>
              <option value="AUD" className="text-gray-900">AUD</option>
            </select>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <button
                  onClick={() => {
                    setWishlistModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#C8102E]"
                >
                  <Heart className="w-5 h-5" />
                  <span>Wishlist ({wishlist.length})</span>
                </button>
                {user ? (
                  <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="flex items-center gap-2 text-gray-700">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                ) : (
                  <button onClick={() => { setAuthModalOpen(true); setMobileMenuOpen(false); }} className="text-[#C8102E] font-medium">
                    Sign In
                  </button>
                )}
              </div>
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-[#C8102E] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
