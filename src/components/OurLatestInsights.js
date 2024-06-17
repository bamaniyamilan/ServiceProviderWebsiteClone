import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import FirstImage from '../assets/one.png'
import SecondImage from '../assets/two.png'
import ThirdImage from '../assets/three.png'

// Styled Box for the blog posts
const StyledBox = styled(Box)(({ theme }) => ({
  // backgroundColor: '#f5f5f5',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

const OurLatestInsights = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <StyledBox>
            <Typography variant="h5" component="div">Latest Posts</Typography>
            <Typography variant="h3" component="div">Our Latest Insights</Typography>
            <Typography sx={{marginTop : 5}} variant="h6" component="div">We provide high-quality and cost-effective ServiceNow implementation solutions. Look at our latest blogs.</Typography>

          </StyledBox>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          {/* Insert your blog post here */}
          <StyledBox>
            <figure>
              <img
                src={FirstImage} alt="Blog Post"
                width={300}
                height={280}
              />
            </figure>
            <Typography variant="h6">The Five Components of an Effective Human Resources Strategy with ServiceNow HRSD</Typography>
            <Typography>April 1, 2024</Typography>
            <Typography>By Aelum Consulting</Typography>
            <Button variant="contained" href="https://aelumconsulting.com/the-five-components-of-an-effective-human-resources-strategy-with-servicenow-hrsd/" target="_self">
              Read More
            </Button>
          </StyledBox>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          {/* Insert your blog post here */}
          <StyledBox>
            <figure>
              <img
                src={SecondImage} alt="Blog Post"
                width={300}
                height={280}
              />
            </figure>
            <Typography variant="h6">How to Make the Most of the ServiceNow Application Vulnerability Response?</Typography>
            <Typography>September 12, 2023</Typography>
            <Typography>By Aelum Consulting</Typography>
            <Button variant="contained" href="https://aelumconsulting.com/how-to-make-the-most-of-the-servicenow-application-vulnerability-response/" target="_self">
              Read More
            </Button>
          </StyledBox>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          {/* Insert your blog post here */}
          <StyledBox>
            <figure>
              <img
                src={ThirdImage}
                alt="Blog Post"
                width={300}
                height={280}
              />
            </figure>
            <Typography  variant="h6">Maximize Risk Visibility Using ServiceNow IRM and Service Management Tools.</Typography>
            <Typography>August 29, 2023</Typography>
            <Typography>By Aelum Consulting</Typography>
            <Button variant="contained" href="https://aelumconsulting.com/maximize-risk-visibility-using-servicenow-irm/" target="_self">
              Read More
            </Button>
          </StyledBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurLatestInsights;
