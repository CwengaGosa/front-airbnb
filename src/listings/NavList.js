import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          <img src="https://marketingedge.com.ng/wp-content/uploads/2022/05/airn.png" alt="Airbnb" style={{ height: '90px' }} />
        </Typography>
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '400px',
              height: '44px',
              padding: '8px',
              borderRadius: '100px',
              backgroundColor: 'white',
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
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
            <InputBase
              placeholder="Start your search"
              sx={{
                marginRight: 1,
                flex: 1,
                '& .MuiInputBase-input': {
                  padding: '8px 8px 8px 0',
                  transition: 'width 0.4s ease-in-out',
                },
              }}
            />
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

