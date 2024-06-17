import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const CustomServiceCard = ({ imageUrl, title, content }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: 250,
        }}
      >
        <Box
          component="div"
          className="thumb-service"
          sx={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top', // Show image at the top
            width: '20%',
            margin : '10px',
            height: '20%', // Show image slightly smaller at the top
          }}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>{title}</Typography>
          <Typography variant="body2" component="div">{content}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CustomServiceCard;
