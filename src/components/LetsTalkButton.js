import React from 'react';
import { Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';


const LetsTalkButton = ({ onClick, isMobile }) => (
  <Button
    variant="contained"
    startIcon={<ChatIcon />}
    onClick={onClick}
    sx={{
      borderRadius: '10px',
      px: 3,
      textTransform: 'none',
      fontWeight: 600,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 16px rgba(0,0,0,0.2)'
      },
      transition: 'all 0.3s ease',
      ...(isMobile && {
        px: 2,
        minWidth: 'auto',
        '& .MuiButton-startIcon': {
          margin: 0
        }
      })
    }}
  >
    {!isMobile && "Let's Talk"}
  </Button>
);

export default LetsTalkButton;