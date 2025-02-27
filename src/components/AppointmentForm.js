// // import React, { useState } from 'react';
// // import { Box, TextField, Button, Typography, Snackbar, Alert, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
// // import theme from '../Theme';

// // const doctors = [
// //   { name: 'Dr. John Doe', specialization: 'Cardiologist' },
// //   { name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
// //   { name: 'Dr. William Brown', specialization: 'Orthopedic Surgeon' },
// //   { name: 'Dr. Emily Davis', specialization: 'Pediatrician' },
// //   { name: 'Dr. Michael Wilson', specialization: 'Neurologist' },
// //   { name: 'Dr. Sarah Johnson', specialization: 'Gynecologist' },
// // ];

// // const AppointmentForm = ({ onClose }) => {
// //   const [formData, setFormData] = useState({
// //     date: '',
// //     hour: '',
// //     minute: '',
// //     ampm: 'AM',
// //     doctor: '',
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [success, setSuccess] = useState(false);

// //   // Validate the form
// //   const validateForm = () => {
// //     const newErrors = {};
// //     if (!formData.date) newErrors.date = 'Date is required';
// //     if (!formData.hour) newErrors.hour = 'Hour is required';
// //     if (!formData.minute) newErrors.minute = 'Minute is required';
// //     if (!formData.doctor) newErrors.doctor = 'Doctor is required';
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   // Handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (validateForm()) {
// //       console.log('Form submitted:', formData);
// //       setSuccess(true); // Show success message
// //       setTimeout(() => {
// //         setSuccess(false); // Hide success message after 1 second
// //         onClose(); // Close the modal
// //         setFormData({ date: '', hour: '', minute: '', ampm: 'AM', doctor: '' }); // Reset the form
// //       }, 1000);
// //     }
// //   };

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   return (
// //     <Box
// //       component="form"
// //       onSubmit={handleSubmit}
// //       sx={{
// //         display: 'flex',
// //         flexDirection: 'column',
// //         gap: 2,
// //         maxWidth: '400px',
// //         margin: '0 auto',
// //         padding: 3,
// //         border: `1px solid ${theme.palette.primary.main}`,
// //         borderRadius: '8px',
// //       }}
// //     >
// //       <Typography variant="h6" sx={{ color: theme.palette.primary.main, textAlign: 'center' }}>
// //         Book an Appointment
// //       </Typography>

// //       {/* Date Field */}
// //       <TextField
// //         label="Date"
// //         type="date"
// //         name="date"
// //         value={formData.date}
// //         onChange={handleChange}
// //         error={!!errors.date}
// //         helperText={errors.date}
// //         InputLabelProps={{ shrink: true }}
// //         fullWidth
// //       />

// //       {/* Time Fields */}
// //       <Box sx={{ display: 'flex', gap: 2 }}>
// //         <FormControl fullWidth>
// //           <InputLabel>Hour</InputLabel>
// //           <Select
// //             name="hour"
// //             value={formData.hour}
// //             onChange={handleChange}
// //             error={!!errors.hour}
// //             label="Hour"
// //           >
// //             {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
// //               <MenuItem key={hour} value={hour}>
// //                 {hour}
// //               </MenuItem>
// //             ))}
// //           </Select>
// //           {errors.hour && (
// //             <Typography variant="body2" sx={{ color: 'error.main', mt: 1 }}>
// //               {errors.hour}
// //             </Typography>
// //           )}
// //         </FormControl>

// //         <FormControl fullWidth>
// //           <InputLabel>Minute</InputLabel>
// //           <Select
// //             name="minute"
// //             value={formData.minute}
// //             onChange={handleChange}
// //             error={!!errors.minute}
// //             label="Minute"
// //           >
// //             {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
// //               <MenuItem key={minute} value={minute}>
// //                 {minute < 10 ? `0${minute}` : minute}
// //               </MenuItem>
// //             ))}
// //           </Select>
// //           {errors.minute && (
// //             <Typography variant="body2" sx={{ color: 'error.main', mt: 1 }}>
// //               {errors.minute}
// //             </Typography>
// //           )}
// //         </FormControl>

// //         <FormControl fullWidth>
// //           <InputLabel>AM/PM</InputLabel>
// //           <Select
// //             name="ampm"
// //             value={formData.ampm}
// //             onChange={handleChange}
// //             label="AM/PM"
// //           >
// //             <MenuItem value="AM">AM</MenuItem>
// //             <MenuItem value="PM">PM</MenuItem>
// //           </Select>
// //         </FormControl>
// //       </Box>

// //       {/* Doctor Dropdown */}
// //       <FormControl fullWidth>
// //         <InputLabel>Doctor</InputLabel>
// //         <Select
// //           name="doctor"
// //           value={formData.doctor}
// //           onChange={handleChange}
// //           error={!!errors.doctor}
// //           label="Doctor"
// //         >
// //           {doctors.map((doctor) => (
// //             <MenuItem key={doctor.name} value={doctor.name}>
// //               <Box>
// //                 <Typography>{doctor.name}</Typography>
// //                 <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
// //                   {doctor.specialization}
// //                 </Typography>
// //               </Box>
// //             </MenuItem>
// //           ))}
// //         </Select>
// //         {errors.doctor && (
// //           <Typography variant="body2" sx={{ color: 'error.main', mt: 1 }}>
// //             {errors.doctor}
// //           </Typography>
// //         )}
// //       </FormControl>

// //       {/* Submit Button */}
// //       <Button
// //         type="submit"
// //         variant="contained"
// //         sx={{
// //           backgroundColor: theme.palette.primary.main,
// //           color: 'white',
// //           '&:hover': {
// //             backgroundColor: theme.palette.primary.dark,
// //           },
// //         }}
// //       >
// //         Send
// //       </Button>

// //       {/* Success Message */}
// //       <Snackbar
// //         open={success}
// //         autoHideDuration={1000}
// //         onClose={() => setSuccess(false)}
// //         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
// //       >
// //         <Alert severity="success" sx={{ width: '100%' }}>
// //           Appointment booked successfully!
// //         </Alert>
// //       </Snackbar>
// //     </Box>
// //   );
// // };

// // export default AppointmentForm;



// import React, { useState } from 'react';
// import { Box, TextField, Button, Typography, Snackbar, Alert, MenuItem, Select, FormControl, InputLabel, IconButton } from '@mui/material';
// import { Close } from '@mui/icons-material'; // Import close icon
// import theme from '../Theme';

// const doctors = [
//   { name: 'Dr. John Doe', specialization: 'Cardiologist' },
//   { name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
//   { name: 'Dr. William Brown', specialization: 'Orthopedic Surgeon' },
//   { name: 'Dr. Emily Davis', specialization: 'Pediatrician' },
//   { name: 'Dr. Michael Wilson', specialization: 'Neurologist' },
//   { name: 'Dr. Sarah Johnson', specialization: 'Gynecologist' },
// ];

// const AppointmentForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     date: '',
//     hour: '',
//     minute: '',
//     ampm: 'AM',
//     doctor: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState(false);

//   // Validate the form
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.date) newErrors.date = 'Date is required';
//     if (!formData.hour) newErrors.hour = 'Hour is required';
//     if (!formData.minute) newErrors.minute = 'Minute is required';
//     if (!formData.doctor) newErrors.doctor = 'Doctor is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form submitted:', formData);
//       setSuccess(true); // Show success message
//       setTimeout(() => {
//         setSuccess(false); // Hide success message after 1 second
//         onClose(); // Close the modal
//         setFormData({ date: '', hour: '', minute: '', ampm: 'AM', doctor: '' }); // Reset the form
//       }, 1000);
//     }
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//         maxWidth: '400px',
//         margin: '0 auto',
//         padding: 3,
//         border: `1px solid ${theme.palette.primary.main}`,
//         borderRadius: '8px',
//         backgroundColor: 'background.paper',
//         position: 'relative', // For positioning the close button
//       }}
//     >
//       {/* Close Button */}
//       <IconButton
//         sx={{
//           position: 'absolute',
//           top: 8,
//           right: 8,
//           color: theme.palette.text.secondary,
//         }}
//         onClick={onClose}
//       >
//         <Close />
//       </IconButton>

