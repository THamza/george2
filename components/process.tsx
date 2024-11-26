'use client';

import { motion } from 'framer-motion';
import { Upload, Search, Palette, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-6 h-6" />,
    title: 'Submit Your Work',
    description: 'Artists upload their portfolio and details through our simple submission process.',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Curation Process',
    description: 'Our expert team reviews submissions to ensure quality and authenticity.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Designer Matching',
    description: 'Approved artworks are matched with designers based on style and requirements.',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Successful Placement',
    description: 'Artists and designers collaborate to create perfect spaces.',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process connects artists with designers efficiently and professionally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform -translate-x-8">
                  <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-blue-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}