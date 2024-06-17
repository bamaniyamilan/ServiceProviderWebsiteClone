import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from '@mui/material';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#ffffff'}}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Logo href="/">
            <img style={{ height: '80px', width: "240px", margin: '5px' }} alt="" src="https://aelumconsulting.com/wp-content/webp-express/webp-images/uploads/2024/04/AC-final-edit-logo-approved-png-transparent-1.png.webp" />
          </Logo>
          <Box sx={{ display: { xs: 'none', md: 'flex', color: "#000", alignItems: 'center' } }}>
            <Menu>
              <MenuItem href="/services">Service Now</MenuItem>
              <MenuItem href="/industries">Industries</MenuItem>
              <MenuItem href="/company">Company</MenuItem>
              <MenuItem href="/insights">Insights</MenuItem>
            </Menu>
            <Button variant="contained" color="primary" sx={{ borderRadius: '50px',height : "50px", marginLeft: "10px" ,backgroundColor: '#0a9b97' }}>Contact Us</Button>
          </Box>
          <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} color="inherit">
            <FaBars style={{ color: '#000' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

const Logo = ({ href, children }) => (
  <Typography variant="h6" component="a" href={href} sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>
    {children}
  </Typography>
);

const Menu = ({ children }) => <Box sx={{ display: 'flex', alignItems: 'center' }}>{children}</Box>;

const MenuItem = ({ href, children }) => (
  <Typography variant="body1" component="a" href={href} sx={{ color: 'inherit', textDecoration: 'none', marginLeft: '1rem', '&:hover': { color: '#ddd' } }}>
    {children}
  </Typography>
);