//       <Typography variant="h6" sx={{ color: theme.palette.primary.main, textAlign: 'center' }}>
//         Book an Appointment
//       </Typography>

//       {/* Date Field */}
//       <TextField
//         label="Date"
//         type="date"
//         name="date"
//         value={formData.date}
//         onChange={handleChange}
//         error={!!errors.date}
//         helperText={errors.date}
//         InputLabelProps={{ shrink: true }}
//         fullWidth
//         sx={{
//           '& .MuiInputBase-input': {
//             color: theme.palette.text.secondary, // Grey text for value
//           },
//           '& .MuiInputLabel-root': {
//             color: theme.palette.text.secondary, // Grey text for placeholder
//           },
//         }}
//       />

//       {/* Time Fields */}
//       <Box sx={{ display: 'flex', gap: 2 }}>
//         <FormControl fullWidth>
//           <InputLabel sx={{ color: theme.palette.text.secondary }}>Hour</InputLabel>
//           <Select
//             name="hour"
//             value={formData.hour}
//             onChange={handleChange}
//             error={!!errors.hour}
//             label="Hour"
//             sx={{
//               '& .MuiSelect-select': {
//                 color: theme.palette.text.secondary, // Grey text for value
//               },
//             }}
//           >
//             {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
//               <MenuItem key={hour} value={hour}>
//                 {hour}
//               </MenuItem>
//             ))}
//           </Select>
//           {errors.hour && (
//             <Typography variant="body2" sx={{ color: 'error.main', mt: 1 }}>
//               {errors.hour}
//             </Typography>
//           )}
//         </FormControl>

