'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);

  return null;
}
