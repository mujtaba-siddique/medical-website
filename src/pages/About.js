

// // import React, { useState } from 'react';
// // import { Box, Typography, Button, Grid, Modal, Paper } from '@mui/material';
// // import AboutPic from "../Imag/About/AboutPic.png";
// // import AboutPicMedal from "../Imag/About/medal-star.png";
// // import WhiteIcon from "../Imag/About/WhiteIcon.png";

// // const About = () => {
// //   const [open, setOpen] = useState(false); // State to manage modal open/close

// //   // Function to handle modal open
// //   const handleOpen = () => setOpen(true);

// //   // Function to handle modal close
// //   const handleClose = () => setOpen(false);

// //   return (
// //     <Box id="about" sx={{ height: '100vh', backgroundColor: '#EEEEEE', padding: 4 }}>
// //       <Grid container spacing={4} sx={{ height: '100%', alignItems: 'center' }}>
// //         {/* Left Grid - Image */}
// //         <Grid item xs={12} md={6} data-aos="fade-right">
// //           <Box
// //             component="img"
// //             src={AboutPic}
// //             alt="About"
// //             sx={{
// //               width: '100%',
// //               height: '400px',
// //               objectFit: 'cover',
// //               borderRadius: '8px'
// //             }}
// //           />
// //         </Grid>

// //         {/* Right Grid - Content */}
// //         <Grid item xs={12} md={6}>
// //           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// //             <Typography
// //               variant="h4"
// //               component="div"
// //               sx={{ mr: 2 }}
// //               data-aos="fade-down"
// //               data-aos-delay="200"
// //             >
// //               DR. JOHN DOE
// //             </Typography>
// //             <Box
// //               component="img"
// //               src={AboutPicMedal}
// //               alt="Medal"
// //               sx={{ width: 40, height: 40 }}
// //               data-aos="zoom-in"
// //               data-aos-delay="400"
// //             />
// //           </Box>

// //           <Typography
// //             variant="body1"
// //             paragraph
// //             data-aos="fade-up"
// //             data-aos-delay="300"
// //           >
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
// //           </Typography>

// //           <Typography
// //             variant="body1"
// //             paragraph
// //             data-aos="fade-up"
// //             data-aos-delay="400"
// //           >
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
// //           </Typography>

// //           {/* Learn More Button */}
// //           <Button
// //             variant="contained"
// //             endIcon={<img src={WhiteIcon} alt="icon" style={{ width: 20, height: 20 }} />}
// //             sx={{
// //               backgroundColor: 'primary.main',
// //               color: 'white',
// //               '&:hover': {
// //                 backgroundColor: 'primary.dark',
// //               },
// //               px: 3,
// //               py: 1,
// //               borderRadius: '4px'
// //             }}
// //             data-aos="zoom-in"
// //             data-aos-delay="500"
// //             onClick={handleOpen} // Open modal on button click
// //           >
// //             Learn More
// //           </Button>
// //         </Grid>
// //       </Grid>

// //       {/* Modal */}
// //       <Modal
// //         open={open} // Control modal open/close
// //         onClose={handleClose} // Close modal on backdrop click or escape key
// //         aria-labelledby="modal-title"
// //         aria-describedby="modal-description"
// //         sx={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //         }}
// //       >
// //         <Paper
// //           sx={{
// //             width: '80%',
// //             maxWidth: '600px',
// //             padding: 4,
// //             borderRadius: '8px',
// //             outline: 'none',
// //           }}
// //         >
// //           <Typography id="modal-title" variant="h5" component="h2" sx={{ mb: 2 }}>
// //             More About DR. Priya
// //           </Typography>
// //           <Typography id="modal-description" variant="body1" paragraph>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// //           </Typography>
// //           <Typography variant="body1" paragraph>
// //             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// //           </Typography>
// //           <Button
// //             variant="contained"
// //             onClick={handleClose} // Close modal on button click
// //             sx={{
// //               mt: 2,
// //               backgroundColor: 'primary.main',
// //               color: 'white',
// //               '&:hover': {
// //                 backgroundColor: 'primary.dark',
// //               },
// //             }}
// //           >
// //             Close
// //           </Button>
// //         </Paper>
// //       </Modal>
// //     </Box>
// //   );
// // };