//         <FormControl fullWidth>
//           <InputLabel sx={{ color: theme.palette.text.secondary }}>Minute</InputLabel>
//           <Select
//             name="minute"
//             value={formData.minute}
//             onChange={handleChange}
//             error={!!errors.minute}
//             label="Minute"
//             sx={{
//               '& .MuiSelect-select': {
//                 color: theme.palette.text.secondary, // Grey text for value
//               },
//             }}
//           >
//             {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
//               <MenuItem key={minute} value={minute}>
//                 {minute < 10 ? `0${minute}` : minute}
//               </MenuItem>
//             ))}
//           </Select>
//           {errors.minute && (
//             <Typography variant="body2" sx={{ color: 'error.main', mt: 1 }}>
//               {errors.minute}
//             </Typography>
//           )}
//         </FormControl>

//         <FormControl fullWidth>
//           <InputLabel sx={{ color: theme.palette.text.secondary }}>AM/PM</InputLabel>
//           <Select
//             name="ampm"
//             value={formData.ampm}
//             onChange={handleChange}
//             label="AM/PM"
//             sx={{
//               '& .MuiSelect-select': {
//                 color: theme.palette.text.secondary, // Grey text for value
//               },
//             }}
//           >
//             <MenuItem value="AM">AM</MenuItem>
//             <MenuItem value="PM">PM</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>

//       {/* Doctor Dropdown */}
//       <FormControl fullWidth>
//         <InputLabel sx={{ color: theme.palette.text.secondary }}>Doctor</InputLabel>
//         <Select
//           name="doctor"
//           value={formData.doctor}
//           onChange={handleChange}
//           error={!!errors.doctor}
//           label="Doctor"
//           sx={{
//             '& .MuiSelect-select': {
//               color: theme.palette.text.secondary, // Grey text for value
//             },
//           }}
//         >
//           {doctors.map((doctor) => (
//             <MenuItem key={doctor.name} value={doctor.name}>
//               <Box>
//                 <Typography>{doctor.name}</Typography>
//                 <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//                   {doctor.specialization}
//                 </Typography>
//               </Box>
//             </MenuItem>
//           ))}
//         </Select>
//         {errors.doctor && (
//           <Typography variant="body2" sx={{ color: 'error.main', mt: 1 }}>
//             {errors.doctor}
//           </Typography>
//         )}
//       </FormControl>

//       {/* Submit Button */}
//       <Button
//         type="submit"
//         variant="contained"
//         sx={{
//           backgroundColor: theme.palette.primary.main,
//           color: 'white',
//           '&:hover': {
//             backgroundColor: theme.palette.primary.dark,
//           },
//         }}
//       >
//         Send
//       </Button>

//       {/* Success Message */}
//       <Snackbar
//         open={success}
//         autoHideDuration={1000}
//         onClose={() => setSuccess(false)}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       >
//         <Alert severity="success" sx={{ width: '100%' }}>
//           Appointment booked successfully!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default AppointmentForm;



import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert, MenuItem, Select, FormControl, InputLabel, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material'; // Import close icon
import theme from '../Theme';

