import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  useMediaQuery, 
  IconButton, 
  Drawer, 
  Container,
  useScrollTrigger,
  Typography,
  Stack,
  Button
} from '@mui/material';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LetsTalkButton from '../LetsTalkButton';
import Chatbot from '../Chatbot';
import Logo from "../../Imag/Logo/Logo.png";
import theme from "../../Theme";

// Scroll handler
function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: theme.palette.secondary.main,
      backdropFilter: trigger ? 'blur(8px)' : 'none',
      transition: 'all 0.3s ease-in-out',
    }
  });
}

const TopBar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <AppBar position="static" sx={{ 
      background: theme.palette.primary.main,
      py: 0.5,
      boxShadow: 'none',
      borderBottom: '1px solid rgba(255,255,255,0.15)',
    }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ 
          minHeight: '40px !important',
          justifyContent: 'space-between',
          px: { xs: 2, md: 6 },
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 1.5, md: 4 },
            overflow: 'hidden',
          }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon sx={{ color: 'white', fontSize: '1rem', opacity: 0.9 }} />
              <Typography 
                component="a"
                href="tel:+919999900000"
                variant="caption" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                +91 99999 00000
              </Typography>
            </Stack>

            {!isMobile && (
              <>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <EmailIcon sx={{ color: 'white', fontSize: '1rem', opacity: 0.9 }} />
                  <Typography 
                    component="a"
                    href="mailto:help@medocare.com"
                    variant="caption" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    help@medocare.com
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOnIcon sx={{ color: 'white', fontSize: '1rem', opacity: 0.9 }} />
                  <Typography 
                    component="a"
                    href="https://maps.google.com/?q=Delhi+NCR,India"
                    target="_blank"
                    variant="caption" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    Delhi NCR, India
                  </Typography>
                </Stack>
              </>
            )}
          </Box>

          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {[ 
              { icon: <FacebookIcon />, link: 'www.facebook.com/medocare' },
              { icon: <TwitterIcon />, link: 'www.twitter.com/medocare' },
              { icon: <InstagramIcon />, link: 'www.instagram.com/medocare' },
              { icon: <LinkedInIcon />, link: 'www.linkedin.com/company/medocare' },
            ].map((item, index) => (
              <IconButton 
                key={index}
                href={`https://${item.link}`} 
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ 
                  color: 'white',
                  p: 0.75,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    transform: 'scale(1.1)'
                  }
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const NavItems = ({ activeSection, isMobile = false, handleClose }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
      {sections.map((section) => (
        <Button
          key={section.id}
          component={Link}
          to={section.id}
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          onClick={handleClose}
          sx={{
            color: activeSection === section.id ? 'primary.main' : '#000',
            fontWeight: activeSection === section.id ? 600 : 500,
            px: { xs: 2, sm: 3 },
            position: 'relative',
            borderRadius: 0,
            textTransform: 'none',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: activeSection === section.id ? '100%' : '0%',
              height: '2px',
              backgroundColor: 'primary.main',
              transition: 'width 0.3s ease',
            },
          }}
        >
          {section.label}
        </Button>
      ))}
    </Box>
  );
};

const MainNavbar = ({ activeSection, isMobile }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <TopBar />
      <ElevationScroll>
        <AppBar position="sticky" sx={{ 
          borderBottom: '1px solid',
          borderColor: 'divider',
          boxShadow: 'none'
        }}>
          <Container maxWidth="xl">
            <Toolbar sx={{ 
              justifyContent: 'space-between', 
              py: 1, 
              px: { xs: 2, md: 6 },
              minHeight: '64px !important'
            }}>
              <Box 
                component={Link}
                to="home"
                spy
                smooth
                duration={500}
                sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none' }}
              >
                <img 
                  src={Logo} 
                  alt="Medocare Logo" 
                  style={{ height: '56px', width: 'auto' }} 
                />
              </Box>

              {!isMobile && (
                <Box sx={{ 
                  position: 'absolute', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  display: 'flex'
                }}>
                  <NavItems activeSection={activeSection} />
                </Box>
              )}

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LetsTalkButton 
                  onClick={() => setChatOpen(true)} 
                  isMobile={isMobile}
                />
                {isMobile && (
                  <IconButton
                    size="large"
                    onClick={handleDrawerToggle}
                    sx={{ color: 'text.primary' }}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Box>
            </Toolbar>
          </Container>

          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              '& .MuiDrawer-paper': { 
                width: '65%', 
                minWidth: '280px', 
                boxSizing: 'border-box', 
                p: 2,
                backgroundColor: theme.palette.secondary.main,
                overflowX: 'hidden'
              },
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <img 
                src={Logo} 
                alt="Medocare Logo" 
                style={{ height: '60px', margin: '16px 0' }} 
              />
              <NavItems 
                activeSection={activeSection} 
                isMobile 
                handleClose={handleDrawerToggle}
              />
            </Box>
          </Drawer>
        </AppBar>
      </ElevationScroll>

      <Chatbot open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
};

export default MainNavbar;
