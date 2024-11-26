'use client';

import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80"
              alt="Art gallery"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-600">
              At Designerist, we believe in the transformative power of art in spaces. Our mission is to create meaningful connections between talented artists and visionary designers, fostering collaborations that bring extraordinary beauty to everyday environments.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Artists</h3>
                <p className="text-gray-600">
                  We provide a platform for artists to showcase their work to a curated network of interior designers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Designers</h3>
                <p className="text-gray-600">
                  We offer access to a carefully curated collection of artworks perfect for any design project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}