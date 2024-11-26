'use client';

import { motion } from 'framer-motion';
import { Palette, Users2, Sparkles, Clock } from 'lucide-react';

const features = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Curated Collection',
    description: 'Carefully selected artworks from emerging and established artists.',
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: 'Designer Network',
    description: 'Connect with top interior designers for unique opportunities.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Quality Assured',
    description: 'Every piece is verified for authenticity and quality.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Quick Process',
    description: 'Streamlined submission and selection process.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Designerist?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We bridge the gap between exceptional artists and discerning designers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}