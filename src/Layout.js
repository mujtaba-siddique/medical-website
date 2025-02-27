import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';

const Layout = () => {
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100; // Adjust offset for better detection

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          // Check if scroll position is within the section bounds
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* Navbar */}
        <Navbar activeSection={activeSection} isMobile={isMobile} />

        {/* Main Content */}
        <Box sx={{ paddingTop: isMobile ? '56px' : '64px', minHeight: '100vh' }}>
          <Home id="home" />
          <About id="about" />
          <Services id="services" />
          <Testimonials id="testimonials" />
          <Contact id="contact" />
        </Box>

        {/* Footer */}
        <Footer activeSection={activeSection} />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;