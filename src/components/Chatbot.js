
// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Fade,
//   Card,
//   CardContent,
//   IconButton,
//   Typography,
//   Button,
//   Box,
//   keyframes,
//   TextField,
//   InputAdornment,
//   alpha
// } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import CloseIcon from '@mui/icons-material/Close';

// const typing = keyframes`
//   0% { transform: translateY(0px) }
//   25% { transform: translateY(-3px) }
//   50% { transform: translateY(0px) }
//   75% { transform: translateY(3px) }
//   100% { transform: translateY(0px) }
// `;

// const TypingIndicator = () => (
//   <Box sx={{ display: 'flex', gap: 0.5 }}>
//     {[0, 1, 2].map((i) => (
//       <Box
//         key={i}
//         sx={{
//           width: 6,
//           height: 6,
//           borderRadius: '50%',
//           bgcolor: 'text.primary',
//           animation: `${typing} 1s infinite`,
//           animationDelay: `${i * 0.2}s`
//         }}
//       />
//     ))}
//   </Box>
// );

// const Chatbot = ({ open, onClose }) => {
//   const [messages, setMessages] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [inputMessage, setInputMessage] = useState('');
//   const messagesEndRef = useRef(null);
  
//   const quickMessages = [
//     "How do I book an appointment?",
//     "What are your opening hours?",
//     "Do you have emergency services?",
//     "How to contact a doctor?",
//     "Where are you located?",
//     "What insurance do you accept?"
//   ];

//   useEffect(() => {
//     if (!open) {
//       setMessages([]);
//       setIsTyping(false);
//       setInputMessage('');
//     }
//   }, [open]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   const isValidMessage = (msg) => {
//     if (!msg || !msg.trim()) return false;
//     const validPattern = /^[a-zA-Z0-9\s.,!?']+$/;
//     return validPattern.test(msg);
//   };

//   const handleSend = async (message = null) => {
//     const finalMessage = message || inputMessage;
//     if (!isValidMessage(finalMessage)) return;

//     setMessages(prev => [...prev, { text: finalMessage.trim(), isBot: false }]);
//     if (!message) setInputMessage('');
    
//     setIsTyping(true);
    
//     await new Promise(resolve => setTimeout(resolve, 1500));
    
//     setMessages(prev => [
//       ...prev,
//       { 
//         text: "Our team will contact you shortly. For immediate assistance, call +91 99999 00000", 
//         isBot: true 
//       }
//     ]);
//     setIsTyping(false);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <Fade in={open}>
//       <Card sx={{
//         position: 'fixed',
//         bottom: 24,
//         right: 24,
//         width: 380,
//         maxWidth: '90vw',
//         boxShadow: '0px 8px 24px rgba(0,0,0,0.12)',
//         borderRadius: 3,
//         zIndex: 9999,
//         display: 'flex',
//         flexDirection: 'column',
//         height: '75vh',
//         background: '#ffffff',
//         border: '1px solid rgba(0,0,0,0.08)'
//       }}>
//         {/* Header */}
//         <Box sx={{
//           bgcolor: 'primary.main',
//           color: 'white',
//           p: 2,
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           borderTopLeftRadius: 12,
//           borderTopRightRadius: 12,
//           background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
//           boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//         }}>
//           <Typography 
//             variant="body2"
//             sx={{ 
//               fontWeight: 600,
//               fontSize: '1.1rem',
//               letterSpacing: '-0.5px',
//               fontFamily: "'Inter', sans-serif",
//               textTransform: 'uppercase'
//             }}
//           >
//             Quick Assistant
//           </Typography>
//           <IconButton 
//             onClick={onClose} 
//             sx={{ 
//               color: 'white',
//               '&:hover': {
//                 bgcolor: 'rgba(255,255,255,0.15)'
//               }
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         {/* Chat Content */}
//         <CardContent sx={{ 
//           flex: 1,
//           overflowY: 'auto',
//           p: 2,
//           '&::-webkit-scrollbar': {
//             width: '6px',
//           },
//           '&::-webkit-scrollbar-track': {
//             background: 'rgba(0,0,0,0.05)',
//             borderRadius: 3
//           },
//           '&::-webkit-scrollbar-thumb': {
//             background: 'rgba(0,0,0,0.15)',
//             borderRadius: 3
//           }
//         }}>
//           {/* Quick Messages */}
//           <Box sx={{ mb: 2 }}>
//             {quickMessages.map((msg, index) => (
//               <Button
//                 key={index}
//                 fullWidth
//                 variant="outlined"
//                 sx={{ 
//                   mb: 1,
//                   textTransform: 'none',
//                   fontSize: '0.85rem',
//                   p: 1.2,
//                   borderRadius: 2,
//                   textAlign: 'left',
//                   justifyContent: 'flex-start',
//                   color: '#000',
//                   borderColor: 'rgba(0,0,0,0.12)',
//                   fontWeight: 500,
//                   fontFamily: "'Inter', sans-serif",
//                   transition: 'all 0.2s ease',
//                   '&:hover': {
//                     transform: 'translateY(-1px)',
//                     borderColor: 'primary.main',
//                     boxShadow: '0 2px 8px rgba(25, 118, 210, 0.15)',
//                     bgcolor: 'rgba(25, 118, 210, 0.05)'
//                   }
//                 }}
//                 onClick={() => handleSend(msg)}
//               >
//                 {msg}
//               </Button>
//             ))}
//           </Box>

