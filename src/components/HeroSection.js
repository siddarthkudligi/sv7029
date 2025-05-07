'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-pattern-dots">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-white via-white/95 to-white/85"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
        {/* Warm yellow radial bloom behind headline */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-gradient-radial from-primary-gold/30 via-primary-gold/10 to-transparent blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center md:items-start space-y-8 lg:space-y-10 text-center md:text-left lg:pr-8 pt-4">
            {/* 1. Main Heading with glow effect (Anchor) */}
            <h1 
              data-aos="fade-up"
              data-aos-delay="0"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-martel leading-tight tracking-tight relative pt-2"
            >
              <span className="text-slate-800 relative z-10">Science of Spirit</span>
              <div className="absolute -z-10 inset-0 bg-gradient-radial from-primary-gold/30 via-primary-gold/10 to-transparent blur-xl"></div>
            </h1>
            
            {/* 2. Sanskrit Quote Panel (Focus) */}
            <div 
              data-aos="fade-up"
              data-aos-delay="150"
              className="relative bg-white/75 backdrop-blur-sm border-l-4 border-primary-gold rounded-xl p-5 shadow-quote"
            >
              <p className="font-martel font-normal italic text-lg md:text-xl text-[#52729D] leading-relaxed">
                Tadā draṣṭuḥ svarūpe avasthānam
              </p>
              <div className="flex items-center mt-2 mb-1">
                <span className="font-inter text-base text-slate-700 leading-relaxed">
                  — Then the true self abides in its own nature.
                </span>
              </div>
              <p className="font-inter text-xs text-slate-400">
                Patanjali, Yoga Sutras 1.3
              </p>
            </div>

            {/* 3. Unified Body + Tagline (Guide) */}
            <div data-aos="fade-up" data-aos-delay="300" className="space-y-4">
              {/* Main Body Copy */}
              <p className="text-base text-slate-700 leading-relaxed max-w-lg">
                At Svarupa, we fuse ancient Sanskrit wisdom with AI-driven insights to guide your self-discovery. Dive into scripture translations, hands-on practices, and research tools built to unlock timeless teachings for your life today.
              </p>
              
              {/* Tagline with slim yellow bar */}
              <div className="pl-4 border-l-2 border-primary-gold">
                <p className="font-medium text-[#52729D]">
                  From the Vedas to your vision—your journey starts now.
                </p>
              </div>
            </div>
            
            {/* 4. Primary CTA Button */}
            <div data-aos="fade-up" data-aos-delay="450">
              <Link 
                href="/get-started" 
                className="inline-flex items-center bg-gradient-to-r from-[#185497] via-[#2D5CB8] to-[#185497] text-white font-semibold px-8 py-4 rounded-full shadow-glow-blue hover:shadow-xl transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 transform hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-[#1A3C78] hover:via-[#2D5CB8] hover:to-[#1A3C78]"
              >
                Get Started
                <ArrowRightIcon className="ml-2.5 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center items-center h-full mt-12 md:mt-0">
            <div className="relative w-full max-w-md lg:max-w-lg flex items-center justify-center">
              <Image
                src="/hero.svg"
                alt="Meditation Illustration"
                width={550}
                height={550}
                data-aos="fade-up"
                data-aos-delay="600"
                className="w-full h-auto object-contain drop-shadow-xl animate-float relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-blue opacity-[0.03]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-primary-gold opacity-[0.03]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
