import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, TextField } from '@mui/material';
import red from '../assets/logo_red.png'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          <img src={red} alt="Airbnb" style={{ height: '90px'}} />
        </Typography>
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '800px',
              height: '64px',
              padding: '8px 8px 8px 32px',
              gap: '32px',
              borderRadius: '100px',
              backgroundColor: 'white',
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <TextField
              label="Location"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {},
              }}
              InputProps={{
                placeholder: 'Where are you going?',
              }}
            />
            <TextField
              label="Check in"
              variant="outlined"
              sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {},
              }}
              InputProps={{
                placeholder: 'Add dates',
              }}
            />
            <TextField
              label="Check out"
              variant="outlined"
              sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {},
              }}
              InputProps={{
                placeholder: 'Add dates',
              }}
            />
            <TextField
              label="Guests"
              variant="outlined"
              sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {},
              }}
              InputProps={{
                placeholder: 'Add guests',
              }}
            />
            <IconButton
              color="secondary"
              sx={{
                backgroundColor: '#FF385C',
                color: 'white',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: '#FF385C',
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </div>
        <Button color="inherit">Become a Host</Button>
        <IconButton color="inherit">
          <PublicIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
        <IconButton edge="end" color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
