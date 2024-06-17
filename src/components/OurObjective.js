import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import CustomServiceCard from './CustomServiceCard';

const OurObjective = () => {
  return (
    <Box component="section" sx={{ backgroundColor: '#f8f9fa', py: 15 }}>
      <Container maxWidth="lg">
        <Typography 
          sx={{
            color: "#5B6674",
            fontFamily: "sans-serif",
            letterSpacing: "3.5px"
          }}
          variant="body1"
          align="center"
          gutterBottom
        >
          OUR OBJECTIVE
        </Typography>
        <Typography sx={{ py: 4 }} variant="h5" align="center" marginLeft="60px" marginRight="60px" gutterBottom>
          We provide the best ServiceNow Solutions with out-of-the-box capabilities and the best in class service provider.
        </Typography>
        <Typography sx={{ color: "#5B6674" }} variant="body1" align="center" gutterBottom>
          We have technology experts to help you manage business processes.
        </Typography>
        <Grid sx={{ py: 10 }} container spacing={3}>
          {serviceCards.map((service, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Box 
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <CustomServiceCard {...service} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const serviceCards = [
  {
    imageUrl: "https://aelumconsulting.com/wp-content/uploads/2024/05/Deliver-Long-Term-Strategic-Value.webp",
    title: "Deliver Long-Term Strategic Value",
    content: "We provide the business solutions that amplify Your revenue.",
  },
  {
    imageUrl: "https://aelumconsulting.com/wp-content/uploads/2024/05/Secure-and-Resilient-Tech-Delivery.webp",
    title: "Secure and Resilient Tech Delivery",
    content: "Embed New Technologies to upgrade the ecosystem with the current marketplace.",
  },
  {
    imageUrl: "https://aelumconsulting.com/wp-content/uploads/2024/05/Enhance-Employee-Productivity.webp",
    title: "Enhance Employee Productivity",
    content: "Simplifying IT operations with automation of recursive processes.",
  },
  {
    imageUrl: "https://aelumconsulting.com/wp-content/uploads/2024/05/Effortless-Customer-Experience.webp",
    title: "Effortless Customer Experience",
    content: "Focused on delivering high-quality solutions to our customers.",
  },
  // Add more service cards as needed
];

export default OurObjective;
