

// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Snackbar,
//   Alert,
//   Grid,
//   useTheme,
// } from '@mui/material';
// import img1 from "../Imag/Contect/img1.png"; // Ensure the image path is correct

// const Contact = () => {
//   const theme = useTheme(); // Access the theme
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     email: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({
//     fullName: '',
//     phone: '',
//     email: '',
//     message: '',
//   });

//   const [success, setSuccess] = useState(false);

//   // Validation functions
//   const validateFullName = (name) => /^[A-Za-z\s]+$/.test(name);
//   const validatePhone = (phone) => /^\d{10}$/.test(phone);
//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   const validateMessage = (message) => message.length >= 10;

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     console.log('Form Data:', formData); // Debugging

//     // Real-time validation
//     switch (name) {
//       case 'fullName':
//         setErrors({ ...errors, fullName: validateFullName(value) ? '' : 'Invalid name' });
//         break;
//       case 'phone':
//         setErrors({ ...errors, phone: validatePhone(value) ? '' : 'Invalid phone number' });
//         break;
//       case 'email':
//         setErrors({ ...errors, email: validateEmail(value) ? '' : 'Invalid email' });
//         break;
//       case 'message':
//         setErrors({ ...errors, message: validateMessage(value) ? '' : 'Message must be at least 10 characters' });
//         break;
//       default:
//         break;
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Final validation
//     const newErrors = {
//       fullName: validateFullName(formData.fullName) ? '' : 'Invalid name',
//       phone: validatePhone(formData.phone) ? '' : 'Invalid phone number',
//       email: validateEmail(formData.email) ? '' : 'Invalid email',
//       message: validateMessage(formData.message) ? '' : 'Message must be at least 10 characters',
//     };

//     console.log('Validation Errors:', newErrors); // Debugging

//     setErrors(newErrors);

//     // Check if form is valid
//     if (Object.values(newErrors).every(error => error === '')) {
//       setSuccess(true);
//       setTimeout(() => {
//         setSuccess(false);
//         setFormData({
//           fullName: '',
//           phone: '',
//           email: '',
//           message: '',
//         });
//       }, 1000);
//     }
//   };

//   return (
//     <Box id="contact" sx={{ padding: 8, paddingTop: 12 }}>
//       <Grid container spacing={4}>
//         {/* Left Grid - Image and Heading */}
//         <Grid item xs={12} md={6}>
//           {/* Heading */}
//           <Box sx={{ textAlign: 'left', mb: 4 }}>
//             <Typography
//               variant="h4"
//               component="span"
//               sx={{ color: 'black', fontWeight: 'bold' }}
//             >
//               Have any questions?
//             </Typography>
//             <br />
//             <Typography
//               variant="h4"
//               component="span"
//               sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}
//             >
//               Just write us a message!
//             </Typography>
//           </Box>

//           {/* Image */}
//           <Box
//             component="img"
//             src={img1}
//             alt="Contact"
//             sx={{
//               width: '100%',
//               height: 'auto',
//               borderRadius: 2,
//               paddingTop: theme.spacing(10),
//               objectFit: 'contain',
//             }}
//           />
//         </Grid>

//         {/* Right Grid - Form */}
//         <Grid item xs={12} md={6}>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 3,
//               border: `2px solid ${theme.palette.grey[300]}`,
//               borderRadius: 4,
//               padding: theme.spacing(4),
//               boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//               backgroundColor: 'white',
//               '&:hover': {
//                 borderColor: theme.palette.primary.main,
//               },
//               transition: 'border-color 0.3s ease',
//             }}
//           >
//             <TextField
//               variant="outlined"
//               label="Full Name"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               error={!!errors.fullName}
//               helperText={errors.fullName}
//               fullWidth
//             />

//             <TextField
//               variant="outlined"
//               label="Phone Number"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               error={!!errors.phone}
//               helperText={errors.phone}
//               fullWidth
//             />

//             <TextField
//               variant="outlined"
//               label="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               error={!!errors.email}
//               helperText={errors.email}
//               fullWidth
//             />

//             <TextField
//               variant="outlined"
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               error={!!errors.message}
//               helperText={errors.message}
//               multiline
//               rows={4}
//               fullWidth
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               sx={{
//                 mt: 2,
//                 py: 1.5,
//                 fontSize: '1.1rem',
//                 backgroundColor: theme.palette.secondary.main,
//                 '&:hover': {
//                   backgroundColor: theme.palette.primary.main,
//                   transform: 'translateY(-1px)',
//                 },
//                 transition: 'all 0.3s ease',
//               }}
//               disabled={
//                 Object.values(errors).some(error => error) ||
//                 Object.values(formData).some(value => !value)
//               }
//             >
//               Submit
//             </Button>

//             <Snackbar
//               open={success}
//               autoHideDuration={1000}
//               onClose={() => setSuccess(false)}
//               anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//             >
//               <Alert severity="success" sx={{ width: '100%' }}>
//                 Form submitted successfully!
//               </Alert>
//             </Snackbar>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Contact;




import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Grid,
  useTheme,
} from '@mui/material';
import img1 from "../Imag/Contect/img1.png"; // Ensure the image path is correct
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const theme = useTheme(); // Access the theme
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  // Validation functions
  const validateFullName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMessage = (message) => message.length >= 10;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    switch (name) {
      case 'fullName':
        setErrors({ ...errors, fullName: validateFullName(value) ? '' : 'Invalid name' });
        break;
      case 'phone':
        setErrors({ ...errors, phone: validatePhone(value) ? '' : 'Invalid phone number' });
        break;
      case 'email':
        setErrors({ ...errors, email: validateEmail(value) ? '' : 'Invalid email' });
        break;
      case 'message':
        setErrors({ ...errors, message: validateMessage(value) ? '' : 'Message must be at least 10 characters' });
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation
    const newErrors = {
      fullName: validateFullName(formData.fullName) ? '' : 'Invalid name',
      phone: validatePhone(formData.phone) ? '' : 'Invalid phone number',
      email: validateEmail(formData.email) ? '' : 'Invalid email',
      message: validateMessage(formData.message) ? '' : 'Message must be at least 10 characters',
    };

    setErrors(newErrors);

    // Check if form is valid
    if (Object.values(newErrors).every(error => error === '')) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          message: '',
        });
      }, 1000);
    }
  };

  return (
    <Box id="contact" sx={{ padding: 8, paddingTop: 12 }}>
      <Grid container spacing={4}>
        {/* Left Grid - Image and Heading */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          {/* Heading */}
          <Box sx={{ textAlign: 'left', mb: 4 }}>
            <Typography
              variant="h4"
              component="span"
              sx={{ color: 'black', fontWeight: 'bold' }}
              data-aos="fade-up"
            >
              Have any questions?
            </Typography>
            <br />
            <Typography
              variant="h4"
              component="span"
              sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Just write us a message!
            </Typography>
          </Box>

          {/* Image */}
          <Box
            component="img"
            src={img1}
            alt="Contact"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              paddingTop: theme.spacing(10),
              objectFit: 'contain',
            }}
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </Grid>

        {/* Right Grid - Form */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              border: `2px solid ${theme.palette.grey[300]}`,
              borderRadius: 4,
              padding: theme.spacing(4),
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'white',
              '&:hover': {
                borderColor: theme.palette.primary.main,
              },
              transition: 'border-color 0.3s ease',
            }}
            data-aos="fade-up"
          >
            <TextField
              variant="outlined"
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
              fullWidth
              data-aos="fade-up"
            />

            <TextField
              variant="outlined"
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
              data-aos="fade-up"
            />

            <TextField
              variant="outlined"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              data-aos="fade-up"
            />

            <TextField
              variant="outlined"
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              multiline
              rows={4}
              fullWidth
              data-aos="fade-up"
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: '1.1rem',
                backgroundColor: theme.palette.secondary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.3s ease',
              }}
              disabled={
                Object.values(errors).some(error => error) ||
                Object.values(formData).some(value => !value)
              }
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Submit
            </Button>

            <Snackbar
              open={success}
              autoHideDuration={1000}
              onClose={() => setSuccess(false)}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <Alert severity="success" sx={{ width: '100%' }}>
                Form submitted successfully!
              </Alert>
            </Snackbar>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
