'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Users, Info, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 8]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed w-full z-50 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          opacity,
          backdropFilter: `blur(${blur}px)`,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Designerist
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '/artists', icon: <Palette className="w-4 h-4" />, label: 'Artists' },
              { href: '/designers', icon: <Users className="w-4 h-4" />, label: 'Designers' },
              { href: '/about', icon: <Info className="w-4 h-4" />, label: 'About' },
              { href: '/contact', icon: <MessageCircle className="w-4 h-4" />, label: 'Contact' },
            ].map((item) => (
              <NavLink key={item.href} {...item}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-300"
      >
        {icon}
        <span>{children}</span>
      </Link>
    </motion.div>
  );
}