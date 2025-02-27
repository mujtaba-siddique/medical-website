// import React, { useEffect } from 'react';
// import { Box, Typography, Grid, useTheme } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import img1 from "../Imag/Testimonials/img1.png";
// import img2 from "../Imag/Testimonials/img2.png";
// import img3 from "../Imag/Testimonials/img3.png";
// import img4 from "../Imag/Testimonials/img4.png";

// // Testimonials Data
// const testimonialsData = [
//   {
//     img: img1,
//     name: "Dr. Sarah Johnson",
//     role: "Chief of Cardiology",
//     text: "Revolutionized our patient care system. Reduced diagnosis time by 40% with their advanced medical analytics.",
//     rating: 5,
//   },
//   {
//     img: img2,
//     name: "Dr. Michael Chen",
//     role: "Surgical Director",
//     text: "Their telemedicine platform enabled us to reach 50% more patients in rural areas. Truly life-changing technology.",
//     rating: 4.8,
//   },
//   {
//     img: img3,
//     name: "Emma Williams",
//     role: "Hospital Administrator",
//     text: "Streamlined our entire hospital management system. Efficiency improved by 65% across all departments.",
//     rating: 4.7,
//   },
//   {
//     img: img4,
//     name: "Dr. David Martinez",
//     role: "Neurology Department Head",
//     text: "Precision medicine tools helped us achieve 30% better treatment outcomes. Essential for modern healthcare.",
//     rating: 5,
//   },
//   {
//     img: img2,
//     name: "Dr. Lisa Patel",
//     role: "Emergency Medicine Chief",
//     text: "Real-time patient monitoring system reduced ER wait times by 55%. Incredible impact on critical care.",
//     rating: 4.9,
//   },
// ];

// // Star Rating Component
// const StarRating = ({ rating }) => {
//   const theme = useTheme();
//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
//       {[...Array(5)].map((_, index) => (
//         <Box
//           key={index}
//           sx={{
//             transition: 'all 0.3s ease',
//             transform: 'scale(1)',
//             '&:hover': {
//               transform: 'scale(1.2)',
//             },
//           }}
//         >
//           {index < rating ? (
//             <StarIcon
//               sx={{
//                 fontSize: '1.6rem',
//                 color:
//                   rating >= index + 1
//                     ? theme.palette.warning.main
//                     : theme.palette.divider,
//                 transition: 'color 0.3s ease',
//               }}
//             />
//           ) : (
//             <StarBorderIcon
//               sx={{
//                 fontSize: '1.6rem',
//                 color: theme.palette.divider,
//                 transition: 'color 0.3s ease',
//               }}
//             />
//           )}
//         </Box>
//       ))}
//     </Box>
//   );
// };

// // Testimonials Component
// const Testimonials = () => {
//   const theme = useTheme();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       easing: 'ease-in-out',
//     });
//   }, []);

//   return (
//     <Box
//       id="testimonials"
//       sx={{
//         padding: { xs: 4, md: 8 },
//         backgroundColor: '#EEEEEE', // Updated background color
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Title */}
//       <Typography
//         variant="h2"
//         data-aos="fade-up"
//         sx={{
//           textAlign: 'center',
//           mb: 2,
//           fontWeight: 800,
//           color: theme.palette.primary.dark,
//           fontSize: { xs: '2rem', md: '2.5rem' },
//           letterSpacing: '-0.5px',
//           textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
//         }}
//       >
//         Healthcare Excellence Stories
//       </Typography>

//       {/* Description */}
//       <Typography
//         variant="body1"
//         data-aos="fade-up"
//         data-aos-delay="100"
//         sx={{
//           textAlign: 'center',
//           mb: 6,
//           color: theme.palette.text.secondary,
//           fontSize: { xs: '1rem', md: '1.1rem' },
//           maxWidth: 600,
//           mx: 'auto',
//           lineHeight: 1.7,
//         }}
//       >
//         Trusted by leading medical professionals and healthcare institutions worldwide
//       </Typography>

