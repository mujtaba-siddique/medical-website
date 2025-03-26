

// import React, { useEffect } from 'react';
// import { Box, Typography, Grid, useTheme } from '@mui/material';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import img1 from "../Imag/Services/img1.png";
// import img2 from "../Imag/Services/img2.png";
// import img3 from "../Imag/Services/img3.png";
// import img4 from "../Imag/Services/img4.png";
// import img5 from "../Imag/Services/img5.png";
// import img6 from "../Imag/Services/img6.png";

// const servicesData = [
//   { img: img1, title: "Service 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
//   { img: img2, title: "Service 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
//   { img: img3, title: "Service 3", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
//   { img: img4, title: "Service 4", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
//   { img: img5, title: "Service 5", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
//   { img: img6, title: "Service 6", description: "Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Duis aute irure dolor in reprehenderit in voluptate velit esse." }
// ];

// const Services = ({ id }) => {
//   const theme = useTheme();

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       mirror: false,
//     });
//   }, []);

//   return (
//     <Box 
//       id={id} 
//       sx={{ 
//         padding: { xs: 3, sm: 4, md: 8 },
//         backgroundColor: theme.palette.background.default,
//         overflow: 'hidden',
//       }}
//     >
//       {/* Heading Section */}
//       <Typography 
//         variant="h3" 
//         sx={{
//           color: theme.palette.primary.main,
//           textAlign: 'center',
//           mb: { xs: 4, md: 8 },
//           fontWeight: 700,
//           fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
//           lineHeight: 1.2,
//           px: 2,
//         }}
//         data-aos="fade-down"
//       >
//         Our Main Services
//       </Typography>

//       {/* Services Grid */}
//       <Grid 
//         container 
//         spacing={{ xs: 3, md: 4 }}
//         justifyContent="center"
//         sx={{
//           margin: '0 auto',
//           maxWidth: '1200px',
//           px: { xs: 0, sm: 2 },
//         }}
//       >
//         {servicesData.map((service, index) => (
//           <Grid 
//             item 
//             xs={12}  // Full width on mobile
//             sm={6} 
//             md={4} 
//             lg={4}
//             key={index}
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//             data-aos-duration="800"
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//             }}
//           >
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 backgroundColor: theme.palette.background.paper,
//                 borderRadius: 3,
//                 overflow: 'hidden',
//                 transition: 'all 0.3s ease',
//                 width: '100%',
//                 minHeight: '320px',
//                 p: { xs: 2, sm: 3 },
//                 position: 'relative',
//                 boxShadow: theme.shadows[2],
//                 '&:hover': {
//                   transform: 'scale(1.03)', // Hover effect remains for desktop
//                   boxShadow: theme.shadows[4],
//                   backgroundColor: theme.palette.secondary.main, // Updated background color on hover
//                   '& .service-image': {
//                     transform: 'scale(1.1)', // Image scaling on hover
//                   },
//                   '& .service-title, & .service-description': {
//                     color: theme.palette.secondary.contrastText, // Adjust text color for better contrast
//                   },
//                 },
//               }}
//             >
//               {/* Image Container */}
//               <Box
//                 className="service-image"
//                 sx={{
//                   width: { xs: 90, sm: 100, md: 120 },
//                   height: { xs: 90, sm: 100, md: 120 },
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   backgroundColor: theme.palette.grey[100],
//                   borderRadius: '50%',
//                   border: `2px solid ${theme.palette.primary.main}`,
//                   transition: 'all 0.3s ease',
//                   overflow: 'hidden',
//                   p: 1,
//                   mb: 1,
//                 }}
//               >
//                 <img
//                   src={service.img}
//                   alt={service.title}
//                   style={{
//                     width: '70%',
//                     height: '70%',
//                     objectFit: 'contain',
//                   }}
//                 />
//               </Box>

//               {/* Service Title */}
//               <Typography 
//                 className="service-title"
//                 variant="h6" 
//                 sx={{
//                   fontWeight: 600,
//                   color: theme.palette.text.primary,
//                   mt: { xs: 1, sm: 2 },
//                   mb: 1,
//                   textAlign: 'center',
//                   fontSize: { xs: '1.1rem', sm: '1.2rem' },
//                   lineHeight: 1.3,
//                 }}
//               >
//                 {service.title}
//               </Typography>

//               {/* Service Description */}
//               <Typography 
//                 className="service-description"
//                 variant="body2" 
//                 sx={{
//                   color: theme.palette.text.secondary,
//                   textAlign: 'center',
//                   lineHeight: 1.5,
//                   px: { xs: 0.5, sm: 1 },
//                   fontSize: { xs: '0.875rem', sm: '0.9rem' },
//                   overflow: 'hidden',
//                   display: '-webkit-box',
//                   WebkitLineClamp: 3,
//                   WebkitBoxOrient: 'vertical',
//                 }}
//               >
//                 {service.description}
//               </Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Services;


