

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Avatar,
  ListSubheader,
  InputAdornment,
  Card,
  Grid,
  LinearProgress,
  Fade,
} from '@mui/material';
import {
  Close,
  EventAvailable,
  Person,
  CheckCircle,
  Send,
  ErrorOutline,
} from '@mui/icons-material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import theme from '../Theme';

const doctors = [
  { name: 'Dr. John Doe', specialization: 'Cardiologist', avatar: 'JD' },
  { name: 'Dr. Jane Smith', specialization: 'Dermatologist', avatar: 'JS' },
  { name: 'Dr. William Brown', specialization: 'Orthopedic Surgeon', avatar: 'WB' },
  { name: 'Dr. Emily Davis', specialization: 'Pediatrician', avatar: 'ED' },
  { name: 'Dr. Michael Wilson', specialization: 'Neurologist', avatar: 'MW' },
  { name: 'Dr. Sarah Johnson', specialization: 'Gynecologist', avatar: 'SJ' },
];

const AppointmentForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    appointmentTime: null,
    doctor: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const groupedDoctors = doctors.reduce((acc, doctor) => {
    const spec = doctor.specialization;
    if (!acc[spec]) acc[spec] = [];
    acc[spec].push(doctor);
    return acc;
  }, {});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Please select appointment time';
    } else if (formData.appointmentTime < new Date()) {
      newErrors.appointmentTime = 'Time must be in future';
    }
    if (!formData.doctor) newErrors.doctor = 'Please select a doctor';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setFormData({ appointmentTime: null, doctor: '' });
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Card
        sx={{
          boxShadow: 24,
          position: 'relative',
          backgroundColor: 'transparent', // Make sure the background is transparent
        }}
      >
        {isSubmitting && <LinearProgress sx={{ position: 'absolute', top: 0, left: 0, right: 0 }} />}

        {/* Header */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            p: 3,
            position: 'relative',
            background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
          }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8, color: 'white' }}
            onClick={onClose}
          >
            <Close />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <EventAvailable sx={{ fontSize: 40, color: 'white' }} />
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
              New Appointment
            </Typography>
          </Box>
        </Box>

        {/* Form Content */}
        <Box sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DateTimePicker
                label="Appointment Time"
                value={formData.appointmentTime}
                onChange={(newValue) => setFormData(prev => ({ ...prev, appointmentTime: newValue }))}
                minDate={new Date()}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={!!errors.appointmentTime}
                    helperText={errors.appointmentTime}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <EventAvailable sx={{ color: 'action.active' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.doctor}>
                <InputLabel>Select Doctor</InputLabel>
                <Select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  label="Select Doctor"
                  MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                  renderValue={(selected) => {
                    const doctor = doctors.find(d => d.name === selected);
                    return doctor ? (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>{doctor.avatar}</Avatar>
                        <Box>
                          <Typography>{doctor.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {doctor.specialization}
                          </Typography>
                        </Box>
                      </Box>
                    ) : '';
                  }}
                >
                  {Object.entries(groupedDoctors).map(([spec, docs]) => [
                    <ListSubheader key={spec} sx={{ bgcolor: 'background.default' }}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {spec}
                      </Typography>
                    </ListSubheader>,
                    ...docs.map(doctor => (
                      <MenuItem key={doctor.name} value={doctor.name} sx={{ py: 1.5 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{doctor.avatar}</Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography>{doctor.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {doctor.specialization}
                          </Typography>
                        </Box>
                        {formData.doctor === doctor.name && (
                          <CheckCircle sx={{ color: 'success.main', ml: 2 }} />
                        )}
                      </MenuItem>
                    )),
                  ])}
                </Select>
                {errors.doctor && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, color: 'error.main' }}>
                    <ErrorOutline sx={{ fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2">{errors.doctor}</Typography>
                  </Box>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                disabled={isSubmitting}
                sx={{
                  height: 48,
                  borderRadius: '8px',
                  background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
                  '&:hover': { opacity: 0.9 },
                  transition: 'all 0.3s ease',
                }}
              >
                <Send sx={{ mr: 1 }} />
                {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Snackbar
          open={success}
          autoHideDuration={2000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          TransitionComponent={Fade}
        >
          <Alert
            icon={<CheckCircle fontSize="inherit" />}
            severity="success"
            sx={{ width: '100%', boxShadow: 3 }}
          >
            Appointment booked successfully!
          </Alert>
        </Snackbar>
      </Card>
    </LocalizationProvider>
  );
};

export default AppointmentForm;
