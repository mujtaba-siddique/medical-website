// // import React, { useState } from 'react';
// // import { Box, Typography, Button, Grid, Modal } from '@mui/material';
// // import theme from './Theme';
// // import HomePic from './Imag/Home/HomePagePic.png';
// // import ButtonIcon from './Imag/Home/WhiteIcon.png';
// // import AppointmentForm from './components/AppointmentForm';

// // const Home = () => {
// //   const [open, setOpen] = useState(false);

// //   const handleOpen = () => setOpen(true);
// //   const handleClose = () => setOpen(false);

// //   return (
// //     <Box
// //       id="home"
// //       sx={{
// //         padding: { xs: 2, md: 8 },
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //       }}
// //     >
// //       <Grid
// //         container
// //         spacing={4}
// //         sx={{
// //           display: 'flex',
// //           flexDirection: 'row',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           width: '100%',
// //         }}
// //       >
// //         <Grid item xs={12} sm={6}>
// //           <Typography variant="h5" sx={{ color: 'black', fontWeight: 600 }}>
// //             Welcome to
// //           </Typography>

// //           <Box
// //             sx={{
// //               display: 'inline-block',
// //               border: `2px solid ${theme.palette.primary.main}`,
// //               padding: 1,
// //               marginTop: 2,
// //               borderRadius: '4px',
// //               width: '50%',
// //             }}
// //           >
// //             <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
// //               Company Name
// //             </Typography>
// //           </Box>

// //           <Typography variant="h5" sx={{ color: 'black', fontWeight: 600, marginTop: 1 }}>
// //             Specialist in General
// //           </Typography>

// //           <Typography variant="h5" sx={{ color: 'black', fontWeight: 600, marginTop: 1 }}>
// //             Laparoscopic Surgery
// //           </Typography>

// //           <Typography variant="body2" sx={{ color: 'black', marginTop: 2, width: '90%' }}>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, sed do eiusmod tempor incididunt.
// //           </Typography>

// //           <Button
// //   variant="contained"
// //   color="primary"
// //   onClick={handleOpen}
// //   sx={{
// //     marginTop: 3,
// //     width: 'fit-content',
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: 1,
// //     flexDirection: 'row-reverse', // Move the icon to the right
// //   }}
// // >
// //   <img src={ButtonIcon} alt="Button Icon" style={{ width: '20px', height: '20px' }} />
// //   Book an Appointment
// // </Button>
// //         </Grid>

// //         {/* Right side image */}
// //         <Grid item xs={12} sm={6}>
// //           <img
// //             src={HomePic}
// //             alt="Home Page"
// //             style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
// //           />
// //         </Grid>
// //       </Grid>

// //       {/* Modal for Appointment Form */}
// //       <Modal open={open} onClose={handleClose}>
// //         <Box
// //           sx={{
// //             position: 'absolute',
// //             top: '50%',
// //             left: '50%',
// //             transform: 'translate(-50%, -50%)',
// //             width: '90%',
// //             maxWidth: '400px',
// //             bgcolor: 'background.paper',
// //             boxShadow: 24,
// //             p: 4,
// //             borderRadius: '8px',
// //           }}
// //         >
// //           <AppointmentForm onClose={handleClose} />
// //         </Box>
// //       </Modal>
// //     </Box>
// //   );
// // };

// // export default Home;



// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Button, Grid, Modal } from '@mui/material';
// import theme from '../Theme';
// import HomePic from '../Imag/Home/HomePagePic.png';
// import ButtonIcon from '../Imag/Home/WhiteIcon.png';
// import AppointmentForm from '../components/AppointmentForm';
// import AOS from 'aos'; // Import AOS
// import 'aos/dist/aos.css'; // Import AOS CSS

// const Home = () => {
//   const [open, setOpen] = useState(false);
//   const [displayText, setDisplayText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [textIndex, setTextIndex] = useState(0);

//   const texts = ['NEW HOSPITAL', 'Dr. JOHN DOE']; // Texts to cycle through

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   // Typing animation logic
//   useEffect(() => {
//     const currentText = texts[textIndex];
//     let timer;

//     if (isDeleting) {
//       // Delete text
//       timer = setTimeout(() => {
//         setDisplayText(currentText.substring(0, displayText.length - 1));
//       }, 100); // Speed of deleting
//     } else {
//       // Type text
//       timer = setTimeout(() => {
//         setDisplayText(currentText.substring(0, displayText.length + 1));
//       }, 200); // Speed of typing
//     }

//     // Switch between typing and deleting
//     if (!isDeleting && displayText === currentText) {
//       // Pause before deleting
//       setTimeout(() => setIsDeleting(true), 1000);
//     } else if (isDeleting && displayText === '') {
//       // Move to the next text
//       setIsDeleting(false);
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }

//     return () => clearTimeout(timer); // Cleanup timer
//   }, [displayText, isDeleting, textIndex, texts]);

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       once: false, // Allow animations to repeat every time elements come into view
//     });
//   }, []);

