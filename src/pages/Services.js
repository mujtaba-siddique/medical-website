// // import React, { useEffect } from 'react';
// // import { Box, Typography, Grid, useTheme } from '@mui/material';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';
// // import img1 from "../Imag/Services/img1.png";
// // import img2 from "../Imag/Services/img2.png";
// // import img3 from "../Imag/Services/img3.png";
// // import img4 from "../Imag/Services/img4.png";
// // import img5 from "../Imag/Services/img5.png";
// // import img6 from "../Imag/Services/img6.png";

// // const servicesData = [
// //   { img: img1, title: "Service 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
// //   { img: img2, title: "Service 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
// //   { img: img3, title: "Service 3", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
// //   { img: img4, title: "Service 4", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
// //   { img: img5, title: "Service 5", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
// //   { img: img6, title: "Service 6", description: "Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Duis aute irure dolor in reprehenderit in voluptate velit esse." }
// // ];

// // const Services = ({ id }) => {
// //   const theme = useTheme();

// //   // Initialize AOS
// //   useEffect(() => {
// //     AOS.init({
// //       duration: 800, // Animation duration
// //       once: false, // Only animate once
// //       // offset: 120, // Offset (in pixels) from the original trigger point
      
// //     });
// //   }, []);

// //   return (
// //     <Box 
// //       id={id} 
// //       sx={{ 
// //         padding: { xs: 4, md: 8 },
// //         backgroundColor: theme.palette.background.default,
// //       }}
// //     >
// //       {/* Heading Section */}
// //       <Typography 
// //         variant="h3" 
// //         sx={{
// //           color: theme.palette.primary.main,
// //           textAlign: 'center',
// //           mb: 8,
// //           fontWeight: 700,
// //           [theme.breakpoints.down('md')]: {
// //             fontSize: '2rem',
// //             mb: 4
// //           }
// //         }}
// //         data-aos="fade-down"
// //       >
// //         Our Main Services
// //       </Typography>

// //       {/* Services Grid */}
// //       <Grid 
// //         container 
// //         spacing={{ xs: 4, md: 8 }}
// //         justifyContent="center"
// //         sx={{
// //           margin: '0 auto',
// //           maxWidth: '1200px',
// //         }}
// //       >
// //         {servicesData.map((service, index) => (
// //           <Grid 
// //             item 
// //             xs={12} 
// //             sm={6} 
// //             md={4} 
// //             key={index}
// //             data-aos="fade-up"
// //             data-aos-delay={index * 100} // Staggered delay
// //             data-aos-duration="800"
// //           >
// //             <Box
// //               sx={{
// //                 display: 'flex',
// //                 flexDirection: 'column',
// //                 alignItems: 'center',
// //                 backgroundColor: "#EEEEEE",
// //                 borderRadius: 3,
// //                 overflow: 'hidden',
// //                 transition: 'all 0.3s ease',
// //                 height: '100%',
// //                 p: 3,
// //                 position: 'relative',
// //                 '&:hover': {
// //                   transform: 'scale(1.05)',
// //                   zIndex: 1,
// //                   boxShadow: theme.shadows[6],
// //                   backgroundColor: theme.palette.secondary.main,
// //                   '& .service-image': {
// //                     borderColor: theme.palette.secondary.main,
// //                   },
// //                   '& .service-title': {
// //                     color: "black",
// //                   }
// //                 }
// //               }}
// //             >
// //               {/* Image Container */}
// //               <Box
// //                 className="service-image"
// //                 sx={{
// //                   width: 120,
// //                   height: 120,
// //                   display: 'flex',
// //                   justifyContent: 'center',
// //                   alignItems: 'center',
// //                   backgroundColor: theme.palette.grey[100],
// //                   borderRadius: '50%',
// //                   border: `2px solid ${theme.palette.primary.main}`,
// //                   transition: 'border-color 0.3s ease',
// //                   overflow: 'hidden',
// //                   p: 1
// //                 }}
// //               >
// //                 <img
// //                   src={service.img}
// //                   alt={service.title}
// //                   style={{
// //                     width: '70%',
// //                     height: '70%',
// //                     objectFit: 'contain',
// //                   }}
// //                 />
// //               </Box>

// //               {/* Service Title */}
// //               <Typography 
// //                 className="service-title"
// //                 variant="h6" 
// //                 sx={{
// //                   fontWeight: 600,
// //                   color: "Black",
// //                   mt: 3,
// //                   mb: 1,
// //                   textAlign: 'center',
// //                   transition: 'color 0.3s ease'
// //                 }}
// //               >
// //                 {service.title}
// //               </Typography>

// //               {/* Service Description */}
// //               <Typography 
// //                 variant="body2" 
// //                 color="text.secondary"
// //                 sx={{
// //                   textAlign: 'center',
// //                   lineHeight: 1.6,
// //                   px: 1
// //                 }}
// //               >
// //                 {service.description}
// //               </Typography>
// //             </Box>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default Services;


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
//       once: true, // Change to true for better mobile experience
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
//             xs={11}  // Slightly reduced width for better mobile spacing
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
//               maxWidth: { xs: '400px', sm: 'none' }, // Prevent card stretching on large screens
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
//                   transform: { xs: 'none', sm: 'scale(1.03)' }, // Disable hover effect on mobile
//                   boxShadow: theme.shadows[4],
//                   backgroundColor: theme.palette.background.paper,
//                   '& .service-image': {
//                     transform: { xs: 'none', sm: 'scale(1.1)' },
//                   },
//                 },
//                 '&:active': {
//                   transform: { xs: 'scale(0.98)', sm: 'none' }, // Add tap feedback for mobile
//                 }
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
//                   backgroundColor: theme.palette.background.paper,
//                   '& .service-image': {
//                     transform: 'scale(1.1)', // Image scaling on hover
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
import img1 from "../Imag/Services/img1.png";
import img2 from "../Imag/Services/img2.png";
import img3 from "../Imag/Services/img3.png";
import img4 from "../Imag/Services/img4.png";
import img5 from "../Imag/Services/img5.png";
import img6 from "../Imag/Services/img6.png";

const servicesData = [
  { img: img1, title: "Service 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
  { img: img2, title: "Service 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
  { img: img3, title: "Service 3", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
  { img: img4, title: "Service 4", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
  { img: img5, title: "Service 5", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
  { img: img6, title: "Service 6", description: "Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Duis aute irure dolor in reprehenderit in voluptate velit esse." }
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