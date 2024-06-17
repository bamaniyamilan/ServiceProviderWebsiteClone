import React from 'react';
import { Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';

// Custom theme to include IBM Plex Sans font
const theme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans, sans-serif',
  },
});

// Styled Box for the icon sections with hover effect and padding
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#0A9B97',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  padding: theme.spacing(3),
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: 'white',
    color: '#0A9B97',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  },
  '& .icon-wrap': {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
  },
}));

const ServiceNow = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container className="main-container" sx={{ py: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h5" component="div">ServiceNow</Typography>
              <Typography variant="h3" component="div">ServiceNow Micro Assessment</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              We help You to assess Existing Service Now implementation with a prioritized road map that scales with business needs over time, a strategic solution for expanding digital excellence.
            </Typography>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Evaluation Of Existing ITSM Tool</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography></Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Assess Existing Service Now Implementations</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography></Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Understand the Process Gaps</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography></Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>License Review</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography></Typography>
              </AccordionDetails>
            </Accordion>
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" href="https://aelumconsulting.com/servicenow-micro-assessment/">
                Read More
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <StyledBox>
              <div className="icon-wrap"><i className="pe-7s-clock"></i></div>
              <Typography variant="h6" sx={{ mt: 1 }}>Technology Adoption</Typography>
              <Typography>We provide actionable insights on Adopting the latest technologies without any obstacles.</Typography>
            </StyledBox>
            <StyledBox sx={{ mt: 2 }}>
              <div className="icon-wrap"><i className="pe-7s-repeat"></i></div>
              <Typography variant="h6" sx={{ mt: 1 }}>Strategic solution</Typography>
              <Typography>We Provide Strategic solutions to assess existing ServiceNow Implementation.</Typography>
            </StyledBox>
          </Grid>

          <Grid item xs={12} md={3}>
            <StyledBox>
              <div className="icon-wrap"><i className="pe-7s-leaf"></i></div>
              <Typography variant="h6" sx={{ mt: 1 }}>Digital excellence.</Typography>
              <Typography>Superior Solutions are provided to understand the process gaps for expanding Digital Excellence.</Typography>
            </StyledBox>
            <StyledBox sx={{ mt: 2 }}>
              <div className="icon-wrap"><i className="pe-7s-ticket"></i></div>
              <Typography variant="h6" sx={{ mt: 1 }}>Cost Optimisation</Typography>
              <Typography>We provide a Cost-effective roadmap to increase Productivity and revenue.</Typography>
            </StyledBox>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ServiceNow;