// // export default About;


// import React, { useState } from 'react';
// import { Box, Typography, Button, Grid, Modal, Paper } from '@mui/material';
// import AboutPic from "../Imag/About/AboutPic.png";
// import AboutPicMedal from "../Imag/About/medal-star.png";
// import WhiteIcon from "../Imag/About/WhiteIcon.png";

// const About = () => {
//   const [open, setOpen] = useState(false); // State to manage modal open/close

//   // Function to handle modal open
//   const handleOpen = () => setOpen(true);

//   // Function to handle modal close
//   const handleClose = () => setOpen(false);

//   return (
//     <Box id="about" sx={{ height: '100vh', backgroundColor: '#EEEEEE', padding: 4 }}>
//       <Grid container spacing={4} sx={{ height: '100%', alignItems: 'center' }}>
//         {/* Left Grid - Image */}
//         <Grid item xs={12} md={6} data-aos="fade-right">
//           <Box
//             component="img"
//             src={AboutPic}
//             alt="About"
//             sx={{
//               width: '100%',
//               height: '400px',
//               objectFit: 'cover',
//               borderRadius: '8px'
//             }}
//           />
//         </Grid>

//         {/* Right Grid - Content */}
//         <Grid item xs={12} md={6}>
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//             <Typography
//               variant="h4"
//               component="div"
//               sx={{ mr: 2 }}
//               data-aos="fade-down"
//               data-aos-delay="200"
//             >
//               DR. JOHN DOE
//             </Typography>
//             <Box
//               component="img"
//               src={AboutPicMedal}
//               alt="Medal"
//               sx={{ width: 40, height: 40 }}
//               data-aos="zoom-in"
//               data-aos-delay="400"
//             />
//           </Box>

//           <Typography
//             variant="body1"
//             paragraph
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             Dr. John Doe is a highly regarded physician specializing in internal medicine with over 20 years of experience in diagnosing and treating complex medical conditions. He graduated from one of the top medical schools in the country and has dedicated his career to helping patients achieve better health through comprehensive care and innovative treatments.
//           </Typography>

//           <Typography
//             variant="body1"
//             paragraph
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             With a passion for research, Dr. Doe has authored several studies in reputable medical journals, focusing on chronic diseases and how lifestyle changes can significantly improve patient outcomes. He believes in a holistic approach to health, considering both physical and mental aspects of well-being.
//           </Typography>

//           {/* Learn More Button */}
//           <Button
//             variant="contained"
//             endIcon={<img src={WhiteIcon} alt="icon" style={{ width: 20, height: 20 }} />}
//             sx={{
//               backgroundColor: 'primary.main',
//               color: 'white',
//               '&:hover': {
//                 backgroundColor: 'primary.dark',
//               },
//               px: 3,
//               py: 1,
//               borderRadius: '4px'
//             }}
//             data-aos="zoom-in"
//             data-aos-delay="500"
//             onClick={handleOpen} // Open modal on button click
//           >
//             Learn More
//           </Button>
//         </Grid>
//       </Grid>

//       {/* Modal */}
//       <Modal
//         open={open} // Control modal open/close
//         onClose={handleClose} // Close modal on backdrop click or escape key
//         aria-labelledby="modal-title"
//         aria-describedby="modal-description"
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Paper
//           sx={{
//             width: '80%',
//             maxWidth: '600px',
//             padding: 4,
//             borderRadius: '8px',
//             outline: 'none',
//           }}
//         >
//           <Typography id="modal-title" variant="h5" component="h2" sx={{ mb: 2 }}>
//             More About DR. JOHN DOE
//           </Typography>
//           <Typography id="modal-description" variant="body1" paragraph>
//             Dr. John Doe has spent over two decades helping patients navigate complex health conditions. He is a leader in the field of internal medicine, particularly known for his work on managing long-term diseases like diabetes and hypertension. His approach combines the latest in medical technology with compassionate care to ensure the best possible outcomes for his patients.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Throughout his career, Dr. Doe has been recognized with numerous awards, including the Medical Excellence Award and the Compassionate Care Award, which highlight his dedication to both his profession and his patients. He is also an advocate for preventative care and believes in empowering his patients to make informed decisions about their health.
//           </Typography>
//           <Button
//             variant="contained"
//             onClick={handleClose} // Close modal on button click
//             sx={{
//               mt: 2,
//               backgroundColor: 'primary.main',
//               color: 'white',
//               '&:hover': {
//                 backgroundColor: 'primary.dark',
//               },
//             }}
//           >
//             Close
//           </Button>
//         </Paper>
//       </Modal>
//     </Box>
//   );
// };