import React, { useEffect } from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../Imag/Services/img1.png"; // Kidney
import img2 from "../Imag/Services/img2.png"; // Thoracic
import img3 from "../Imag/Services/img3.png"; // Liver
import img4 from "../Imag/Services/img4.png"; // Surgery
import img5 from "../Imag/Services/img5.png"; // Emergency
import img6 from "../Imag/Services/img6.png"; // Stomach

const servicesData = [
  { 
    img: img1, 
    title: "Kidney Care", 
    description: "Our kidney care service focuses on early diagnosis, preventive care, and advanced treatments for kidney-related conditions like chronic kidney disease and kidney failure. We offer dialysis, kidney transplant options, and specialized care for your kidney health."
  },
  { 
    img: img2, 
    title: "Thoracic Care", 
    description: "We provide comprehensive thoracic care, including treatment for lung diseases, chest infections, and conditions like asthma and COPD. Our experts offer personalized care and innovative treatments to improve your respiratory health."
  },
  { 
    img: img3, 
    title: "Liver Health", 
    description: "Our liver health services cover the diagnosis and treatment of liver conditions such as cirrhosis, hepatitis, and fatty liver disease. We offer non-invasive testing, liver transplantation, and a range of medical interventions for better liver function."
  },
  { 
    img: img4, 
    title: "Surgical Services", 
    description: "Our surgical team provides both elective and emergency surgeries with cutting-edge technology and minimal-invasive procedures. Whether it’s a routine surgery or a complex operation, we ensure the highest standards of care and recovery."
  },
  { 
    img: img5, 
    title: "Emergency Care", 
    description: "Our emergency care department is available 24/7 to treat a wide range of critical conditions. From trauma and heart attacks to strokes and sudden illnesses, our highly skilled team is ready to provide immediate care when you need it the most."
  },
  { 
    img: img6, 
    title: "Gastrointestinal Care", 
    description: "We specialize in the diagnosis and treatment of stomach and digestive issues like IBS, ulcers, and acid reflux. Our services include endoscopic examinations, nutritional counseling, and advanced treatments for gastrointestinal disorders."
  }
];

const Services = ({ id }) => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <Box 
      id={id} 
      sx={{ 
        padding: { xs: 3, sm: 4, md: 8 },
        backgroundColor: theme.palette.background.default,
        overflow: 'hidden',
      }}
    >
      {/* Heading Section */}
      <Typography 
        variant="h3" 
        sx={{
          color: theme.palette.primary.main,
          textAlign: 'center',
          mb: { xs: 4, md: 8 },
          fontWeight: 700,
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
          lineHeight: 1.2,
          px: 2,
        }}
        data-aos="fade-down"
      >
        Our Main Services
      </Typography>

      {/* Services Grid */}
      <Grid 
        container 
        spacing={{ xs: 3, md: 4 }}
        justifyContent="center"
        sx={{
          margin: '0 auto',
          maxWidth: '1200px',
          px: { xs: 0, sm: 2 },
        }}
      >
        {servicesData.map((service, index) => (
          <Grid 
            item 
            xs={12}  // Full width on mobile
            sm={6} 
            md={4} 
            lg={4}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: theme.palette.background.paper,
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                width: '100%',
                minHeight: '320px',
                p: { xs: 2, sm: 3 },
                position: 'relative',
                boxShadow: theme.shadows[2],
                '&:hover': {
                  transform: 'scale(1.03)', // Hover effect remains for desktop
                  boxShadow: theme.shadows[4],
                  backgroundColor: theme.palette.secondary.main, // Updated background color on hover
                  '& .service-image': {
                    transform: 'scale(1.1)', // Image scaling on hover
                  },
                  '& .service-title, & .service-description': {
                    color: theme.palette.secondary.contrastText, // Adjust text color for better contrast
                  },
                },
              }}
            >
              {/* Image Container */}
              <Box
                className="service-image"
                sx={{
                  width: { xs: 90, sm: 100, md: 120 },
                  height: { xs: 90, sm: 100, md: 120 },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: theme.palette.grey[100],
                  borderRadius: '50%',
                  border: `2px solid ${theme.palette.primary.main}`,
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  p: 1,
                  mb: 1,
                }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  style={{
                    width: '70%',
                    height: '70%',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* Service Title */}
              <Typography 
                className="service-title"
                variant="h6" 
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mt: { xs: 1, sm: 2 },
                  mb: 1,
                  textAlign: 'center',
                  fontSize: { xs: '1.1rem', sm: '1.2rem' },
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </Typography>

              {/* Service Description */}
              <Typography 
                className="service-description"
                variant="body2" 
                sx={{
                  color: theme.palette.text.secondary,
                  textAlign: 'center',
                  lineHeight: 1.5,
                  px: { xs: 0.5, sm: 1 },
                  fontSize: { xs: '0.875rem', sm: '0.9rem' },
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