//       {/* Testimonials Grid */}
//       <Grid container spacing={4} justifyContent="center">
//         {testimonialsData.map((testimonial, index) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             lg={4}
//             key={index}
//             data-aos="fade-right"
//             data-aos-delay={index * 150}
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//             }}
//           >
//             {/* Testimonial Card */}
//             <Box
//               sx={{
//                 width: 300,
//                 height: 300,
//                 backgroundColor: 'white',
//                 borderRadius: 4,
//                 padding: 3,
//                 transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                 transform: 'translateX(0)',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 cursor: 'pointer',
//                 boxShadow: theme.shadows[4],
//                 '&:hover': {
//                   transform: 'translateX(-10px)',
//                   boxShadow: theme.shadows[10],
//                   '& .quoteIcon': {
//                     opacity: 1,
//                     transform: 'translate(0, 0)',
//                   },
//                 },
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   height: 4,
//                   background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                 },
//               }}
//             >
//               {/* Quote Icon */}
//               <Box
//                 className="quoteIcon"
//                 sx={{
//                   position: 'absolute',
//                   top: 16,
//                   right: 16,
//                   opacity: 0,
//                   transform: 'translate(20px, -20px)',
//                   transition: 'all 0.4s ease',
//                   color: theme.palette.primary.light,
//                   fontSize: '3rem',
//                   lineHeight: 1,
//                 }}
//               >
//                 ❞
//               </Box>

//               {/* Image */}
//               <Box
//                 sx={{
//                   width: 80,
//                   height: 80,
//                   borderRadius: '50%',
//                   overflow: 'hidden',
//                   margin: '0 auto 16px',
//                   border: `3px solid ${theme.palette.primary.light}`,
//                   transition: 'transform 0.3s ease',
//                   '&:hover': {
//                     transform: 'scale(1.1)',
//                   },
//                 }}
//               >
//                 <img
//                   src={testimonial.img}
//                   alt={testimonial.name}
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     filter: 'grayscale(20%)',
//                   }}
//                 />
//               </Box>

//               {/* Star Rating */}
//               <StarRating rating={testimonial.rating} />

//               {/* Name */}
//               <Typography
//                 variant="h6"
//                 sx={{
//                   textAlign: 'center',
//                   mb: 1,
//                   fontWeight: 700,
//                   color: theme.palette.primary.dark,
//                   fontSize: '1.1rem',
//                 }}
//               >
//                 {testimonial.name}
//               </Typography>

//               {/* Role */}
//               <Typography
//                 variant="body2"
//                 sx={{
//                   textAlign: 'center',
//                   mb: 1,
//                   color: theme.palette.text.secondary,
//                   fontSize: '0.85rem',
//                   fontWeight: 500,
//                 }}
//               >
//                 {testimonial.role}
//               </Typography>

//               {/* Testimonial Text */}
//               <Typography
//                 variant="body1"
//                 sx={{
//                   textAlign: 'center',
//                   fontStyle: 'italic',
//                   color: theme.palette.text.primary,
//                   lineHeight: 1.5,
//                   fontSize: '0.85rem',
//                   position: 'relative',
//                   zIndex: 1,
//                 }}
//               >
//                 {testimonial.text}
//               </Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Testimonials;



import React, { useEffect } from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../Imag/Testimonials/img1.png";
import img2 from "../Imag/Testimonials/img2.png";
import img3 from "../Imag/Testimonials/img3.png";
import img4 from "../Imag/Testimonials/img4.png";

