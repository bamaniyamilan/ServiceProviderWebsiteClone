import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Grid } from '@mui/material';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const IconLink = ({ href, children }) => (
  <IconButton 
    href={href} 
    target="_blank" 
    rel="noopener" 
    sx={{ color: 'white', '&:hover': { color: '#ddd' } }}
  >
    {children}
  </IconButton>
);

const TopBar = () => {
  return (
    <AppBar position="relative" sx={{ backgroundColor: "#0a6a67" }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <IconLink href="https://www.facebook.com"><FaFacebookF /></IconLink>
          <IconLink href="https://www.twitter.com"><FaTwitter /></IconLink>
          <IconLink href="https://www.linkedin.com"><FaLinkedinIn /></IconLink>
          <IconLink href="https://www.instagram.com"><FaInstagram /></IconLink>
        </Box>
        <Grid container direction="row-reverse" alignItems="center">
          <Grid item>
            <Typography variant="body2">📞 +123-456-7890</Typography>
            <Typography variant="body2">✉️ info@aelumconsulting.com</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
