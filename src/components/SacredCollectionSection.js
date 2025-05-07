"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiFileText, FiMusic } from 'react-icons/fi';
import CountUp from 'react-countup';

// Redesigned StatItem component for a sleeker look
const StatItem = ({ icon: Icon, count, label, itemVariants }) => {
  return (
    <motion.div
      // Removed flex-col, items-center, text-center. The inner div now controls layout.
      // The parent grid will handle alignment of StatItems.
      variants={itemVariants}
      className="flex justify-center" // Ensure items within the grid cell are centered if grid cell is wider
    >
      {/* Responsive layout: vertical stack on mobile, horizontal row on sm+ */}
      <div className="flex flex-col items-center text-center space-y-2 sm:flex-row sm:items-center sm:text-left sm:space-y-0 sm:space-x-4">
        <div className="flex-shrink-0">
          {/* Icon: Now primary-blue */}
          <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary-blue" /> 
        </div>
        {/* Text block: Number and Label */}
        <div className="sm:text-left"> {/* Ensure left alignment for text block on sm+ */}
          <CountUp 
            start={0} 
            end={count} 
            duration={2.0} 
            separator=","
            enableScrollSpy
            scrollSpyOnce
          >
            {({ countUpRef }) => (
              <span
                ref={countUpRef}
                // Number: Now slate-700. Centered by parent on mobile, left-aligned in its own block on sm+
                className="block text-3xl sm:text-4xl font-martel font-semibold text-slate-700 mb-0 sm:mb-0.5"
              />
            )}
          </CountUp>
          {/* Label: Remains slate-500. Centered by parent on mobile, left-aligned in its own block on sm+ */}
          <p className="font-inter text-xs sm:text-sm text-slate-500 uppercase tracking-wider">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const SacredCollectionSection = () => {
  const stats = [
    { icon: FiBookOpen, count: 139, label: 'Total Scriptures Available' },
    { icon: FiFileText, count: 111980, label: 'Articles & Commentaries' },
    { icon: FiMusic, count: 20170, label: 'Hymns & Recitations' },
  ];

  const textContentVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3, // Delay after text content animates
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-100">
      <div className="container mx-auto px-6 md:px-8">
        {/* Centered Text Content */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textContentVariants}
        >
          <h2 className="font-martel text-3xl sm:text-4xl md:text-5xl font-bold text-primary-blue mb-2">
            Our Sacred <span className="text-yellow-500">Collection</span> 
          </h2>
          <h3 className="font-martel text-xl sm:text-2xl text-slate-600 mb-4">
            Preserving Timeless Wisdom
          </h3>
          <p className="font-inter text-base sm:text-lg text-slate-500">
            Explore our ever-growing collection of scriptures, articles, and
            hymns—preserving ancient wisdom for generations.
          </p>
        </motion.div>

        {/* Stats Grid - Centered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 sm:gap-y-12 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={statsContainerVariants}
        >
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              count={stat.count}
              label={stat.label}
              itemVariants={statItemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SacredCollectionSection;