// Testimonials Data
const testimonialsData = [
  {
    img: img1,
    name: "Dr. Sarah Johnson",
    role: "Chief of Cardiology",
    text: "Revolutionized our patient care system. Reduced diagnosis time by 40% with their advanced medical analytics.",
    rating: 5,
  },
  {
    img: img2,
    name: "Dr. Michael Chen",
    role: "Surgical Director",
    text: "Their telemedicine platform enabled us to reach 50% more patients in rural areas. Truly life-changing technology.",
    rating: 4.8,
  },
  {
    img: img3,
    name: "Emma Williams",
    role: "Hospital Administrator",
    text: "Streamlined our entire hospital management system. Efficiency improved by 65% across all departments.",
    rating: 4.7,
  },
  {
    img: img4,
    name: "Dr. David Martinez",
    role: "Neurology Department Head",
    text: "Precision medicine tools helped us achieve 30% better treatment outcomes. Essential for modern healthcare.",
    rating: 5,
  },
  {
    img: img2,
    name: "Dr. Lisa Patel",
    role: "Emergency Medicine Chief",
    text: "Real-time patient monitoring system reduced ER wait times by 55%. Incredible impact on critical care.",
    rating: 4.9,
  },
];

// Star Rating Component
const StarRating = ({ rating }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      {[...Array(5)].map((_, index) => (
        <Box
          key={index}
          sx={{
            transition: 'all 0.3s ease',
            transform: 'scale(1)',
            '&:hover': {
              transform: 'scale(1.2)',
            },
          }}
        >
          {index < rating ? (
            <StarIcon
              sx={{
                fontSize: '1.6rem',
                color:
                  rating >= index + 1
                    ? theme.palette.warning.main
                    : theme.palette.divider,
                transition: 'color 0.3s ease',
              }}
            />
          ) : (
            <StarBorderIcon
              sx={{
                fontSize: '1.6rem',
                color: theme.palette.divider,
                transition: 'color 0.3s ease',
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

// Testimonials Component
const Testimonials = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Box
      id="testimonials"
      sx={{
        padding: { xs: 4, md: 8 },
        backgroundColor: '#EEEEEE', // Updated background color
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        data-aos="fade-up"
        sx={{
          textAlign: 'center',
          mb: 2,
          fontWeight: 600,
          color: theme.palette.primary.main, // Updated to primary.main
          // fontSize: { xs: '2rem', md: '2.5rem' },
          letterSpacing: '-0.5px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        What Our Great Customers Say About Dr. Priya
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        data-aos="fade-up"
        data-aos-delay="100"
        sx={{
          textAlign: 'center',
          mb: 6,
          color: theme.palette.text.secondary,
          fontSize: { xs: '1rem', md: '1.1rem' },
          maxWidth: 600,
          mx: 'auto',
          lineHeight: 1.7,
        }}
      >
        Trusted by leading medical professionals and healthcare institutions worldwide
      </Typography>

      {/* Testimonials Grid */}
      <Grid container spacing={4} justifyContent="center">
        {testimonialsData.map((testimonial, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={index}
            data-aos="fade-right"
            data-aos-delay={index * 150}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Testimonial Card */}
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: 'white',
                borderRadius: 4,
                padding: 3,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateX(0)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: theme.shadows[4],
                '&:hover': {
                  transform: 'translateX(-10px)',
                  boxShadow: theme.shadows[10],
                  '& .quoteIcon': {
                    opacity: 1,
                    transform: 'translate(0, 0)',
                  },
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                },
              }}
            >
              {/* Quote Icon */}
              <Box
                className="quoteIcon"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  opacity: 0,
                  transform: 'translate(20px, -20px)',
                  transition: 'all 0.4s ease',
                  color: theme.palette.primary.light,
                  fontSize: '3rem',
                  lineHeight: 1,
                }}
              >
                ❞
              </Box>

              {/* Image */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 16px',
                  border: `3px solid ${theme.palette.primary.light}`,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(20%)',
                  }}
                />
              </Box>

              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Name */}
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  mb: 1,
                  fontWeight: 700,
                  color: theme.palette.primary.dark,
                  fontSize: '1.1rem',
                }}
              >
                {testimonial.name}
              </Typography>

              {/* Role */}
              <Typography
                variant="body2"
                sx={{
                  textAlign: 'center',
                  mb: 1,
                  color: theme.palette.text.secondary,
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                {testimonial.role}
              </Typography>

              {/* Testimonial Text */}
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'center',
                  fontStyle: 'italic',
                  color: theme.palette.text.primary,
                  lineHeight: 1.5,
                  fontSize: '0.85rem',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {testimonial.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;