"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  InformationCircleIcon,
  SparklesIcon,
  BookOpenIcon,
  ComputerDesktopIcon, // Placeholder for Library Icon if needed
  ArrowRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'; // Using outline for consistency
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

// Placeholder Data - Replace with actual enhanced copy
const scriptureData = [
  {
    id: 'overview',
    tabTitle: 'Overview',
    contentIcon: MagnifyingGlassIcon,
    contentTitle: 'Begin Your Exploration',
    description: 'Discover the vast landscape of sacred knowledge, from foundational texts to practical applications. Understand the structure and significance of these ancient teachings.',
    buttonText: 'Start Exploring',
    buttonLink: '/scriptures/overview',
    imageSrc: '/app.svg', // Assuming in /public
    imageAlt: 'Svarupa application interface showing scripture overview'
  },
  {
    id: 'sruti',
    tabTitle: 'Sruti',
    contentIcon: SparklesIcon,
    contentTitle: 'Sruti: Wisdom Revealed',
    description: 'Delve into Sruti, the divinely revealed wisdom including the Vedas and Upanishads. These eternal truths were transmitted through sages and preserved in their purest form.',
    buttonText: 'Discover Sruti Teachings',
    buttonLink: '/scriptures/sruti',
    imageSrc: '/app.svg', // Assuming in /public
    imageAlt: 'Svarupa application interface focusing on Sruti scriptures'
  },
  {
    id: 'smriti',
    tabTitle: 'Smriti',
    contentIcon: BookOpenIcon,
    contentTitle: 'Smriti: Wisdom Remembered',
    description: 'Explore Smriti, the remembered knowledge encompassing epics like the Ramayana and Mahabharata, Puranas, and Dharmashastras. These texts illustrate eternal principles through stories and laws.',
    buttonText: 'Learn About Smriti',
    buttonLink: '/scriptures/smriti',
    imageSrc: '/app.svg', // Assuming in /public
    imageAlt: 'Svarupa application interface highlighting Smriti texts'
  },
  {
    id: 'library',
    tabTitle: 'Library',
    contentIcon: ComputerDesktopIcon, // Placeholder/Example Icon
    contentTitle: 'Access the Digital Library',
    description: 'Browse our growing digital library. Search, read, and engage with a comprehensive collection of scriptures, commentaries, and related scholarly works in one accessible platform.',
    buttonText: 'Enter the Library',
    buttonLink: '/library',
    imageSrc: '/library.svg',
    imageAlt: 'Svarupa digital library interface'
  }
];

const ScriptureExplorerSection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true, // Animate only once
    });
  }, []);

  const activeTabData = scriptureData[activeTabIndex];
  const ContentIcon = activeTabData.contentIcon; // Assign icon component to a variable

  return (
    <section 
      className="relative py-16 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/yellow-bg.png')" }} // Assuming in /public
    >
      {/* Optional subtle overlay if needed for text contrast */}
      {/* <div className="absolute inset-0 bg-yellow-500/10"></div> */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with AOS */}
        <div 
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          data-aos="fade-up" // Add AOS to the container
        >
          <h2 
            className="text-3xl md:text-4xl font-bold font-martel text-primary-blue mb-4"
            data-aos="fade-up"
            data-aos-delay="100" // Stagger delay
          >
            Explore the Depths of Wisdom
          </h2>
          <p 
            className="text-lg text-slate-700 font-inter"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Journey through sacred scriptures and access a growing digital library of timeless knowledge.
          </p>
        </div>

        {/* Horizontal Tab Navigation with AOS */}
        <div 
          className="mb-10 md:mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <ul className="flex justify-center space-x-4 sm:space-x-8 border-b border-amber-600/30 pb-px">
            {scriptureData.map((tab, index) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTabIndex(index)}
                  className={`py-3 px-2 sm:px-4 font-martel transition-all duration-200 ease-in-out focus:outline-none relative ${ 
                    activeTabIndex === index
                      ? 'text-primary-blue font-bold text-base sm:text-lg' // Active tab: bolder and larger text
                      : 'text-amber-900/70 hover:text-primary-blue/90 font-semibold text-sm sm:text-base' // Inactive: normal size
                  }`}
                >
                  {tab.tabTitle}
                  {activeTabIndex === index && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-blue" // Active tab underline
                      layoutId="underline"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area - Add AOS wrapper here */}
        <div 
          className="mt-10 md:mt-12" 
          data-aos="fade-up" 
          data-aos-delay="500"
        >
          {/* Reinstated mode="wait" */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTabData.id} // Key change triggers animation
              initial={{ opacity: 0 }} // Only opacity
              animate={{ opacity: 1 }} // Only opacity
              exit={{ opacity: 0 }}    // Only opacity
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              // Reduced blur, watch text contrast closely
              className="max-w-6xl mx-auto bg-white/15 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden p-6 md:p-10"
            >
              <div className="md:flex md:items-center md:space-x-8 lg:space-x-12">
                {/* Text Column: Centered mobile, left-aligned md+ */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 mb-8 md:mb-0">
                  {/* Icon and Title Row */}
                  <div className="flex items-center mb-4">
                    {ContentIcon && 
                      <ContentIcon className="w-6 h-6 md:w-7 md:h-7 text-primary-blue mr-3 flex-shrink-0" /> // Slightly smaller icon on mobile
                    }
                    {/* Responsive Title Size */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-martel text-primary-blue">
                      {activeTabData.contentTitle}
                    </h3>
                  </div>
                  <p className="text-slate-600 font-inter leading-relaxed mb-6">
                    {activeTabData.description}
                  </p>
                  <Link 
                    href={activeTabData.buttonLink} 
                    className="inline-flex items-center group bg-primary-blue hover:bg-opacity-90 text-white text-sm font-semibold font-martel px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 focus:ring-offset-white transform hover:-translate-y-0.5"
                  >
                    {activeTabData.buttonText}
                    <ArrowRightIcon className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
                {/* Image Column - Added stabilizing container */}
                <div className="md:w-1/2 flex justify-center items-center">
                  {/* Responsive height container */}
                  <div className="relative w-full h-64 md:h-80">
                    <Image 
                      src={activeTabData.imageSrc}
                      alt={activeTabData.imageAlt}
                      layout="fill" // Use fill layout
                      objectFit="contain" // Ensure image scales within container
                      className="object-contain transition-opacity duration-300 ease-in-out" // Add opacity transition
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ScriptureExplorerSection;
