'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const articles = [
  {
    id: 1,
    title: 'Learn',
    subtitle: 'Preparing for Life',
    icon: '/icons/learn.svg',
    description: 'The foundation stage in life&apos;s four-part journey, focused on holistic preparation. This phase centers on acquiring knowledge and developing character—building intellectual understanding while cultivating self-discipline.\n\nIn Svarupa&apos;s &quot;Learn&quot; section, discover practical wisdom about human nature, evolutionary cycles, and emotional intelligence. Our articles provide actionable strategies for managing life&apos;s challenges while establishing the groundwork for a purposeful existence. This crucial interval builds the intellectual and moral foundation necessary for the growth phases that follow.',
    content: 'In Svarupa&apos;s &quot;Learn&quot; section, we explore how timeless wisdom can be applied to contemporary challenges. The ancient texts contain insights that transcend cultural and historical contexts, offering practical guidance for navigating our complex modern world. The Bhagavad Gita, for instance, provides profound teachings on duty, purpose, and right action that remain remarkably relevant today. Through careful study and reflection, these ancient principles become practical tools for everyday decision-making and long-term personal development.',
    image: '/svarupa-logo.svg'
  },
  {
    id: 2,
    title: 'Grow',
    subtitle: 'Expanding Awareness',
    icon: '/icons/grow.svg',
    description: 'Life unfolds through four distinct phases: studentship, household life, introspection, and wisdom manifestation. The second interval, represented in Svarupa&apos;s &quot;Grow&quot; section, is dedicated to experiencing life in its fullest form. This stage focuses on relationships, career development, societal contribution, and financial responsibility. Marriage, in this context, extends beyond partnership—it is a spiritual alliance that fosters companionship and mutual growth.\n\nThis period serves as a testing ground where theoretical knowledge is applied through real-world experiences. Articles in this section guide readers on how to maintain righteous living amidst distractions, balance individual aspirations with societal duties, and navigate human interactions with wisdom. This phase is essential for transforming knowledge into lived wisdom, equipping individuals to transition into deeper introspection in the next stage.',
    content: 'Svarupa&apos;s &quot;Grow&quot; section focuses on the deliberate cultivation of qualities that lead to greater awareness and emotional intelligence. Through guided practices and reflective exercises, we develop the capacity to observe our thoughts and emotions with increasing clarity. This expansion of consciousness allows us to perceive reality more accurately and respond to life with greater wisdom and compassion. The journey of growth involves recognizing our conditioned patterns and consciously choosing more enlightened ways of being. This process unfolds naturally when we remain open to new insights and commit to consistent practice.',
    image: '/svarupa-logo.svg'
  },
  {
    id: 3,
    title: 'Reflect',
    subtitle: 'Inner Examination',
    icon: '/icons/reflect.svg',
    description: 'The third phase of life marks a shift toward introspection and detachment from worldly attachments. Until this stage, life has revolved around personal ambitions, family responsibilities, and professional commitments. Now, individuals begin to redirect their accumulated wisdom toward broader service and self-exploration.\n\nIn Svarupa&apos;s &quot;Reflect&quot; section, articles focus on themes of self-examination, letting go of long-held beliefs, and engaging with philosophical traditions that illuminate life&apos;s deeper meaning. Readers will explore how to refine their responses to challenges, consciously loosen attachments, and cultivate a mindset of altruism that extends beyond family into the larger world. This phase fosters resilience and faith, preparing individuals for the final stage of wisdom embodiment. Through reflection and detachment, one gains the ability to embrace life with a broader perspective, finding fulfillment not in material success but in inner clarity and peace.',
    content: 'In Svarupa&apos;s &quot;Reflect&quot; section, we explore the art of self-inquiry and contemplative practice. By turning our attention inward, we begin to recognize the subtle patterns of thought and behavior that shape our experience. Through consistent contemplative practice, we develop the ability to observe our mental processes with greater objectivity and discernment. This inner examination leads to profound insights about our true nature and helps us align our outer actions with our deepest values. The reflective journey reveals how many of our limitations are self-imposed and opens the door to greater freedom and authenticity in all aspects of life.',
    image: '/svarupa-logo.svg'
  },
  {
    id: 4,
    title: 'Renew',
    subtitle: 'Daily Practices',
    icon: '/icons/renew.svg',
    description: 'The fourth and final phase of life is about integrating accumulated wisdom into daily existence. Unlike earlier stages focused on ambition and duty, this period is about conscious engagement with life, free from attachment to outcomes. It is a time for cultivating balance, peace, and selfless service.\n\nIn Svarupa&apos;s &quot;Renew&quot; section, articles emphasize the importance of simplicity, emotional stability, and the expansion of personal awareness into universal consciousness. Readers will explore topics such as unconditional love, inner freedom, and the transition from self-centered awareness to a state of harmony with all existence.\n\nTransitioning into this phase can be challenging, as it requires letting go of long-held identities and attachments. However, once these barriers are overcome, profound liberation follows. The articles guide individuals in embodying spiritual insights, showing how to become living examples of peace and wisdom. By demonstrating that fulfillment comes from within, this section inspires others to see that a well-lived life is one rooted in clarity, compassion, and tranquility.',
    content: 'The fourth and final phase of life is about integrating accumulated wisdom into daily existence. Unlike earlier stages focused on ambition and duty, this period is about conscious engagement with life, free from attachment to outcomes. It is a time for cultivating balance, peace, and selfless service.\n\nIn Svarupa&apos;s &quot;Renew&quot; section, articles emphasize the importance of simplicity, emotional stability, and the expansion of personal awareness into universal consciousness. Readers will explore topics such as unconditional love, inner freedom, and the transition from self-centered awareness to a state of harmony with all existence.\n\nTransitioning into this phase can be challenging, as it requires letting go of long-held identities and attachments. However, once these barriers are overcome, profound liberation follows. The articles guide individuals in embodying spiritual insights, showing how to become living examples of peace and wisdom. By demonstrating that fulfillment comes from within, this section inspires others to see that a well-lived life is one rooted in clarity, compassion, and tranquility.',
    image: '/svarupa-logo.svg'
  },
  {
    id: 5,
    title: 'Practice',
    subtitle: 'Applied Wisdom',
    icon: '/icons/practice.svg',
    description: 'The process of learning is incomplete without direct application. The Practice section represents a crucial phase in personal development, offering structured exercises that help individuals deepen their understanding of themselves and the world around them. These exercises are designed to bring clarity to natural tendencies, emotional responses, and the challenges that arise in daily life. By engaging in focused practices, individuals gain greater awareness of their inner workings—how the body, mind, and emotions interact—and develop the skills to navigate common disturbances such as anxiety, anger, and distraction. This phase is not just about problem-solving but about cultivating resilience and balance, allowing individuals to move through life with greater ease and self-mastery. In the Svarupa framework, the Practice section serves as a bridge between knowledge and experience, providing practical tools that refine awareness and deepen one&apos;s connection to their own nature.',
    content: 'In Svarupa&apos;s &quot;Practice&quot; section, we explore how spiritual understanding becomes embodied through consistent application. The intellectual grasp of spiritual principles, while valuable, must be complemented by direct experience. Through meditation, service, devotion, and other traditional practices, we gradually integrate higher truths into our being. This applied wisdom manifests as greater equanimity, compassion, and clarity in our daily interactions.\n\nThe path of practice transforms abstract concepts into living realities, allowing us to embody the very qualities we seek to develop. Each practice serves as a laboratory for self-discovery, revealing both our limitations and our untapped potential. Through regular engagement with these time-tested methods, we cultivate the inner conditions necessary for profound transformation and authentic spiritual growth.',
    image: '/svarupa-logo.svg'
  },
  {
    id: 6,
    title: 'Guide',
    subtitle: 'Finding Direction',
    icon: '/icons/guide.svg',
    description: 'Growth is rarely a solitary journey. At various points in life, individuals seek guidance to refine their understanding and approach. The Guide section provides access to resources that support this process, offering pathways to deeper knowledge and self-exploration. Whether through structured courses, scriptural insights, or one-on-one mentorship, this phase helps individuals apply wisdom in a way that is personal and meaningful. In this stage, individuals move beyond theoretical understanding, engaging in guided learning that enhances their ability to integrate wisdom into their daily lives. This section within Svarupa offers tailored support—whether through practice techniques, specialized learning paths, or personal mentorship—ensuring that individuals have access to the tools and resources they need to progress on their journey with clarity and confidence.',
    content: 'In Svarupa&apos;s &quot;Guide&quot; section, we provide orientation for navigating life&apos;s most challenging transitions and decisions. Drawing on the wisdom of established traditions, we discover principles that illuminate our path forward. Whether facing ethical dilemmas, relationship challenges, or existential questions, these guiding principles offer clarity without rigid prescriptions.\n\nThe guidance offered here acknowledges the complexity of modern life while remaining rooted in timeless wisdom. By applying these insights with discernment, we develop greater confidence in our ability to navigate life&apos;s complexities with wisdom and integrity. The articles in this section serve as companions on the journey, offering perspective during difficult times and helping to reveal the deeper meaning and purpose behind our experiences.',
    image: '/svarupa-logo.svg'
  }
];

