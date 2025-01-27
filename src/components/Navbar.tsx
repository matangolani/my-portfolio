// src/components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ mt: 2 }}>
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: 'lightgray',
            borderRadius: '16px',
            p: 1,
            display: 'flex',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <Toolbar>
            <Button
              color="inherit"
              href="#home"
              sx={{
                bgcolor: activeSection === 'home' ? 'darkgray' : 'transparent',
                borderRadius: '8px',
                mx: 1,
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              href="#projects"
              sx={{
                bgcolor: activeSection === 'projects' ? 'darkgray' : 'transparent',
                borderRadius: '8px',
                mx: 1,
              }}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              href="#skills"
              sx={{
                bgcolor: activeSection === 'skills' ? 'darkgray' : 'transparent',
                borderRadius: '8px',
                mx: 1,
              }}
            >
              Skills
            </Button>
            <Button
              color="inherit"
              href="#experience"
              sx={{
                bgcolor: activeSection === 'experience' ? 'darkgray' : 'transparent',
                borderRadius: '8px',
                mx: 1,
              }}
            >
              Experience
            </Button>
            <Button
              color="inherit"
              href="#education"
              sx={{
                bgcolor: activeSection === 'education' ? 'darkgray' : 'transparent',
                borderRadius: '8px',
                mx: 1,
              }}
            >
              Education
            </Button>
            <Button
              color="inherit"
              href="#contact"
              sx={{
                bgcolor: activeSection === 'contact' ? 'darkgray' : 'transparent',
                borderRadius: '8px',
                mx: 1,
              }}
            >
              Contact
            </Button>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
