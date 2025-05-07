'use client';

import Image from 'next/image';
import Link from 'next/link';

const MobileAppCTA = () => {

  return (
    <section className="relative overflow-hidden bg-gradient-radial from-primary-gold/10 via-white/95 to-white py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-pattern-sanskrit opacity-5"></div>
      
      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Mobile Illustration */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div 
              data-aos="fade-right"
              data-aos-delay="450"
              className="relative -ml-0 lg:-ml-5 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-radial from-primary-gold/20 via-primary-gold/5 to-transparent blur-xl"></div>
              <Image
                src="/mobile.svg"
                alt="Svarupa Mobile App"
                width={500}
                height={600}
                className="relative rounded-xl z-10 drop-shadow-xl"
              />
            </div>
          </div>
          
          {/* Right Column - Text and CTAs */}
          <div className="flex flex-col space-y-8 order-1 lg:order-2">
            {/* Headline */}
            <h2 
              data-aos="fade-up"
              data-aos-delay="0"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-martel leading-tight tracking-tight text-center lg:text-left relative"
            >
              <span className="relative z-10">Take Svarupa With You—</span>
              <br />
              <span className="relative z-10">Anytime, Anywhere</span>
              <div className="absolute -z-10 inset-0 bg-gradient-radial from-primary-gold/20 via-primary-gold/5 to-transparent blur-xl"></div>
            </h2>
            
            {/* Body Copy */}
            <div data-aos="fade-up" data-aos-delay="150" className="space-y-3 text-center lg:text-left">
              <p className="text-base text-slate-700 leading-relaxed">
                Access Articles, Scriptures & personalized insights wherever you are.
              </p>
              <p className="text-base font-medium text-[#52729D]">
                Your spiritual companion—always at hand.
              </p>
            </div>
            
            {/* App Store Buttons */}
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link 
                href="https://apps.apple.com" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#185497] rounded-lg bg-white text-[#185497] hover:bg-[#185497] hover:text-white transition-all duration-300 ease-out hover:shadow-md"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </Link>
              
              <Link 
                href="https://play.google.com" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#185497] rounded-lg bg-white text-[#185497] hover:bg-[#185497] hover:text-white transition-all duration-300 ease-out hover:shadow-md"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppCTA;
