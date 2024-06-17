// import React from 'react';
// import { Container, Grid, Typography, Box, Button } from '@mui/material';
// import { styled } from '@mui/system';

// // Styled Box for the icon sections
// const StyledBox = styled(Box)(({ theme }) => ({
//   backgroundColor: '#f5f5f5',
//   color: '#000',
//   display: 'flex',
//   alignItems: 'center',
//   flexDirection: 'column',
//   textAlign: 'center',
//   padding: theme.spacing(3),
//   marginBottom: theme.spacing(2),
//   '& .icon-wrap': {
//     fontSize: '2rem',
//     marginBottom: theme.spacing(2),
//     color: '#0A9B97',
//   },
//   '& .content': {
//     marginBottom: theme.spacing(2),
//   },
// }));

// const HowCanWeHelp = () => {
//   return (
//     <Container className="main-container" sx={{ py: 5 }}>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           <Box sx={{ mb: 5 }}>
//             <Typography variant="h5" component="div">How can we help</Typography>
//             <Typography variant="h3" component="div">ServiceNow Solutions</Typography>
//           </Box>
//           <StyledBox>
//             <div className="icon-wrap"><i className="fas fa-network-wired"></i></div>
//             <Typography variant="h6">IT workflows</Typography>
//             <Typography className="content">We offer workflows that can transform it into a fully-fledged growth engine. Take advantage of the benefits of operational flexibility by increasing workforce adaptability.</Typography>
//             <Button variant="text" href="https://aelumconsulting.com/it-workflows/" target="_self">
//               Read More
//             </Button>
//           </StyledBox>
//           <StyledBox>
//             <div className="icon-wrap"><i className="fas fa-users"></i></div>
//             <Typography variant="h6">Employee workflows</Typography>
//             <Typography className="content">Make employee experiences more integrated and engaging with ServiceNow Employee Workflows. Motivate your staff by making it simple for them to obtain what they require when they require it.</Typography>
//             <Button variant="text" href="https://aelumconsulting.com/employee-workflows/" target="_self">
//               Read More
//             </Button>
//           </StyledBox>
//           <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 2 }}>
//             <img
//               src="https://aelumconsulting.com/wp-content/uploads/2024/05/ServiceNow-Solutions-img2.webp"
//               alt="ServiceNow Solution Services"
//               style={{ width: '100%' }}
//             />
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Box sx={{ display: { xs: 'none', md: 'block' }, mb: 5 }}>
//             <img
//               src="https://aelumconsulting.com/wp-content/uploads/2024/05/ServiceNow-Solutions-img1.webp"
//               alt="ServiceNow Solutions"
//               style={{ width: '100%' }}
//             />
//           </Box>
//           <StyledBox>
//             <div className="icon-wrap"><i className="fas fa-expand-arrows-alt"></i></div>
//             <Typography variant="h6">Customer workflows</Typography>
//             <Typography className="content">We connect clients, front-line agents, middle and back-office staff on a single ServiceNow platform with ServiceNow Customer Workflows using digital processes to scale customer operations.</Typography>
//             <Button variant="text" href="https://aelumconsulting.com/customer-workflows/" target="_blank">
//               Read More
//             </Button>
//           </StyledBox>
//           <StyledBox>
//             <div className="icon-wrap"><i className="fas fa-laptop-code"></i></div>
//             <Typography variant="h6">Creator workflows</Typography>
//             <Typography className="content">With a low-code platform, you can quickly create digital workflow apps. Scale quickly across the organization to build natural, linked experiences that users enjoy.</Typography>
//             <Button variant="text" href="https://aelumconsulting.com/creator-workflows/" target="_self">
//               Read More
//             </Button>
//           </StyledBox>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default HowCanWeHelp;


import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

// Styled Box for the icon sections
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#000',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  '& .icon-wrap': {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
    color: '#0A9B97',
  },
  '& .content': {
    marginBottom: theme.spacing(2),
  },
}));

const HowCanWeHelp = () => {
  return (
    <Container className="main-container" sx={{ py: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h5" component="div">How can we help</Typography>
            <Typography variant="h3" component="div">ServiceNow Solutions</Typography>
          </Box>
          <StyledBox>
            <div className="icon-wrap"><i className="fas fa-network-wired"></i></div>
            <Typography variant="h6">IT workflows</Typography>
            <Typography className="content">We offer workflows that can transform it into a fully-fledged growth engine. Take advantage of the benefits of operational flexibility by increasing workforce adaptability.</Typography>
            <Button variant="text" href="https://aelumconsulting.com/it-workflows/" target="_self">
              Read More
            </Button>
          </StyledBox>
          <StyledBox>
            <div className="icon-wrap"><i className="fas fa-users"></i></div>
            <Typography variant="h6">Employee workflows</Typography>
            <Typography className="content">Make employee experiences more integrated and engaging with ServiceNow Employee Workflows. Motivate your staff by making it simple for them to obtain what they require when they require it.</Typography>
            <Button variant="text" href="https://aelumconsulting.com/employee-workflows/" target="_self">
              Read More
            </Button>
          </StyledBox>
          <Box sx={{ mb: 2 }}>
            <img
              src="https://aelumconsulting.com/wp-content/uploads/2024/05/ServiceNow-Solutions-img2.webp"
              alt="ServiceNow Solution Services"
              style={{ width: '100%' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 5 }}>
            <img
              src="https://aelumconsulting.com/wp-content/uploads/2024/05/ServiceNow-Solutions-img1.webp"
              alt="ServiceNow Solutions"
              style={{ width: '100%' }}
            />
          </Box>
          <StyledBox>
            <div className="icon-wrap"><i className="fas fa-expand-arrows-alt"></i></div>
            <Typography variant="h6">Customer workflows</Typography>
            <Typography className="content">We connect clients, front-line agents, middle and back-office staff on a single ServiceNow platform with ServiceNow Customer Workflows using digital processes to scale customer operations.</Typography>
            <Button variant="text" href="https://aelumconsulting.com/customer-workflows/" target="_blank">
              Read More
            </Button>
          </StyledBox>
          <StyledBox>
            <div className="icon-wrap"><i className="fas fa-laptop-code"></i></div>
            <Typography variant="h6">Creator workflows</Typography>
            <Typography className="content">With a low-code platform, you can quickly create digital workflow apps. Scale quickly across the organization to build natural, linked experiences that users enjoy.</Typography>
            <Button variant="text" href="https://aelumconsulting.com/creator-workflows/" target="_self">
              Read More
            </Button>
          </StyledBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowCanWeHelp;
