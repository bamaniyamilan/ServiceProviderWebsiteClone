import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// Styled component for the top arrow container
const BackToTopContainer = styled('a')({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: 'transparent',
  borderRadius: '50%',
  width: '56px',
  height: '56px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Adjusted boxShadow property
  zIndex: '1000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
  '&:hover': {
    backgroundColor: '#0A9B97',
  },
});

// Styled component for the progress circle
const ProgressCircle = styled('svg')({
  width: '100%',
  height: '100%',
  transition: 'stroke-dashoffset 300ms linear 0s',
});

const BackToTopButton = () => {
  // State to manage visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Function to handle showing/hiding the button based on scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    // Remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BackToTopContainer
      href="#"
      onClick={scrollToTop}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <ArrowUpwardIcon style={{ color: '#0A9B97' }} />
      <ProgressCircle
        viewBox="0 0 100 100"
        preserveAspectRatio="xMinYMin meet"
        className="progress-circle svg-content"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: '307.919, 307.919',
            strokeDashoffset: '110.553',
            stroke: '#0A9B97',
          }}
        />
      </ProgressCircle>
    </BackToTopContainer>
  );
};

export default BackToTopButton;