const PlaceholderIcon = ({ title, size = 'medium' }) => {
  
  const getColor = () => {
    switch (title) {
      case 'Learn': return '#2D5CB8';
      case 'Grow': return '#4A78C5';
      case 'Reflect': return '#185497';
      case 'Renew': return '#1A3C78';
      case 'Practice': return '#7099E0';
      case 'Guide': return '#52729D';
      default: return '#2D5CB8';
    }
  };
  
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-14 h-14'
  };

  return (
    <svg 
      viewBox="0 0 24 24" 
      className={sizeClasses[size]} 
      fill="none" 
      stroke={getColor()} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
        {title === 'Learn' && (
          <>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </>
        )}
        {title === 'Grow' && (
          <>
            <path d="M12 2v8"></path>
            <path d="M12 18v4"></path>
            <path d="M4.93 10.93l2.83 2.83"></path>
            <path d="M16.24 16.24l2.83 2.83"></path>
            <path d="M2 12h4"></path>
            <path d="M18 12h4"></path>
            <path d="M4.93 13.07l2.83-2.83"></path>
            <path d="M16.24 7.76l2.83-2.83"></path>
          </>
        )}
        {title === 'Reflect' && (
          <>
            <path d="M18 6L6 18"></path>
            <path d="M6 6l12 12"></path>
          </>
        )}
        {title === 'Renew' && (
          <>
            <path d="M21 12a9 9 0 0 1-9 9"></path>
            <path d="M3 12a9 9 0 0 1 9-9"></path>
            <path d="M21 12a9 9 0 0 0-9-9"></path>
            <path d="M3 12a9 9 0 0 0 9 9"></path>
            <path d="M12 3v6"></path>
            <path d="M12 21v-6"></path>
          </>
        )}
        {title === 'Practice' && (
          <>
            <path d="M12 2a3 3 0 0 0-3 3v7h6V5a3 3 0 0 0-3-3z"></path>
            <path d="M15 12H9"></path>
            <path d="M9 12v7a3 3 0 0 0 6 0v-7"></path>
          </>
        )}
        {title === 'Guide' && (
          <>
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </>
        )}
      </svg>
  );
};

