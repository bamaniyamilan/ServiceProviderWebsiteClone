import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CounterBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(2),
}));

const CounterNumber = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
}));

const CounterSymbol = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 'bold',
}));

const CounterTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
}));

const CounterContent = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',
    marginTop: theme.spacing(1),
}));

const CustomImage = styled('img')({
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    maxWidth: '400px',
    maxHeight: '400px',
    margin: '0 auto',
    display: 'block',
});

const InnovateSection = () => {
    return (
        <Container sx={{marginBottom : 10,marginTop : 10}}>
            <Box sx={{ textAlign: 'center', marginBottom:5 }}>
                <Typography  variant="h4" component="h4" sx={{ color: '#14133B',fontFamily:'IBM Plex Sans, sans-serif' }} >
                    We Innovate and Transform
                </Typography>
                <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
                    Trusted by the many best organizations, we delivered 40+ instances in ServiceNow with 180+ Modules, 12 Scoped Applications, 3 CRM Applications, and 25+ Web Applications. We have a customer base of 30+ and 9 Partners across the globe.
                </Typography>
            </Box>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                    <CustomImage
                        src="https://aelumconsulting.com/wp-content/uploads/2024/05/Consulting__Implementation.webp"
                        alt="ServiceNow Premier Partner"
                    />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <CounterBox display={'flex'} justifyContent={'center'}>
                                <CounterNumber component="h3">4.75/5</CounterNumber>
                                <CounterSymbol component="span">+</CounterSymbol>
                            </CounterBox>
                            <CounterBox>
                                <CounterTitle>CSAT Score</CounterTitle>
                                <CounterContent>Elevating Satisfaction with Excellence</CounterContent>
                            </CounterBox>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CounterBox display={'flex'} justifyContent={'center'}>
                                <CounterNumber component="h3">30</CounterNumber>
                                <CounterSymbol component="span">+</CounterSymbol>
                            </CounterBox>
                            <CounterBox>
                                <CounterTitle>Customer Satisfaction</CounterTitle>
                                <CounterContent>We are focused on creating Customer-Centric Environment</CounterContent>

                            </CounterBox>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <CounterBox display={'flex'} justifyContent={'center'}>
                                <CounterNumber component="h3">100</CounterNumber>
                                <CounterSymbol component="span">+</CounterSymbol>
                                </CounterBox>
                                <CounterBox>
                                <CounterTitle>Projects Completed</CounterTitle>
                                <CounterContent>Successfully Delivered Projects for IT & Software Industries</CounterContent>
                            </CounterBox>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default InnovateSection;
