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
import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import style from './Forgot.module.css'
import { blue } from '@mui/material/colors';

function Forgot() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Ensure the phone number has exactly 10 digits
    if (phoneNumber.length !== 10) {
      alert('Phone number must be a 10-digit number.');
      return;
    }

    // Send a request to your server to send an OTP to the provided phone number
    // You can use a library like Axios for this.
    // Once the OTP is sent, update state to show the OTP input field
    setIsOtpSent(true);
  };

  const handleVerifyOtp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Send a request to your server to verify the OTP
    // You can use a library like Axios for this.
    // If the OTP is valid, you can allow the user to reset their password
    // and navigate to the password reset page.
  };

  return (
    <div style={{ backgroundColor: '#ffcc00', width: '100%', minHeight: '100vh' }}>
      <Nav />
      <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
            <Typography component="h1" variant="h4">
              Reset
            </Typography>
            <h2 className={style.forgot}>Forgot Password</h2>
            {!isOtpSent ? (
              <form onSubmit={handleSendOtp}>
                <label>Phone Number: </label>
                <input
                  className={style.number}
                  type="numbers"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  pattern="{0-9}{10}"
                  required
                />
                <br />
                <Button 
                className={style.otp}
                type="submit" 
                variant="contained" 
                color="primary">
                  Send OTP
                </Button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <label className={style.forgot}>Enter OTP: </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <br />
                <Button className={style.verify} type="submit" variant="contained" color="primary">
                  Verify OTP
                </Button>
              </form>
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Forgot;
