import React, { useState } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Testimonial = () => {
  const testimonials = [
    {
      content: "Beniva Consulting Group has leveraged the expert support of Aelum Consulting for multiple development, system administration and ServiceNow implementation projects. Their technical capability is at an expert level, and Aelum’s leadership is very high integrity and customer oriented. This company will do great things.",
      author: "Leonard Wiens - Beniva Consulting group"
    },
    {
      content: "The management consulting company was impressed by Aelum Consulting's technical knowledge and command of the tasks. The team focused more on core app development then documentation. The project management style was practical and led to the timely certification of the app.",
      author: "Manoj Kulwal - Riskspotlight"
    },
    {
      content: "Aelum has the resources that understood my requirements and left no stones unturned to deliver the best of solution in the most effective and efficient manner. In my experience, Aelum is one of those rare organisations that show agility in the way they adapt to changing requirements, with absolutely no compromise in quality. They delivered on-time, every time!",
      author: "Sushil Abraham - Intuitor"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <Box id="Testimonial" bgcolor="grey" color="white" py={6}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom>TESTIMONIALS</Typography>
        <Typography variant="h3" align="center" gutterBottom>What Our Customers Have To Say!</Typography>
        <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
          <IconButton onClick={handlePrevTestimonial}>
            <NavigateBeforeIcon />
          </IconButton>
          <Box textAlign="center" px={2}>
            <Typography variant="body1" gutterBottom>{testimonials[currentTestimonial].content}</Typography>
            <Typography variant="subtitle1" gutterBottom>{testimonials[currentTestimonial].author}</Typography>
          </Box>
          <IconButton onClick={handleNextTestimonial}>
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