const ArticleRow = ({ article, index, onExploreClick }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`py-20 ${index > 0 ? 'border-t border-slate-200' : ''}`}>
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}>
        
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50 shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg">
            <Image 
              src={article.image} 
              alt={article.title}
              fill
              className="object-contain p-8"
            />
          </div>
        </div>
        
        
        <div className="w-full lg:w-1/2 space-y-6">
          
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <PlaceholderIcon title={article.title} size="large" />
              <div>
                <h3 className="text-3xl font-bold text-slate-800 font-martel">{article.title}</h3>
                <p className="text-lg text-[#2D5CB8] font-medium">{article.subtitle}</p>
              </div>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-[#FFCC55] to-[#FFD678] rounded-full my-2"></div>
          </div>
          
          
          {article.title === 'Learn' ? (
            <div className="space-y-6">
              
              <p className="text-base text-slate-700 leading-relaxed">
                The first interval of human life serves as the foundation period in a four-stage progression of meaningful existence. This phase prepares individuals holistically for their future roles.
              </p>
              
              
              <div className="grid grid-cols-2 gap-4">
                
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Foundation Period</h4>
                  </div>
                  <p className="text-sm text-slate-600">First stage in a four-part progression of meaningful existence</p>
                </div>
                
                
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Holistic Preparation</h4>
                  </div>
                  <p className="text-sm text-slate-600">Prepares for future roles in profession, family, and society</p>
                </div>
                
                
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Character Development</h4>
                  </div>
                  <p className="text-sm text-slate-600">Cultivates self-restraint, discipline, and moral foundation</p>
                </div>
                
                
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.428 2L6.428 4.586A2 2 0 00.586 6L4 10l6.293 6.293a1 1 0 001.414-1.414l-7-7a1 1 0 010-1.414l7-7a2 2 0 0114 0z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Practical Strategies</h4>
                  </div>
                  <p className="text-sm text-slate-600">Tools for managing life&apos;s challenges and building purpose</p>
                </div>
              </div>
            </div>
          ) : article.title === 'Grow' ? (
            <div className="space-y-6">
              <p className="text-base text-slate-700 leading-relaxed">
                The second interval of life is dedicated to experiencing it in its fullest form, focusing on relationships, career, societal contribution, and financial responsibility.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1: Experiencing Life Fully */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                     <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                     </svg>
                    <h4 className="font-medium text-slate-800">Experiencing Life Fully</h4>
                  </div>
                  <p className="text-sm text-slate-600">Engaging with relationships, career, society, and finances.</p>
                </div>
                {/* Card 2: Spiritual Alliance */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Spiritual Alliance</h4>
                  </div>
                  <p className="text-sm text-slate-600">Marriage as a path for companionship and mutual growth.</p>
                </div>
                {/* Card 3: Applied Knowledge */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Applied Knowledge</h4>
                  </div>
                  <p className="text-sm text-slate-600">Transforming theory into lived wisdom through real-world experience.</p>
                </div>
                {/* Card 4: Balancing Duties */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Balancing Duties</h4>
                  </div>
                  <p className="text-sm text-slate-600">Navigating individual goals and societal responsibilities righteously.</p>
                </div>
              </div>
            </div>
          ) : article.title === 'Reflect' ? (
            <div className="space-y-6">
              <p className="text-base text-slate-700 leading-relaxed">
                The third phase marks a shift toward introspection and detachment from worldly attachments, redirecting accumulated wisdom toward broader service and self-exploration.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1: Shift to Introspection */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Shift to Introspection</h4>
                  </div>
                  <p className="text-sm text-slate-600">Moving focus from external achievements to inner examination.</p>
                </div>
                {/* Card 2: Letting Go */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Letting Go</h4>
                  </div>
                  <p className="text-sm text-slate-600">Consciously loosening attachments to beliefs and outcomes.</p>
                </div>
                {/* Card 3: Seeking Deeper Meaning */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Seeking Deeper Meaning</h4>
                  </div>
                  <p className="text-sm text-slate-600">Engaging with philosophies that illuminate life.</p>
                </div>
                {/* Card 4: Cultivating Altruism */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Cultivating Altruism</h4>
                  </div>
                  <p className="text-sm text-slate-600">Extending service and compassion beyond family to the world.</p>
                </div>
              </div>
            </div>
          ) : article.title === 'Renew' ? (
            <div className="space-y-6">
              <p className="text-base text-slate-700 leading-relaxed">
                The final phase focuses on integrating wisdom into daily life, emphasizing balance, peace, simplicity, and conscious engagement free from attachment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1: Integrating Wisdom */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Integrating Wisdom</h4>
                  </div>
                  <p className="text-sm text-slate-600">Applying accumulated knowledge to daily existence consciously.</p>
                </div>
                {/* Card 2: Simplicity & Stability */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Simplicity & Stability</h4>
                  </div>
                  <p className="text-sm text-slate-600">Finding peace through emotional balance.</p>
                </div>
                {/* Card 3: Expanding Awareness */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.09c.71 0 1.387.22 1.95.631l2.798 1.865a2.5 2.5 0 01-.14 4.314l-2.798 1.865c-.563.375-1.24.631-1.95.631H10.5A2.5 2.5 0 008 20.5V22M17 11h2.945M16 3.935V5.5A2.5 2.5 0 0113.5 8h-.09c-.71 0-1.387.22-1.95.631l-2.798 1.865a2.5 2.5 0 00.14 4.314l2.798 1.865c.563.375 1.24.631 1.95.631H13.5A2.5 2.5 0 0116 20.5V22" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Expanding Awareness</h4>
                  </div>
                  <p className="text-sm text-slate-600">Moving towards universal consciousness.</p>
                </div>
                {/* Card 4: Inner Freedom & Love */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Inner Freedom & Love</h4>
                  </div>
                  <p className="text-sm text-slate-600">Becoming living examples of peace, wisdom, and inner fulfillment.</p>
                </div>
              </div>
            </div>
          ) : article.title === 'Practice' ? (
            <div className="space-y-6">
              <p className="text-base text-slate-700 leading-relaxed">
                This crucial phase offers structured exercises to deepen self-understanding, bringing clarity to tendencies, emotions, and daily challenges.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1: Direct Application */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Direct Application</h4>
                  </div>
                  <p className="text-sm text-slate-600">Moving beyond theory to engage with practical exercises.</p>
                </div>
                {/* Card 2: Deepening Understanding */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Deepening Understanding</h4>
                  </div>
                  <p className="text-sm text-slate-600">Gaining awareness of inner workings: body, mind, emotions.</p>
                </div>
                {/* Card 3: Navigating Challenges */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Navigating Challenges</h4>
                  </div>
                  <p className="text-sm text-slate-600">Developing skills to handle anxiety, anger, and distraction.</p>
                </div>
                {/* Card 4: Bridge Knowledge & Experience */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Bridge Knowledge & Experience</h4>
                  </div>
                  <p className="text-sm text-slate-600">Providing tools to refine awareness and connect to one&apos;s nature.</p>
                </div>
              </div>
            </div>
          ) : article.title === 'Guide' ? (
            <div className="space-y-6">
              <p className="text-base text-slate-700 leading-relaxed">
                This section provides resources and pathways for personalized guidance, supporting deeper knowledge and meaningful application of wisdom.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1: Access Resources */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Access Resources</h4>
                  </div>
                  <p className="text-sm text-slate-600">Connect with structured courses, scriptures, and mentorship.</p>
                </div>
                {/* Card 2: Explore Pathways */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Explore Pathways</h4>
                  </div>
                  <p className="text-sm text-slate-600">Discover routes for deeper self-exploration and knowledge.</p>
                </div>
                {/* Card 3: Personal Application */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Personal Application</h4>
                  </div>
                  <p className="text-sm text-slate-600">Apply wisdom in ways that are personal and meaningful.</p>
                </div>
                {/* Card 4: Tailored Support */}
                <div className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all transition-colors duration-300 hover:border-[#2D5CB8]">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#2D5CB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <h4 className="font-medium text-slate-800">Tailored Support</h4>
                  </div>
                  <p className="text-sm text-slate-600">Receive specific guidance, techniques, or mentorship.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="prose prose-slate max-w-none">
              {article.description.split('\n').map((paragraph, i) => {
                
                let highlightedText = paragraph; 
                
                if (article.title === 'Grow') {
                  highlightedText = highlightedText
                    .replace("personal development", '<span class="font-medium text-[#4A78C5]">personal development</span>')
                    .replace("experiential wisdom", '<span class="font-medium text-[#4A78C5]">experiential wisdom</span>');
                }
                
                if (article.title === 'Reflect') {
                  highlightedText = highlightedText
                    .replace("deep contemplation", '<span class="font-medium text-[#185497]">deep contemplation</span>')
                    .replace("authentic nature", '<span class="font-medium text-[#185497]">authentic nature</span>');
                }
                
                if (article.title === 'Renew') {
                  highlightedText = highlightedText
                    .replace("integrating accumulated wisdom", '<span class="font-medium text-[#1A3C78]">integrating accumulated wisdom</span>')
                    .replace("conscious engagement", '<span class="font-medium text-[#1A3C78]">conscious engagement</span>');
                }
                
                return (
                  <p key={i} className="text-base text-slate-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: highlightedText }}></p>
                );
              })}
            </div>
          )}
            
            
            {article.title === 'Learn' && (
              <div className="my-6 pl-4 border-l-4 border-[#2D5CB8]">
                <p className="italic text-lg text-slate-600 leading-relaxed">
                  &ldquo;This crucial interval builds the intellectual and moral foundation necessary for the growth phases that follow.&rdquo;
                </p>
              </div>
            )}
            
            {article.title === 'Grow' && (
              <div className="my-6 pl-4 border-l-4 border-[#2D5CB8]">
                <p className="italic text-lg text-slate-600 leading-relaxed">
                  &ldquo;This stage transforms intellectual understanding into experiential wisdom.&rdquo;
                </p>
              </div>
            )}
            
            {article.title === 'Reflect' && (
              <div className="my-6 pl-4 border-l-4 border-indigo-500">
                <p className="italic text-lg text-slate-600 leading-relaxed">
                  &ldquo;This stage is about turning inward to recognize unconscious patterns and illuminate the true self.&rdquo;
                </p>
              </div>
            )}
            
            {article.title === 'Renew' && (
              <div className="my-6 pl-4 border-l-4 border-amber-500">
                <p className="italic text-lg text-slate-600 leading-relaxed">
                  &ldquo;This period is about conscious engagement with life, free from attachment to outcomes.&rdquo;
                </p>
              </div>
            )}
            
            {article.title === 'Practice' && (
              <div className="my-6 pl-4 border-l-4 border-purple-500">
                <p className="italic text-lg text-slate-600 leading-relaxed">
                  &ldquo;Practice section serves as a bridge between knowledge and experience, providing practical tools that refine awareness and deepen one&apos;s connection to their own nature.&rdquo;
                </p>
              </div>
            )}
         
          
          <div className="pt-2">
            <button 
              onClick={() => onExploreClick(article)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1A3C78] via-[#2D5CB8] to-[#1A3C78] text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-sm shadow-sm hover:shadow group"
            >
              Explore More
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div> 
      </div> 
    </div> 
  );
};

const AuthModal = ({ isOpen, article, onClose }) => {
  if (!article) return null;
  
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-blue/10">
                      <PlaceholderIcon title={article.title} />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-slate-900">
                        Sign in to access premium content
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-slate-500">
                          To continue reading &ldquo;{article.title}: {article.subtitle}&rdquo; and access all our premium content, please sign in or create an account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 space-y-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-primary-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-blue/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                        // Handle sign in
                      }}
                    >
                      Sign in
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                        // Handle create account
                      }}
                    >
                      Create an account
                    </button>
                  </div>
                  <div className="absolute right-0 top-0 pr-4 pt-4 block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const ArticlesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleExploreClick = (article) => {
    setSelectedArticle(article);
    setIsAuthModalOpen(true);
  };
  
  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-xs font-medium tracking-widest uppercase text-primary-blue">Wisdom Paths</span>
            <div className="h-0.5 w-full bg-primary-blue/80 mt-1"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-martel text-slate-800 mt-6 mb-4">
            Ancient Wisdom for Modern Living
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Discover practical insights from timeless traditions, reimagined for your contemporary journey.
          </p>
        </div>
        
        <div>
          {articles.map((article, index) => (
            <ArticleRow 
              key={article.id}
              article={article}
              index={index}
              onExploreClick={handleExploreClick}
            />
          ))}
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        article={selectedArticle} 
        onClose={closeAuthModal} 
      />
    </section>
  );
};

export default ArticlesSection;
