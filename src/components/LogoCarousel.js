import React from 'react';
import Slider from 'react-slick';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = [
    "https://aelumconsulting.com/wp-content/uploads/2024/05/Adcom.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/aidigital-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/ANECT-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/arcfoxlogo.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/beniva-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/Brillio.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/Chorus-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/draytus-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/Entain.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/hexaware-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/hp-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/inok-logo.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/isg-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/jovus-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/quintica.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/redwood-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/riskspotlight-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/sword_group-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/tata-communications-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/tuitor-logo.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/xentegra-1.webp",
    "https://aelumconsulting.com/wp-content/uploads/2024/05/04-dark-1.webp"
];

const LogoCarousel = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow isSmallScreen={isSmallScreen} />,
        prevArrow: <PrevArrow isSmallScreen={isSmallScreen} />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', px: isSmallScreen ? 1 :2 }}>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <Box key={index} sx={{ padding: isSmallScreen ? 0.5 : 1 }}>
                        <img src={logo} alt={`logo-${index}`} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

const PrevArrow = ({ onClick, isSmallScreen }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            top: '50%',
            left: 8,
            transform: 'translateY(-50%)',
            zIndex: 1,
            color: '#fff',
            '&:hover': { color: '#ddd' },
            fontSize: isSmallScreen ? '1rem' : '1.5rem',
            padding: isSmallScreen ? '4px' : '8px'
        }}
    >
        <FaAngleLeft />
    </IconButton>
);

const NextArrow = ({ onClick, isSmallScreen }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            top: '50%',
            right: 8,
            transform: 'translateY(-50%)',
            zIndex: 1,
            color: '#fff',
            '&:hover': { color: '#ddd' },
            fontSize: isSmallScreen ? '1rem' : '1.5rem',
            padding: isSmallScreen ? '4px' : '8px'
        }}
    >
        <FaAngleRight />
    </IconButton>
);

export default LogoCarousel;
