"use client"; // Mark this as a Client Component

import React, { useState, useEffect, useMemo, isValidElement } from 'react'; 
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import {
  BookOpenIcon, LightBulbIcon, MagnifyingGlassIcon, 
  ArrowTrendingUpIcon, UserGroupIcon, SparklesIcon, PresentationChartLineIcon, 
  AdjustmentsHorizontalIcon, FaceSmileIcon, HeartIcon, ScaleIcon,
  ArrowPathIcon, SunIcon, FireIcon, MoonIcon, 
  CheckCircleIcon, CogIcon, PencilSquareIcon, 
  MapPinIcon, ChatBubbleLeftRightIcon, UsersIcon, ShareIcon, 
  ArrowRightIcon, 
  UserIcon, ShieldCheckIcon,
  BriefcaseIcon, ArrowsRightLeftIcon,
  ArrowUturnLeftIcon, GiftIcon, GlobeAmericasIcon,
  CheckBadgeIcon, WifiIcon, HandThumbUpIcon,
  EyeIcon, AdjustmentsVerticalIcon,
  MapIcon, KeyIcon, SquaresPlusIcon,
  // Icons for first cards
  CubeIcon, 
  CursorArrowRaysIcon, 
  // EyeIcon used for Reflect[0]
  // ScaleIcon used for Renew[0]
  ListBulletIcon, 
  Squares2X2Icon, 
  // Icons specifically for Tabs (Original ones)
  AcademicCapIcon, // Learn Tab
  GlobeAltIcon, // Grow Tab
  // MagnifyingGlassIcon used for Reflect Tab
  // MoonIcon used for Renew Tab
  ClipboardDocumentListIcon, // Practice Tab
  RectangleStackIcon // Guide Tab
} from '@heroicons/react/24/outline';

