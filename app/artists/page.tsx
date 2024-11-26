'use client';

import { motion } from 'framer-motion';
import { Palette, Upload, Award, Users } from 'lucide-react';

export default function ArtistsPage() {
  return (
    <div className="pt-16">
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80"
            alt="Artist studio"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">For Artists</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Showcase your artwork to a curated network of interior designers and create meaningful connections.
            </p>
            <motion.a
              href="https://forms.google.com/artist-submission"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Your Portfolio
              <Upload className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Curated Platform</h3>
              <p className="text-gray-600">
                Join a selective community of artists dedicated to creating exceptional spaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Designer Network</h3>
              <p className="text-gray-600">
                Connect with top interior designers looking for unique artworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Growth</h3>
              <p className="text-gray-600">
                Expand your reach and grow your artistic career with meaningful opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}