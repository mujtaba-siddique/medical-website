import { createTheme } from '@mui/material/styles';

// Define a theme
const theme = createTheme({
  // 1. Palette: Define global colors
  palette: {
    primary: {
      main: '#8873EF', // Purple-blue color for primary
      light: '#C4A9FF', // Lighter shade of primary
      dark: '#5C4BA9', // Darker shade of primary
    },
    secondary: {
      main: '#EBE7FF', // Light purple color for secondary
      light: '#FFFFFF', // Lighter shade for secondary
      dark: '#B1A8F0', // Darker shade of secondary
    },
    background: {
      default: '#ffffff', // White background
      paper: '#ffffff',  // Paper component white background
    },
    text: {
      primary: '#5BF0AF', // Light green color for primary text
      secondary: '#757575',
      white: '#ffffff',
      black: '#000000', // Black for text
    },
    error: {
      main: '#D32F2F', // Red for errors
    },
    success: {
      main: '#388E3C', // Green for success messages
    },
  },

  // 2. Typography: Responsive font scaling
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif,inter',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#212121',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#212121',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#212121',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#424242',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#424242',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#616161',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#424242',
      '@media (max-width:600px)': {
        fontSize: '0.95rem',
      },
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#616161',
      '@media (max-width:600px)': {
        fontSize: '0.85rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#757575',
      '@media (max-width:600px)': {
        fontSize: '0.95rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#757575',
      '@media (max-width:600px)': {
        fontSize: '0.8rem',
      },
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '1.5px',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.35,
      color: '#9E9E9E',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      color: '#BDBDBD',
    },
  },

  // 3. Spacing: Define responsive spacing
  spacing: 8, // Multiplier for consistent spacing

  // 4. Components: Customize specific MUI components
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 20px',
          fontSize: '0.875rem',
          '@media (max-width:600px)': {
            padding: '8px 16px',
            fontSize: '0.8rem',
          },
        },
        containedPrimary: {
          backgroundColor: '#FF6F61', // Coral button color
          '&:hover': {
            backgroundColor: '#C64E3A', // Darker shade on hover
          },
        },
        outlined: {
          borderColor: '#FF6F61',
          color: '#FF6F61',
          '&:hover': {
            borderColor: '#C64E3A',
            backgroundColor: '#FFEBEE',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#212121',
        },
        body1: {
          color: '#757575',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', // Smooth shadow for depth
          '@media (max-width:600px)': {
            borderRadius: '12px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
          '@media (max-width:600px)': {
            marginBottom: '12px',
          },
        },
      },
      defaultProps: {
        variant: 'outlined',
      },
    },
  },

  // 5. Shape: Consistent border radius
  shape: {
    borderRadius: 8,
  },

  // 6. Breakpoints: Define breakpoints for responsiveness
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  // 7. Global Styles
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          backgroundColor: '#FAFAFA',
          color: '#212121',
          '@media (max-width:600px)': {
            padding: '0 0px', // Add padding for smaller devices
          },
        },
      },
    },
  },
});

export default theme;
