'use client';

import { useEffect, useRef, useState } from 'react';

const items = [
  {
    id: 'step-1',
    title: 'Learn & Discover',
    content: 'Training and programs for educators and seekers. Our structured courses provide a comprehensive foundation in Sanskrit wisdom traditions, with modern applications for personal growth and spiritual development.'
  },
  {
    id: 'step-2',
    title: 'Questions & Answers',
    content: 'Find answers to your questions about ancient practices and their relevance today. Our knowledge base combines scholarly insights with practical guidance for integrating timeless wisdom into contemporary life.'
  },
  {
    id: 'step-3',
    title: 'Community & Connection',
    content: 'Join a global community of like-minded individuals exploring the intersection of ancient wisdom and modern living. Participate in discussions, events, and collaborative learning experiences.'
  },
  {
    id: 'step-4',
    title: 'Resources & Tools',
    content: 'Access a curated collection of resources including guided meditations, reference materials, and interactive tools designed to deepen your understanding and practice of spiritual principles.'
  },
  {
    id: 'step-5',
    title: 'Practice & Application',
    content: 'Transform knowledge into lived experience through daily practices, exercises, and reflection prompts that help you embody the teachings in your everyday life.'
  },
  {
    id: 'step-6',
    title: 'Support & Guidance',
    content: 'Receive personalized guidance from experienced teachers and mentors who can help you navigate your unique spiritual journey with clarity and confidence.'
  }
];

const ScrollSpySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const indicatorRef = useRef(null);
  const railRef = useRef(null);
  
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Consider element in view when it's in the middle 50% of viewport
        threshold: 0
      }
    );
    
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  useEffect(() => {
    if (indicatorRef.current && railRef.current && itemRefs.current[activeIndex]) {
      const itemHeight = itemRefs.current[activeIndex].offsetHeight;
      const itemTop = itemRefs.current[activeIndex].offsetTop;
      const railTop = railRef.current.offsetTop;
      
      // Position the indicator at the top of the active item, relative to the rail
      indicatorRef.current.style.height = `${itemHeight}px`;
      indicatorRef.current.style.transform = `translateY(${itemTop - railTop}px)`;
    }
  }, [activeIndex]);
  
  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block">
            <span className="text-xs font-medium tracking-widest uppercase text-primary-blue">Our Approach</span>
            <div className="h-0.5 w-full bg-primary-blue/80 mt-1"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-martel text-slate-800 mt-6 mb-4">
            Your Journey With Svarupa
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Explore the many ways we support your spiritual growth and development.
          </p>
        </div>
        
        <div className="relative flex">
          {/* Sticky Indicator Column - Hidden on mobile, visible on lg screens */}
          <div className="hidden lg:flex flex-col items-center mr-8 relative">
            <div ref={railRef} className="w-1 bg-slate-200 h-full rounded-full"></div>
            <div 
              ref={indicatorRef} 
              className="indicator w-1 bg-[#185497] rounded-full absolute top-0 left-0 transition-transform duration-300 ease-out"
              style={{ height: '100px' }}
            ></div>
          </div>
          
          {/* The List of Items */}
          <ul className="flex-1 space-y-12 lg:space-y-16">
            {items.map((item, index) => (
              <li 
                key={item.id} 
                id={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`transition-all duration-300 ${
                  activeIndex === index 
                    ? 'lg:translate-x-0 opacity-100' 
                    : 'lg:-translate-x-2 opacity-70'
                }`}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="lg:pl-2">
                  <h3 className="text-xl font-bold font-martel text-slate-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">
                    {item.content}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScrollSpySection;