// --- Updated Data Structure (using Heroicon components) ---
const articlesData = [
  {
    id: 1,
    title: 'Learn',
    tabIcon: AcademicCapIcon, 
    subtitle: 'Building Foundation',
    description: 'Build your foundation for a meaningful life. This initial stage focuses on acquiring essential knowledge – not just facts, but understanding how to apply wisdom to navigate the world, understand yourself, and prepare for your future roles.',
    quote: { text: "This interval is where the intellectual and moral foundation is built, setting the stage for personal growth in the following phases.", author: null }, 
    cards: [
      { icon: CubeIcon, title: 'Foundational Knowledge', description: "Grasp core concepts about human nature, life's cycles, and the forces that shape our experience, from desires to emotions." }, 
      { icon: LightBulbIcon, title: 'Practical Application', description: 'Discover strategies to translate understanding into daily life, managing common challenges and building essential life skills.' },
      { icon: UserIcon, title: 'Character Development', description: 'Cultivate inner strength, discipline, and self-awareness as cornerstones for personal integrity and future growth.' },
      { icon: SparklesIcon, title: 'Preparing for Life', description: 'Lay the groundwork for holistic success – preparing effectively for your roles in work, family, and society.' }
    ]
  },
  {
    id: 2,
    title: 'Grow',
    tabIcon: GlobeAltIcon, 
    subtitle: 'Expanding Understanding',
    description: "Step into the world and truly experience life. This phase is about applying what you've learned through relationships, career, contribution, and navigating the complexities of the world. It's where knowledge transforms into lived wisdom.",
    quote: { text: "This period serves as a testing ground where theoretical knowledge is applied through real-world experiences... transforming knowledge into lived wisdom.", author: null },
    cards: [
      { icon: CursorArrowRaysIcon, title: 'Experiencing Life Fully', description: 'Engage deeply with the world – embracing relationships, career paths, and societal roles as arenas for growth.' }, 
      { icon: HeartIcon, title: 'Meaningful Connections', description: 'Explore relationships as opportunities for mutual growth and companionship, building connections that enrich your journey.' },
      { icon: BriefcaseIcon, title: 'Applying Knowledge', description: 'Move beyond theory. Learn to navigate real-world challenges and apply your understanding effectively in practical situations.' },
      { icon: ArrowsRightLeftIcon, title: 'Balancing Duties', description: 'Skillfully manage personal aspirations alongside responsibilities to family, community, and society with integrity.' }
    ]
  },
  {
    id: 3,
    title: 'Reflect',
    tabIcon: MagnifyingGlassIcon, 
    subtitle: 'Internalizing Knowledge',
    description: 'Turn your focus inward for deeper understanding. This stage invites introspection, examining your experiences, beliefs, and attachments to cultivate inner clarity and prepare for broader service.',
    quote: { text: "Through reflection and detachment, one gains the ability to embrace life with a broader perspective, finding fulfillment not in material success but in inner clarity and peace.", author: null },
    cards: [
      { icon: EyeIcon, title: 'Self-Examination', description: 'Look within to understand your patterns, responses, and motivations with honesty and compassion.' }, 
      { icon: ArrowUturnLeftIcon, title: 'Conscious Letting Go', description: 'Learn to gently release attachments to outcomes, outdated beliefs, and identities that no longer serve your growth.' },
      { icon: BookOpenIcon, title: 'Exploring Deeper Meanings', description: 'Engage with timeless wisdom and philosophical insights that illuminate the purpose and nature of existence.' },
      { icon: GiftIcon, title: 'Cultivating Altruism', description: 'Expand your focus beyond personal concerns, developing a mindset of service and connection to the wider world.' }
    ]
  },
  {
    id: 4,
    title: 'Renew',
    tabIcon: MoonIcon, 
    subtitle: 'Embodying Wisdom',
    description: 'Integrate your wisdom and live with greater freedom. This final phase emphasizes simplicity, emotional balance, and embodying peace, moving from self-focus to harmonious connection with all.',
    quote: { text: "By demonstrating that fulfillment comes from within, this section inspires others to see that a well-lived life is one rooted in clarity, compassion, and tranquility.", author: null },
    cards: [
      { icon: ScaleIcon, title: 'Simplicity & Balance', description: 'Cultivate a life of inner peace and equilibrium, finding joy in simplicity and presence.' }, 
      { icon: CheckBadgeIcon, title: 'Emotional Stability', description: "Develop resilience and inner calm, navigating life's ups and downs with grace and emotional freedom." },
      { icon: WifiIcon, title: 'Universal Awareness', description: 'Expand your consciousness beyond the self, fostering a sense of connection and harmony with all existence.' },
      { icon: SparklesIcon, title: 'Embodied Wisdom', description: 'Become a living example of peace and insight, inspiring others through your presence and compassionate action.' }
    ]
  },
  {
    id: 5,
    title: 'Practice',
    tabIcon: ClipboardDocumentListIcon, 
    subtitle: 'Integrating into Action',
    description: 'Turn understanding into transformation through action. Knowledge deepens when applied. This section provides structured exercises to cultivate self-awareness, manage challenges, and build resilience in your daily life.',
    quote: { text: "In the Svarupa framework, the Practice section serves as a bridge between knowledge and experience, providing practical tools that refine awareness...", author: null },
    cards: [
      { icon: ListBulletIcon, title: 'Structured Exercises', description: 'Engage with targeted practices designed to deepen self-understanding and integrate wisdom practically.' }, 
      { icon: EyeIcon, title: 'Sharpening Awareness', description: 'Develop greater clarity about your inner world – observing thoughts, emotions, and bodily sensations without judgment.' },
      { icon: AdjustmentsVerticalIcon, title: 'Emotional Resilience', description: "Build skills to navigate common disturbances like anxiety and anger, responding to life's challenges with greater balance." },
      { icon: CogIcon, title: 'Daily Application', description: 'Discover practical tools and techniques to bring mindful awareness and skillful action into your everyday routines.' }
    ]
  },
  {
    id: 6,
    title: 'Guide',
    tabIcon: RectangleStackIcon, 
    subtitle: 'Supporting Your Journey',
    description: 'Navigate your path with dedicated support and resources. Growth flourishes with guidance. Explore structured courses, insightful teachings, and potential mentorship to personalize your journey and deepen your integration of wisdom.',
    quote: { text: "This section within Svarupa offers tailored support... ensuring that individuals have access to the tools and resources they need to progress on their journey with clarity and confidence.", author: null },
    cards: [
      { icon: Squares2X2Icon, title: 'Structured Courses', description: 'Engage in curated learning paths designed to systematically deepen your understanding on specific topics.' }, 
      { icon: SparklesIcon, title: 'Insightful Teachings', description: 'Access wisdom from scriptures and experienced guides to unlock deeper layers of meaning and application.' },
      { icon: ChatBubbleLeftRightIcon, title: 'Mentorship & Community', description: 'Explore opportunities for personalized guidance and connection with others on a similar path.' },
      { icon: MapIcon, title: 'Personalized Paths', description: 'Find resources and techniques tailored to your specific needs and stage of development for confident progress.' }
    ]
  }
];

