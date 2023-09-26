import { ThemeProvider } from '@emotion/react';
import { createTheme, Container, CssBaseline, Box, Avatar, Typography } from '@mui/material';
import React, { useState } from 'react';
import Nav from '../Nav/Nav';

function Forgot() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send a request to your server to initiate the password reset process
    // You can use a library like Axios for this.
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
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button
        type="submit">Reset Password</button>
      </form>
      </Box>
      </Container>
      </ThemeProvider>
    </div>
  );
}

export default Forgot;