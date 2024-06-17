import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

// Import your images
import ctaBgImage from '../assets/book.png';

const ParallaxBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '250px',
  background: `url(${ctaBgImage})`,
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay
    zIndex: 1,
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  color: 'white',
  textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: 'white',
  borderColor: 'white',
  borderWidth: '1px',
  borderStyle: 'solid',
  backgroundColor: 'transparent', // Transparent background
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const ParallaxSection = () => {
  return (
    <ParallaxBox >
      <ContentContainer >
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <Typography variant="h5">Book a free consultation with us</Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledButton
              href="https://aelumconsulting.com/contact-us/"
              target="_self"
            >
              Contact us
            </StyledButton>
          </Grid>
        </Grid>
      </ContentContainer>
    </ParallaxBox>
  );
};

export default ParallaxSection;