// --- Component --- 
const InteractiveArticlesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true, 
    });
  }, []);

  const handleTabClick = (index) => {
    if (index !== activeIndex) {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    }
  };

  const currentArticle = useMemo(() => articlesData[activeIndex], [activeIndex]);

  return (
    // Changed background from gradient to blue-bg.png image
    <section 
      className="py-16 md:py-24 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/blue-bg.png')" }} // Assuming in /public
    >
      {/* Removed subtle pattern div */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 
            className="text-sm font-semibold text-amber-400 tracking-wider uppercase mb-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Wisdom Path
          </h3>
          <h2 
            className="text-3xl md:text-4xl font-bold font-martel text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Articles for <span className="text-amber-300">your</span> growth journey
          </h2>
          <p 
            className="text-lg text-blue-200 font-inter"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Explore timeless wisdom, practically applied. These articles aren't just reading; they're resources to navigate life and unlock your potential.
          </p>
        </div>

        <div className="md:flex md:space-x-8 lg:space-x-12">
          
          {/* Left Tab Panel - Animate whole container */}
          <div 
            className="hidden md:block md:w-1/4 lg:w-1/5 flex-shrink-0 mb-10 md:mb-0"
            data-aos="fade-right" // Animate whole panel from right
            data-aos-delay="400"
          >
            {/* Restore sticky positioning immediately */}
            <div 
              className="sticky top-24 bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg shadow-lg" 
            >
              <ul 
                role="tablist" 
                aria-orientation="vertical"
                className="flex flex-col space-y-1"
              >
                {articlesData.map((article, index) => {
                    const TabIcon = article.tabIcon || LightBulbIcon; 
                    return (
                      <li key={article.id}>
                        <button
                          role="tab"
                          aria-selected={activeIndex === index}
                          aria-controls={`tabpanel-${article.id}`}
                          id={`tab-${article.id}`}
                          onClick={() => handleTabClick(index)}
                          className={`relative w-full text-left px-4 py-4 rounded-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 transition-all duration-150 ease-in-out ${ 
                            activeIndex === index
                              ? 'bg-primary-blue/30 text-amber-300 shadow-inner scale-[1.02]' 
                              : 'text-blue-100 hover:bg-primary-blue/10 hover:text-white'
                          }`}
                        >
                          <span className="flex items-center">
                            <TabIcon className={`mr-3 flex-shrink-0 transition-all duration-150 ease-in-out ${activeIndex === index ? 'w-7 h-7 text-amber-300' : 'w-6 h-6 text-blue-300 group-hover:text-amber-300/80'}`} />
                            <span className={`font-semibold font-martel transition-all duration-150 ease-in-out ${activeIndex === index ? 'text-lg' : 'text-base'}`}>
                              {article.title} 
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                })}
              </ul>
            </div>
          </div>

          <div 
            className="hidden mb-6"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <label htmlFor="article-tabs-mobile" className="sr-only">Select an Article Section</label>
            <select
              id="article-tabs-mobile"
              name="article-tabs-mobile"
              className="block w-full rounded-md border-slate-600 bg-slate-700 py-3 pl-4 pr-10 text-base text-white focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm shadow-md"
              value={activeIndex}
              onChange={(e) => handleTabClick(Number(e.target.value))}
            >
              {articlesData.map((article, index) => (
                <option key={article.id} value={index}>
                  {article.title}
                </option>
              ))}
            </select>
          </div>

          <div 
            className="w-full md:flex-1 relative" 
            data-aos="fade-left" 
            data-aos-mobile="false" 
            data-aos-delay="400"
          >
            <div 
              className="hidden md:block"
            >
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <AnimatedContentPanel
                  key={activeIndex} 
                  article={articlesData[activeIndex]}
                  direction={direction}
                />
              </AnimatePresence>
            </div>

            <div 
              className="md:hidden space-y-12"
              data-aos="fade-up" 
              data-aos-desktop="false" 
              data-aos-delay="400"
            >
              {articlesData.map((article, index) => (
                <div key={article.id} className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                  <ArticleContent article={article} isMobile={true}/>
                </div>
              ))}
            </div>

          </div> 
        </div> 
      </div> 
    </section> 
  );
};

