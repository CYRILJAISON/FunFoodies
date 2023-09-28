import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  Button,
} from '@mui/material';

function Forgot() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    setIsOtpSent(true);
  };

  const handleOTPSubmit = () => {
    console.log('OTP submitted:', otp);
    setOtp('');
  };

  return (
    <div
      style={{
        backgroundColor: '#ffcc00',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ThemeProvider theme={createTheme()}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            backgroundColor: '#52b4d9',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
            <Typography component="h1" variant="h5" style={{ marginBottom: '20px' }}>
              Forgot Password
            </Typography>

            {!isOtpSent ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendOTP();
                }}
              >
                <div style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <label style={{ fontSize: '18px', marginBottom: '10px' }}>
                    Enter Mobile Number:
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="tel" // Use "tel" type for a numeric keyboard on mobile devices
                      value={mobileNumber}
                      onChange={(e) => {
                        const inputValue = e.target.value.replace(/\D/g, '').substring(0, 10); // Allow only digits and limit to 10 characters
                        setMobileNumber(inputValue);
                      }}
                      style={{
                        marginRight: '10px',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                      }}
                      min="0"
                      max="9999999999"
                      inputMode="numeric" // Prevent up and down arrows
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      style={{
                        borderRadius: '4px',
                        height: '48px',
                      }}
                    >
                      Send OTP
                    </Button>
                  </div>
                </div>
              </form>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleOTPSubmit();
                }}
              >
                <div style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <label style={{ fontSize: '18px', marginBottom: '10px' }}>Enter OTP:</label>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="tel" // Use "tel" type for a numeric keyboard on mobile devices
                      value={otp}
                      onChange={(e) => {
                        const inputValue = e.target.value.replace(/\D/g, '').substring(0, 10); // Allow only digits and limit to 10 characters
                        setOtp(inputValue);
                      }}
                      style={{
                        marginRight: '10px',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                      }}
                      min="0"
                      max="9999999999"
                      inputMode="numeric" // Prevent up and down arrows
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      style={{
                        borderRadius: '4px',
                        height: '48px',
                      }}
                    >
                      Verify OTP
                    </Button>
                  </div>
                </div>
              </form>
            )}

            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{
                  marginTop: '10px',
                  borderRadius: '4px',
                }}
              >
                Cancel
              </Button>
            </Link>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Forgot;
