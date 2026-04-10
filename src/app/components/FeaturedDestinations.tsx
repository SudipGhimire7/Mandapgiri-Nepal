import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: 'Kathmandu',
    description: 'Ancient temples and vibrant culture in the heart of Nepal',
    image: 'https://images.unsplash.com/photo-1676873785328-6918536b7096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXRobWFuZHUlMjBuZXBhbCUyMHRlbXBsZXN8ZW58MXx8fHwxNzc1ODI4MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Pokhara',
    description: 'Serene lakes with stunning Himalayan backdrop',
    image: 'https://images.unsplash.com/photo-1647679208171-85d25dcc22c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2toYXJhJTIwbmVwYWwlMjBsYWtlfGVufDF8fHx8MTc3NTgyODI4NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Everest',
    description: 'Trek to the base of the world\'s highest peak',
    image: 'https://images.unsplash.com/photo-1624635833943-6da00429e4bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3VudCUyMGV2ZXJlc3QlMjBoaW1hbGF5YXMlMjBuZXBhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzU4MjgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Chitwan',
    description: 'Wildlife safari in pristine jungle landscapes',
    image: 'https://images.unsplash.com/photo-1751931817996-368c9ee352ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGl0d2FuJTIwbmVwYWwlMjBqdW5nbGV8ZW58MXx8fHwxNzc1ODI4Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#1B4D3E' }}>
            Featured Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the breathtaking beauty and rich culture of Nepal's most iconic locations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4">{destination.description}</p>
                  <button className="flex items-center gap-2 text-sm bg-[#C8102E] px-4 py-2 rounded-full group-hover:bg-[#D4AF37] transition-colors duration-300">
                    Explore <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