const ArticleContent = ({ article, isMobile = false }) => {
  const HeaderIcon = article.tabIcon || LightBulbIcon;

  return (
    <>
      <div className="mb-6 flex items-center">
        {HeaderIcon && 
          <HeaderIcon className="w-7 h-7 text-amber-300 mr-3 flex-shrink-0" aria-hidden="true" />
        }
        <h2 className="text-2xl md:text-3xl font-bold font-martel text-white">
          {article.title}
        </h2>
      </div>
      
      <p className="text-blue-100 mb-6 leading-relaxed font-inter">
        {article.description}
      </p>

      <blockquote className="mb-6 border-l-4 border-amber-400 pl-5 italic text-blue-200/90 bg-slate-900/40 p-4 rounded-lg font-inter">
        <p className="mb-1">{article.quote.text}</p>
        {article.quote.author && (
          <cite className="block text-sm not-italic text-amber-300/80 mt-2">- {article.quote.author}</cite>
        )}
      </blockquote>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {article.cards.map((card, idx) => (
          <FeatureCard 
            key={idx} 
            icon={card.icon} 
            title={card.title} 
            description={card.description}
          />
        ))}
      </div>

      <div className={`${isMobile ? 'text-center' : 'text-left'}`}> 
        <Link 
          href={article.ctaLink || "/explore"} 
          className="inline-flex items-center group bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 text-sm font-semibold font-martel px-7 py-3 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 ease-in-out hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-900 transform hover:-translate-y-0.5"
        >
          Explore More
          <ArrowRightIcon className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </>
  );
}

const AnimatedContentPanel = ({ article, direction }) => {
  if (!article) return null;

  const SectionIcon = article.tabIcon || LightBulbIcon;

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 50 : -50,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 50 : -50,
        opacity: 0
      };
    }
  };

  return (
    <motion.div
      key={article.id} 
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "spring", stiffness: 350, damping: 35 }} 
      className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl overflow-hidden focus:outline-none"
      role="tabpanel"
      id={`tabpanel-${article.id}`}
      aria-labelledby={`tab-${article.id}`}
    >
      <ArticleContent article={article} />
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/30 p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-slate-700/70 border border-slate-700">
    <div className="flex items-start">
      {Icon && (
        <Icon className="w-5 h-5 text-amber-300 mr-4 flex-shrink-0" aria-hidden="true" />
      )}
      <div>
        <h4 className="font-semibold font-martel text-base text-amber-100 mb-1">{title}</h4>
        <p className="text-sm text-blue-200 font-inter leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export default InteractiveArticlesSection;
