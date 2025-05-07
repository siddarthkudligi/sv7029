"use client";

import React from 'react';

// --- Main Section Icon ---
const PlaceholderIcon = ({ title, size = 'medium', className = '', isActive }) => { // Added className and isActive to props
  const getColor = () => {
    // TODO: Potentially adjust active/inactive colors based on isActive prop
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
  const sizeClasses = { small: 'w-5 h-5', medium: 'w-10 h-10', large: 'w-14 h-14' }; // Adjusted small size slightly
  
  // Combine passed className with component's default classes
  const combinedClassName = `${sizeClasses[size]} flex-shrink-0 ${className}`.trim();

  return (
    <svg viewBox="0 0 24 24" className={combinedClassName} fill="none" stroke={getColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Conditional rendering for different icons based on title */}
      {title === 'Learn' && (<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></>)}
      {title === 'Grow' && (<><path d="M12 2v8"></path><path d="M12 18v4"></path><path d="M4.93 10.93l2.83 2.83"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 13.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path></>)}
      {title === 'Reflect' && (<><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></>)}
      {title === 'Renew' && (<><path d="M21 12a9 9 0 0 1-9 9"></path><path d="M3 12a9 9 0 0 1 9-9"></path><path d="M21 12a9 9 0 0 0-9-9"></path><path d="M3 12a9 9 0 0 0 9 9"></path><path d="M12 3v6"></path><path d="M12 21v-6"></path></>)}
      {title === 'Practice' && (<><path d="M12 2a3 3 0 0 0-3 3v7h6V5a3 3 0 0 0-3-3z"></path><path d="M15 12H9"></path><path d="M9 12v7a3 3 0 0 0 6 0v-7"></path></>)}
      {title === 'Guide' && (<><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></>)}
    </svg>
  );
};

export default PlaceholderIcon;