//           {/* Chat Messages */}
//           {messages.map((msg, index) => (
//             <Box
//               key={index}
//               sx={{
//                 display: 'flex',
//                 justifyContent: msg.isBot ? 'flex-start' : 'flex-end',
//                 mb: 2
//               }}
//             >
//               <Box sx={{
//                 bgcolor: msg.isBot ? '#f5f5f5' : 'primary.main',
//                 color: msg.isBot ? 'text.primary' : 'white',
//                 p: 1.5,
//                 borderRadius: 3,
//                 maxWidth: '85%',
//                 boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
//                 border: msg.isBot ? '1px solid rgba(0,0,0,0.08)' : 'none'
//               }}>
//                 <Typography 
//                   variant="body2"
//                   sx={{
//                     fontSize: '0.92rem',
//                     lineHeight: 1.5,
//                     fontFamily: "'Inter', sans-serif",
//                     fontWeight: 600
//                   }}
//                 >
//                   {msg.text}
//                 </Typography>
//               </Box>
//             </Box>
//           ))}

//           {isTyping && (
//             <Box sx={{ 
//               display: 'flex', 
//               alignItems: 'center', 
//               gap: 1.5,
//               mt: 1,
//               pl: 1.5
//             }}>
//               <Box sx={{
//                 width: 32,
//                 height: 32,
//                 borderRadius: '50%',
//                 bgcolor: 'action.hover',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}>
//                 <Box sx={{
//                   width: 6,
//                   height: 6,
//                   borderRadius: '50%',
//                   bgcolor: 'text.primary'
//                 }}/>
//               </Box>
//               <Typography 
//                 variant="body2"
//                 sx={{
//                   fontSize: '0.8rem',
//                   color: 'text.secondary',
//                   fontWeight: 600,
//                   letterSpacing: 0.3
//                 }}
//               >
//                 Medocare is typing...
//               </Typography>
//             </Box>
//           )}
          
//           <div ref={messagesEndRef} />
//         </CardContent>

//         {/* Message Input */}
//         <Box sx={{ 
//           p: 2, 
//           pt: 1.5,
//           borderTop: '1px solid rgba(0,0,0,0.08)',
//           background: 'rgba(255,255,255,0.8)',
//           backdropFilter: 'blur(4px)'
//         }}>
//           <TextField
//             fullWidth
//             multiline
//             maxRows={3}
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Type your message..."
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton 
//                     onClick={() => handleSend()}
//                     disabled={!isValidMessage(inputMessage)}
//                     sx={{
//                       color: 'primary.main',
//                       '&:hover': {
//                         bgcolor: 'rgba(25, 118, 210, 0.08)'
//                       },
//                       '&.Mui-disabled': {
//                         color: 'text.disabled'
//                       }
//                     }}
//                   >
//                     <SendIcon />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//               sx: {
//                 borderRadius: 3,
//                 fieldset: {
//                   borderColor: 'rgba(0,0,0,0.12) !important'
//                 },
//                 '&:hover fieldset': {
//                   borderColor: 'primary.main !important'
//                 }
//               }
//             }}
//           />
//         </Box>
//       </Card>
//     </Fade>
//   );
// };

// export default Chatbot;










import React, { useState, useEffect, useRef } from 'react';
import { 
  Fade,
  Card,
  CardContent,
  IconButton,
  Typography,
  Button,
  Box,
  keyframes,
  TextField,
  InputAdornment
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const typing = keyframes`
  0% { transform: translateY(0px) }
  25% { transform: translateY(-3px) }
  50% { transform: translateY(0px) }
  75% { transform: translateY(3px) }
  100% { transform: translateY(0px) }
`;

const TypingIndicator = () => (
  <Box sx={{ display: 'flex', gap: 0.5 }}>
    {[0, 1, 2].map((i) => (
      <Box
        key={i}
        sx={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          bgcolor: 'text.primary',
          animation: `${typing} 1s infinite`,
          animationDelay: `${i * 0.2}s`
        }}
      />
    ))}
  </Box>
);

