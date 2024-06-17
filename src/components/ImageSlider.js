import React, { useEffect } from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';

const ImageSlider = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Implement image loading logic here
  }, []);

  const goToPrevSlide = () => {
    // Implement logic to move to the previous slide
  };

  const goToNextSlide = () => {
    // Implement logic to move to the next slide
  };

  return (
    <Box position="relative" width="100%" height={500} overflow="hidden" bgcolor="#333" px={isSmallScreen ? 1 : 2}>
      {/* Left Arrow */}
      <Button
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          zIndex: 1,
          color: '#fff',
          border: '0.5px solid #fff',
          fontSize: isSmallScreen ? '1rem' : '1.5rem',
          padding: isSmallScreen ? '4px' : '8px',
          minWidth: 'auto',
        }}
        onClick={goToPrevSlide}
      >
        {'<'}
      </Button>

      {/* Right Arrow */}
      <Button
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          zIndex: 1,
          color: '#fff',
          border: '0.5px solid #fff',
          fontSize: isSmallScreen ? '1rem' : '1.5rem',
          padding: isSmallScreen ? '4px' : '8px',
          minWidth: 'auto',
        }}
        onClick={goToNextSlide}
      >
        {'>'}
      </Button>

      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        right={0}
        width="100%"
        height="100%"
        sx={{
          backgroundImage: "url('https://aelumconsulting.com/wp-content/uploads/2021/11/dark-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      {/* Text */}
      <Box position="absolute" bottom={20} left={20} zIndex={1} color="#fff">
        <Typography variant="h1" sx={{ fontWeight: 600, fontSize: 28, lineHeight: '32px', marginBottom: 1 }}>
          Inspire New Digital Workforce With ServiceNow
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 16, lineHeight: '20px', marginBottom: 2 }}>
          Transform legacy processes with ServiceNow digital automation. We empower organizations to deliver an AI-powered Employee experience.
        </Typography>
        <Button
          href="https://aelumconsulting.com/servicenow-micro-assessment/"
          target="_self"
          variant="contained"
          sx={{ backgroundColor: '#0a9b97', color: '#ffffff', borderRadius: 5, padding: '10px 20px', '&:hover': { backgroundColor: '#fff', color: '#0a9b97' } }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default ImageSlider;