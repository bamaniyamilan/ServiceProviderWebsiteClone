import React from 'react';
import { Box, Container, Grid, Typography, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { FaUsers, FaCashRegister, FaLock, FaThumbsUp, FaStar } from 'react-icons/fa';

// Create a theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    typography: {
        h5: {
            fontSize: '1.5rem',
        },
        h3: {
            fontSize: '2.5rem',
        },
        h6: {
            fontSize: '1.25rem',
        },
        body1: {
            fontSize: '1rem',
        },
    },
});

const IconBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(2),
    border: '1px solid #e0e0e0',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f5f5f5',
    '& .icon': {
        fontSize: '3rem',
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
    },
    '& h6': {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
}));

const OurSpecialities = () => {
    return (
        <ThemeProvider sx={{backgroundColor :'#283C3D'}} theme={theme}>
            <CssBaseline />
            <Container style={{backgroundColor :'#283C3D',marginTop : '10px'}} className="main-container">
                <Grid container spacing={2} alignItems="center" style={{marginTop : '10px'}}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: 'left',marginTop : '40px'}} >
                            <Typography variant="h5" color={'#ffffff'}>Our Specialities</Typography>
                            <Typography  variant="h3" color={'#ffffff'}>Why Choose Aelum</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="body1">
                                Our expertise allows your business to streamline workflow, and increase productivity. We believe in providing the best services to our customers with maximum efficiency.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container  spacing={2} alignItems="center" justifyContent="space-between" sx={{ mt: 4}}>
                    <Grid item xs={12} sm={2.4}>
                        <IconBox sx={{marginBottom : '100px',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.15)',
                            }
                        }} >
                            <FaUsers className="icon" />
                            <Typography variant="h6">Customer Satisfaction</Typography>
                        </IconBox>
                    </Grid>
                    <Grid item xs={12} sm={2.4}>
                        <IconBox sx={{marginBottom : '100px',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.15)',
                            }
                        }}>
                            <FaCashRegister className="icon" />
                            <Typography variant="h6">Finance Optimisation</Typography>
                        </IconBox>
                    </Grid>
                    <Grid item xs={12} sm={2.4}>
                        <IconBox sx={{marginBottom : '100px',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.15)',
                            }
                        }}>
                            <FaLock className="icon" />
                            <Typography variant="h6">Assured Commitment</Typography>
                        </IconBox>
                    </Grid>
                    <Grid item xs={12} sm={2.4}>
                        <IconBox sx={{marginBottom : '100px',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.15)',
                            }
                        }}>
                            <FaThumbsUp className="icon" />
                            <Typography variant="h6">Technical Excellence</Typography>
                        </IconBox>
                    </Grid>
                    <Grid item xs={12} sm={2.4}>
                        <IconBox sx={{marginBottom : '100px',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.15)',
                            }
                        }}>
                            <FaStar className="icon" />
                            <Typography variant="h6">Facility Skilled Experts</Typography>
                        </IconBox>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default OurSpecialities;