// export default About;


import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Modal, Paper } from '@mui/material';
import AboutPic from "../Imag/About/AboutPic.png";
import AboutPicMedal from "../Imag/About/medal-star.png";
import WhiteIcon from "../Imag/About/WhiteIcon.png";

const About = () => {
  const [open, setOpen] = useState(false); // State to manage modal open/close

  // Function to handle modal open
  const handleOpen = () => setOpen(true);

  // Function to handle modal close
  const handleClose = () => setOpen(false);

  return (
    <Box id="about" sx={{ height: '100vh', backgroundColor: '#EEEEEE', padding: 4 }}>
      <Grid container spacing={4} sx={{ height: '100%', alignItems: 'center' }}>
        {/* Left Grid - Image */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Box
            component="img"
            src={AboutPic}
            alt="About"
            sx={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
        </Grid>

        {/* Right Grid - Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography
              variant="h4"
              component="div"
              sx={{ mr: 2 }}
              data-aos="fade-down"
              data-aos-delay="200"
            >
              DR. JOHN DOE
            </Typography>
            <Box
              component="img"
              src={AboutPicMedal}
              alt="Medal"
              sx={{ width: 40, height: 40 }}
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </Box>

          <Typography
            variant="body1"
            paragraph
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Dr. John Doe is a highly regarded physician specializing in internal medicine with over 20 years of experience in diagnosing and treating complex medical conditions. He graduated from one of the top medical schools in the country and has dedicated his career to helping patients achieve better health through comprehensive care and innovative treatments.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            data-aos="fade-up"
            data-aos-delay="400"
          >
            With a passion for research, Dr. Doe has authored several studies in reputable medical journals, focusing on chronic diseases and how lifestyle changes can significantly improve patient outcomes. He believes in a holistic approach to health, considering both physical and mental aspects of well-being.
          </Typography>

          {/* Learn More Button */}
          <Button
            variant="contained"
            endIcon={<img src={WhiteIcon} alt="icon" style={{ width: 20, height: 20 }} />}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
              px: 3,
              py: 1,
              borderRadius: '4px'
            }}
            data-aos="zoom-in"
            data-aos-delay="500"
            onClick={handleOpen} // Open modal on button click
          >
            Learn More
          </Button>
        </Grid>
      </Grid>

      {/* Modal */}
      <Modal
        open={open} // Control modal open/close
        onClose={handleClose} // Close modal on backdrop click or escape key
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          sx={{
            width: '80%',
            maxWidth: '600px',
            padding: 4,
            borderRadius: '12px',
            outline: 'none',
            backgroundColor: '#fff',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography id="modal-title" variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
            More About DR. JOHN DOE
          </Typography>
          <Typography id="modal-description" variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Dr. John Doe has spent over two decades helping patients navigate complex health conditions. He is a leader in the field of internal medicine, particularly known for his work on managing long-term diseases like diabetes and hypertension. His approach combines the latest in medical technology with compassionate care to ensure the best possible outcomes for his patients.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Throughout his career, Dr. Doe has been recognized with numerous awards, including the Medical Excellence Award and the Compassionate Care Award, which highlight his dedication to both his profession and his patients. He is also an advocate for preventative care and believes in empowering his patients to make informed decisions about their health.
          </Typography>
          <Button
            variant="contained"
            onClick={handleClose} // Close modal on button click
            sx={{
              mt: 3,
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
              px: 4,
              py: 1.5,
              borderRadius: '8px',
              width: '100%',
            }}
          >
            Close
          </Button>
        </Paper>
      </Modal>
    </Box>
  );
};

export default About;