const Chatbot = ({ open, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  
  const quickMessages = [
    "How do I book an appointment?",
    "What are your opening hours?",
    "Do you have emergency services?",
    "How to contact a doctor?",
    "Where are you located?",
    "What insurance do you accept?"
  ];

  useEffect(() => {
    if (!open) {
      setMessages([]);
      setIsTyping(false);
      setInputMessage('');
    }
  }, [open]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const isValidMessage = (msg) => {
    if (!msg || !msg.trim()) return false;
    const validPattern = /^[a-zA-Z0-9\s.,!?']+$/;
    return validPattern.test(msg);
  };

  const handleSend = async (message = null) => {
    const finalMessage = message || inputMessage;
    if (!isValidMessage(finalMessage)) return;

    setMessages(prev => [...prev, { text: finalMessage.trim(), isBot: false }]);
    if (!message) setInputMessage('');
    
    setIsTyping(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setMessages(prev => [
      ...prev,
      { 
        text: "Our team will contact you shortly. For immediate assistance, call +91 99999 00000", 
        isBot: true 
      }
    ]);
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Fade in={open}>
      <Card sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: 380,
        maxWidth: '90vw',
        boxShadow: '0px 8px 24px rgba(0,0,0,0.12)',
        borderRadius: 3,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        height: '75vh',
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.08)'
      }}>
        {/* Header with primary color background */}
        <Box sx={{
          bgcolor: 'primary.main',
          color: 'white',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <Typography 
            variant="body2"
            sx={{ 
              fontWeight: 600,
              fontSize: '1.1rem',
              letterSpacing: '-0.5px',
              fontFamily: "'Inter', sans-serif",
              textTransform: 'uppercase',
              color: 'white'
            }}
          >
            Quick Assistant
          </Typography>
          <IconButton 
            onClick={onClose} 
            sx={{ 
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.15)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <CardContent sx={{ 
          flex: 1,
          overflowY: 'auto',
          p: 2,
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(0,0,0,0.05)',
            borderRadius: 3
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0,0,0,0.15)',
            borderRadius: 3
          }
        }}>
          <Box sx={{ mb: 2 }}>
            {quickMessages.map((msg, index) => (
              <Button
                key={index}
                fullWidth
                variant="outlined"
                sx={{ 
                  mb: 1,
                  textTransform: 'none',
                  fontSize: '0.85rem',
                  p: 1.2,
                  borderRadius: 2,
                  textAlign: 'left',
                  justifyContent: 'flex-start',
                  color: '#000',
                  borderColor: 'rgba(0,0,0,0.12)',
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    borderColor: 'primary.main',
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.15)',
                    bgcolor: 'rgba(25, 118, 210, 0.05)'
                  }
                }}
                onClick={() => handleSend(msg)}
              >
                {msg}
              </Button>
            ))}
          </Box>

          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: msg.isBot ? 'flex-start' : 'flex-end',
                mb: 2
              }}
            >
              <Box sx={{
                bgcolor: msg.isBot ? '#f5f5f5' : 'primary.main',
                color: msg.isBot ? 'text.primary' : 'white',
                p: 1.5,
                borderRadius: 3,
                maxWidth: '85%',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                border: msg.isBot ? '1px solid rgba(0,0,0,0.08)' : 'none'
              }}>
                <Typography 
                  variant="body2"
                  sx={{
                    fontSize: '0.92rem',
                    lineHeight: 1.5,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600
                  }}
                >
                  {msg.text}
                </Typography>
              </Box>
            </Box>
          ))}

          {isTyping && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              mt: 1,
              pl: 1.5
            }}>
              <Box sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: 'action.hover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Box sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  bgcolor: 'text.primary'
                }}/>
              </Box>
              <Typography 
                variant="body2"
                sx={{
                  fontSize: '0.8rem',
                  color: 'text.secondary',
                  fontWeight: 600,
                  letterSpacing: 0.3
                }}
              >
                Medocare is typing...
              </Typography>
            </Box>
          )}
          
          <div ref={messagesEndRef} />
        </CardContent>

        {/* Input with grey placeholder */}
        <Box sx={{ 
          p: 2, 
          pt: 1.5,
          borderTop: '1px solid rgba(0,0,0,0.08)',
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(4px)'
        }}>
          <TextField
  fullWidth
  multiline
  maxRows={3}
  value={inputMessage}
  onChange={(e) => setInputMessage(e.target.value)}
  onKeyPress={handleKeyPress}
  placeholder="Type your message..."
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton 
          onClick={() => handleSend()}
          disabled={!isValidMessage(inputMessage)}
          sx={{
            color: '#757575 !important',
            '&:hover': {
              bgcolor: 'rgba(25, 118, 210, 0.08)'
            },
            '&.Mui-disabled': {
              color: 'text.disabled'
            }
          }}
        >
          <SendIcon />
        </IconButton>
      </InputAdornment>
    ),
    sx: {
      borderRadius: 3,
      '&::placeholder': {
        color: '#757575 !important'
      },
      fieldset: {
        borderColor: 'rgba(0,0,0,0.12) !important'
      },
      '&:hover fieldset': {
        borderColor: 'primary.main !important'
      }
    }
  }}
/>
        </Box>
      </Card>
    </Fade>
  );
};

export default Chatbot;