const doctors = [
  { name: 'Dr. John Doe', specialization: 'Cardiologist' },
  { name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
  { name: 'Dr. William Brown', specialization: 'Orthopedic Surgeon' },
  { name: 'Dr. Emily Davis', specialization: 'Pediatrician' },
  { name: 'Dr. Michael Wilson', specialization: 'Neurologist' },
  { name: 'Dr. Sarah Johnson', specialization: 'Gynecologist' },
];

const AppointmentForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    date: '',
    hour: '',
    minute: '',
    ampm: 'AM',
    doctor: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Validate the form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.hour) newErrors.hour = 'Hour is required';
    if (!formData.minute) newErrors.minute = 'Minute is required';
    if (!formData.doctor) newErrors.doctor = 'Doctor is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSuccess(true); // Show success message
      setTimeout(() => {
        setSuccess(false); // Hide success message after 1 second
        onClose(); // Close the modal
        setFormData({ date: '', hour: '', minute: '', ampm: 'AM', doctor: '' }); // Reset the form
      }, 1000);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '400px',
        margin: '0 auto',
        padding: 3,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '4px', // Reduced border radius for a more rectangular shape
        backgroundColor: 'background.paper',
        position: 'relative', // For positioning the close button
        boxShadow: 3, // Add a subtle shadow for depth
      }}
    >
      {/* Close Button */}
      <IconButton
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: theme.palette.text.secondary,
        }}
        onClick={onClose}
      >
        <Close />
      </IconButton>

      <Typography variant="h6" sx={{ color: theme.palette.primary.main, textAlign: 'center' }}>
        Book an Appointment
      </Typography>

      {/* Date Field */}
      <TextField
        label="Date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        error={!!errors.date}
        helperText={errors.date}
        InputLabelProps={{ shrink: true }}
        fullWidth
        sx={{
          '& .MuiInputBase-input': {
            color: theme.palette.text.secondary, // Grey text for value
          },
          '& .MuiInputLabel-root': {
            color: theme.palette.text.secondary, // Grey text for placeholder
          },
        }}
      />

      {/* Time Fields */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <FormControl fullWidth>
          <InputLabel sx={{ color: theme.palette.text.secondary }}>Hour</InputLabel>
          <Select
            name="hour"
            value={formData.hour}
            onChange={handleChange}
            error={!!errors.hour}
            label="Hour"
            sx={{
              '& .MuiSelect-select': {
                color: theme.palette.text.secondary, // Grey text for value
              },
            }}
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
              <MenuItem key={hour} value={hour}>
                {hour}
              </MenuItem>
            ))}
          </Select>
          {errors.hour && (
            <Typography variant="body2" sx={{ color: 'error.main', mt: 1 }}>
              {errors.hour}
            </Typography>
          )}
        </FormControl>

        <FormControl fullWidth>
          <InputLabel sx={{ color: theme.palette.text.secondary }}>Minute</InputLabel>
          <Select
            name="minute"
            value={formData.minute}
            onChange={handleChange}
            error={!!errors.minute}
            label="Minute"
            sx={{
              '& .MuiSelect-select': {
                color: theme.palette.text.secondary, // Grey text for value
              },
            }}
          >
            {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
              <MenuItem key={minute} value={minute}>
                {minute < 10 ? `0${minute}` : minute}
              </MenuItem>
            ))}
          </Select>
          {errors.minute && (
            <Typography variant="body2" sx={{ color: 'error.main', mt: 1 }}>
              {errors.minute}
            </Typography>
          )}
        </FormControl>

        <FormControl fullWidth>
          <InputLabel sx={{ color: theme.palette.text.secondary }}>AM/PM</InputLabel>
          <Select
            name="ampm"
            value={formData.ampm}
            onChange={handleChange}
            label="AM/PM"
            sx={{
              '& .MuiSelect-select': {
                color: theme.palette.text.secondary, // Grey text for value
              },
            }}
          >
            <MenuItem value="AM">AM</MenuItem>
            <MenuItem value="PM">PM</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Doctor Dropdown */}
      <FormControl fullWidth>
        <InputLabel sx={{ color: theme.palette.text.secondary }}>Doctor</InputLabel>
        <Select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          error={!!errors.doctor}
          label="Doctor"
          sx={{
            '& .MuiSelect-select': {
              color: theme.palette.text.secondary, // Grey text for value
            },
          }}
        >
          {doctors.map((doctor) => (
            <MenuItem key={doctor.name} value={doctor.name}>
              <Box>
                <Typography>{doctor.name}</Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  {doctor.specialization}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
        {errors.doctor && (
          <Typography variant="body2" sx={{ color: 'error.main', mt: 1 }}>
            {errors.doctor}
          </Typography>
        )}
      </FormControl>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
      >
        Send
      </Button>

      {/* Success Message */}
      <Snackbar
        open={success}
        autoHideDuration={1000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Appointment booked successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AppointmentForm;