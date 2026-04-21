import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { FeaturedDestinations } from './components/FeaturedDestinations';
import { PopularPackages } from './components/PopularPackages';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CulturalExperience } from './components/CulturalExperience';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WeatherWidget } from './components/WeatherWidget';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthModal } from './components/AuthModal';
import { WishlistModal } from './components/WishlistModal';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <AuthProvider>
      <WishlistProvider>
        <div className="min-h-screen bg-white">
          <Navigation />

      <section id="home" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1624635833943-6da00429e4bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3VudCUyMGV2ZXJlc3QlMjBoaW1hbGF5YXMlMjBuZXBhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzU4MjgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Himalayas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1
                className="text-5xl sm:text-6xl md:text-7xl mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
              >
                Explore the Soul of Nepal
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-100"
            >
              Discover culture, adventure, and nature with Mandapgiri Nepal
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#packages"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#C8102E] text-white rounded-full hover:bg-[#D4AF37] transition-colors duration-300 shadow-lg inline-block"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                Explore Packages
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      <WeatherWidget />

      <FeaturedDestinations />
      <PopularPackages />
      <AboutUs />
      <WhyChooseUs />
      <CulturalExperience />
      <CallToAction />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <AuthModal />
      <WishlistModal />
    </div>
      </WishlistProvider>
    </AuthProvider>
  );
}