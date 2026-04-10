import { motion } from 'motion/react';
import { Users, DollarSign, Shield, Route } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Local Guides',
    description: 'Expert guides with deep local knowledge and cultural insights',
  },
  {
    icon: DollarSign,
    title: 'Affordable',
    description: 'Competitive pricing without compromising on quality',
  },
  {
    icon: Shield,
    title: 'Trusted',
    description: 'Licensed and insured with thousands of satisfied travelers',
  },
  {
    icon: Route,
    title: 'Custom Trips',
    description: 'Personalized itineraries tailored to your preferences',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B4D3E] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Your journey to Nepal deserves the best companions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-full mb-4">
                  <Icon className="h-8 w-8 text-[#1B4D3E]" />
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