//   return (
//     <Box
//       id="home"
//       sx={{
//         padding: { xs: 2, md: 8 },
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Grid
//         container
//         spacing={4}
//         sx={{
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: '100%',
//         }}
//       >
//         {/* Left Side Content */}
//         <Grid item xs={12} sm={6}>
//           <Typography
//             variant="h5"
//             sx={{ color: 'black', fontWeight: 600 }}
//             data-aos="fade-right" // Fade-in from the right
//           >
//             Welcome to
//           </Typography>

//           <Box
//             sx={{
//               display: 'inline-block',
//               border: `2px solid ${theme.palette.primary.main}`,
//               padding: 1,
//               marginTop: 2,
//               borderRadius: '4px',
//               width: '50%',
//             }}
//             data-aos="fade-right" // Fade-in from the right
//             data-aos-delay="100" // Delay the animation
//           >
//             <Typography
//               variant="h5"
//               sx={{ fontWeight: 600, color: theme.palette.primary.main }}
//             >
//               {displayText}
//               <span style={{ borderRight: '2px solid', animation: 'blink 0.75s infinite' }}></span>
//             </Typography>
//           </Box>

//           <Typography
//             variant="h5"
//             sx={{ color: 'black', fontWeight: 600, marginTop: 1 }}
//             data-aos="fade-right" // Fade-in from the right
//             data-aos-delay="200" // Delay the animation
//           >
//             Specialist in General And
//           </Typography>

//           <Typography
//             variant="h5"
//             sx={{ color: 'black', fontWeight: 600, marginTop: 1 }}
//             data-aos="fade-right" // Fade-in from the right
//             data-aos-delay="300" // Delay the animation
//           >
//             Laparoscopic Surgery
//           </Typography>

//           <Typography
//             variant="body2"
//             sx={{ color: 'black', marginTop: 2, width: '90%' }}
//             data-aos="fade-right" // Fade-in from the right
//             data-aos-delay="400" // Delay the animation
//           >
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, sed do eiusmod tempor incididunt.
//           </Typography>

//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleOpen}
//             sx={{
//               marginTop: 3,
//               width: 'fit-content',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 1,
//               flexDirection: 'row-reverse', // Move the icon to the right
//             }}
//             data-aos="fade-right" // Fade-in from the right
//             data-aos-delay="500" // Delay the animation
//           >
//             <img src={ButtonIcon} alt="Button Icon" style={{ width: '20px', height: '20px' }} />
//             Book an Appointment
//           </Button>
//         </Grid>

//         {/* Right Side Image */}
//         <Grid item xs={12} sm={6}>
//           <img
//             src={HomePic}
//             alt="Home Page"
//             style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
//             data-aos="zoom-in" // Zoom-in effect
//             data-aos-delay="100" // Delay the animation
//           />
//         </Grid>
//       </Grid>

//       {/* Modal for Appointment Form */}
//       <Modal open={open} onClose={handleClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '90%',
//             maxWidth: '400px',
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             borderRadius: '8px',
//           }}
//         >
//           <AppointmentForm onClose={handleClose} />
//         </Box>
//       </Modal>

//       {/* Blinking cursor animation */}
//       <style>
//         {`
//           @keyframes blink {
//             0%, 100% { opacity: 1; }
//             50% { opacity: 0; }
//           }
//         `}
//       </style>
//     </Box>
//   );
// };

// export default Home;



import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Modal } from '@mui/material';
import theme from '../Theme';
import HomePic from '../Imag/Home/HomePagePic.png';
import ButtonIcon from '../Imag/Home/WhiteIcon.png';
import AppointmentForm from '../components/AppointmentForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = ['Your Trusted Doctor', 'Dr. John Doe']; // Authentic texts

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, 100);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 200);
    }

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Box
      id="home"
      sx={{
        padding: { xs: 2, md: 8 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            sx={{ color: 'black', fontWeight: 600 }}
            data-aos="fade-right"
          >
            Welcome to
          </Typography>

          <Box
            sx={{
              display: 'inline-block',
              border: `2px solid ${theme.palette.primary.main}`,
              padding: 1,
              marginTop: 2,
              borderRadius: '4px',
              width: '50%',
            }}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: theme.palette.primary.main }}
            >
              {displayText}
              <span style={{ borderRight: '2px solid', animation: 'blink 0.75s infinite' }}></span>
            </Typography>
          </Box>

          <Typography
            variant="h5"
            sx={{ color: 'black', fontWeight: 600, marginTop: 1 }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Your Specialist in General and
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: 'black', fontWeight: 600, marginTop: 1 }}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Laparoscopic Surgery
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: 'black', marginTop: 2, width: '90%' }}
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Providing world-class care with advanced technology and compassionate service. Experience a new level of medical excellence.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            sx={{
              marginTop: 3,
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexDirection: 'row-reverse',
            }}
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <img src={ButtonIcon} alt="Button Icon" style={{ width: '20px', height: '20px' }} />
            Book an Appointment
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <img
            src={HomePic}
            alt="Home Page"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '400px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <AppointmentForm onClose={handleClose} />
        </Box>
      </Modal>

      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </Box>
  );
};

export default Home;
