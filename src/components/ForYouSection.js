import React from 'react';

const ForYouSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 hero-pattern-dots"></div>
      
      {/* Floating Stars - keeping just a few subtle elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary-gold rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-primary-blue rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
          <p className="font-inter text-sm font-semibold text-primary-blue uppercase tracking-wider" data-aos="fade-up" data-aos-delay="150">
            For You
            <span className="block w-12 h-0.5 bg-primary-gold mx-auto mt-1"></span>
          </p>
          <h2 className="font-martel font-semibold text-3xl sm:text-4xl lg:text-5xl text-slate-800 mt-4 max-w-4xl mx-auto leading-snug" data-aos="fade-up" data-aos-delay="200">
            Help us help you: Utilize our tools designed to aid you
          </h2>
          <p className="font-inter text-base sm:text-lg text-slate-600 leading-relaxed mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="250">
            Your journey matters. Access tools designed to inspire and uplift.
          </p>
        </div>
        
        {/* Modern Wide CTA Card - styled similar to Articles section */}
        <div 
          className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.01] hover:shadow-glow"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Card Background - using blue-bg.png like Articles section with positioning to hide right side */}
          <div className="absolute inset-0 bg-cover bg-left" style={{ backgroundImage: "url('/blue-bg.png')" }}></div>
          
          {/* Gradient overlay to fade out the right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary-blue/80"></div>
          
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 hero-pattern-sanskrit"></div>
          
          <div className="relative p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="text-left mb-8 md:mb-0 md:max-w-xl">
              <h3 className="font-martel font-semibold text-2xl sm:text-3xl text-white">
                2025 Global Harmony Technique
              </h3>
              <p className="font-inter text-base sm:text-lg text-blue-200 mt-3">
                Unlock calmness—master breathwork and connect with a guide.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <button 
                className="font-inter font-semibold text-primary-blue bg-amber-400 
                           px-8 py-4 rounded-lg text-base sm:text-lg 
                           hover:bg-amber-300 transition-all duration-200 
                           shadow-button hover:shadow-button-hover
                           focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 
                           focus:ring-offset-primary-blue transform hover:-translate-y-1"
              >
                Explore & Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
