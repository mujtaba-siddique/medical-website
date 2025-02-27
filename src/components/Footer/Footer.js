

import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Theme from "../../Theme";
import Logo from "../../Imag/Logo/Logo.png"; // Fixed potential typo in path

AOS.init({ duration: 800 });

const Footer = ({ activeSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#EEEEEE',
        py: 1,
        px: { xs: 2, md: 8 }, // Responsive padding
        borderTop: '1px solid #e0e0e0',
        color: '#ffffff' // Fixed color value
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">

          {/* Logo Section */}
          <Grid item xs={12} md={3} data-aos="fade-right">
            <Box sx={{ 
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' }, // Center on mobile
              mb: 2,
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.02)' }
            }}>
              <Link href="/" sx={{ display: 'inline-block' }}>
                <img 
                  src={Logo} 
                  alt="CareSphere Logo" // Improved alt text
                  style={{ 
                    width: 'auto', 
                    height: '50px', 
                    cursor: 'pointer',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }} 
                />
              </Link>
            </Box>
            <Typography variant="body2" sx={{ mt: 1, textAlign: { xs: 'center', md: 'left' }, color: '#495057' }}>
              Transforming healthcare through innovation
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="100">
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap', // Allow wrapping on small screens
              gap: { xs: 2, md: 4 },
              mt: { xs: 2, md: 0 }
            }}>
              {['Home', 'About',  'Services','Testimonials', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <Link 
                    key={item} 
                    href={`#${sectionId}`} 
                    sx={{
                      color: activeSection === sectionId ? Theme.palette.primary.main : 'black',
                      textDecoration: 'none',
                      fontWeight: activeSection === sectionId ? 600 : 500,
                      fontFamily: 'Roboto, sans-serif', // Custom font added here
                      position: 'relative',
                      '&:hover': { 
                        color: Theme.palette.primary.main,
                        transform: 'translateX(5px)',
                        fontWeight: 500
                      },
                      transition: 'all 0.25s ease',
                      px: 0.5,
                      py: 0.5,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: activeSection === sectionId ? '100%' : '0%',
                        height: '2px',
                        backgroundColor: Theme.palette.primary.main,
                        transition: 'width 0.3s ease',
                      },
                    }}
                  >
                    {item}
                  </Link>
                );
              })}
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={3} data-aos="fade-up" data-aos-delay="200">
            <Box sx={{ 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-end' },
              gap: 3,
              mt: { xs: 2, md: 0 }
            }}>
              {[ 
                { icon: <Facebook fontSize="medium" />, color: '#1877F2', link: 'https://facebook.com' },
                { icon: <Twitter fontSize="medium" />, color: '#1DA1F2', link: 'https://twitter.com' },
                { icon: <Instagram fontSize="medium" />, color: '#E4405F', link: 'https://instagram.com' },
                { icon: <LinkedIn fontSize="medium" />, color: '#0A66C2', link: 'https://linkedin.com' }
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.icon.type.name} page`}
                  sx={{
                    color: '#495057',
                    transition: 'all 0.25s ease',
                    '&:hover': { 
                      color: social.color,
                      transform: 'translateY(-3px)'
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: '1.75rem'
                    }
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Copyright Section */}
          <Grid item xs={12} data-aos="fade-up" data-aos-delay="300">
            <Box sx={{ 
              pt: 4,
              mt: 4,
              borderTop: '1px solid #dee2e6',
              textAlign: 'center',
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: '-1px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '2px',
                background: 'linear-gradient(90deg, #2196F3, #4CAF50)',
                transition: 'width 0.3s ease',
                opacity: 0.8
              },
              '&:hover:before': {
                width: '150px' // More reasonable expansion
              }
            }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#6c757d',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  fontFamily: 'Roboto, sans-serif', // Added font here too
                }}
              >
                © {currentYear} Medicare. All rights reserved.
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
