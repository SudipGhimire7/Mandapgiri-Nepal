import { motion } from 'motion/react';
import { Clock, DollarSign, Star } from 'lucide-react';
import { useRef } from 'react';

const packages = [
  {
    title: 'Everest Base Camp Trek',
    price: 1299,
    duration: '14 days',
    rating: 4.9,
    highlights: ['Professional Guide', 'Mountain Views', 'Local Culture'],
    image: 'https://images.unsplash.com/photo-1601062224947-3ca636754fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGV2ZXJlc3QlMjBoaW1hbGF5YXMlMjBuZXBhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzU4MjgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Kathmandu Valley Tour',
    price: 399,
    duration: '5 days',
    rating: 4.8,
    highlights: ['Temple Visits', 'Cultural Sites', 'Local Cuisine'],
    image: 'https://images.unsplash.com/photo-1590580808179-c0d0b572d3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxrYXRobWFuZHUlMjBuZXBhbCUyMHRlbXBsZXN8ZW58MXx8fHwxNzc1ODI4MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Annapurna Circuit',
    price: 1099,
    duration: '12 days',
    rating: 4.9,
    highlights: ['Mountain Pass', 'Diverse Landscapes', 'Tea Houses'],
    image: 'https://images.unsplash.com/photo-1580424917967-a8867a6e676e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb3VudCUyMGV2ZXJlc3QlMjBoaW1hbGF5YXMlMjBuZXBhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzU4MjgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Chitwan Safari Adventure',
    price: 599,
    duration: '4 days',
    rating: 4.7,
    highlights: ['Wildlife Safari', 'Elephant Ride', 'Jungle Walk'],
    image: 'https://images.unsplash.com/photo-1643114638231-741d6c6bdb7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Y2hpdHdhbiUyMG5lcGFsJTIwanVuZ2xlfGVufDF8fHx8MTc3NTgyODI4NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Pokhara Paradise',
    price: 499,
    duration: '6 days',
    rating: 4.8,
    highlights: ['Lake Boating', 'Paragliding', 'Peace Pagoda'],
    image: 'https://images.unsplash.com/photo-1671210528714-9eb963f279df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwb2toYXJhJTIwbmVwYWwlMjBsYWtlfGVufDF8fHx8MTc3NTgyODI4NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function PopularPackages() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#1B4D3E' }}>
            Popular Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated adventures designed for unforgettable experiences
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="flex-shrink-0 w-80 snap-center bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-[#D4AF37]">
                      <Star className="h-4 w-4 fill-current" />
                      {pkg.rating}
                    </span>
                  </div>
                  <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    {pkg.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-1 text-2xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#C8102E' }}>
                      <DollarSign className="h-6 w-6" />
                      {pkg.price}
                    </div>
                    <button className="px-4 py-2 bg-[#1B4D3E] text-white rounded-full hover:bg-[#C8102E] transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
