// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';
import Navbar from '../components/Navbar';
import projects from '../data/projects.json';
import { TextField, Button, Box, Typography, Card, CardContent, Grid2 } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'projects', 'skills', 'experience', 'education', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <section id="home" className="h-screen flex items-center justify-center ">
        <h1 className="text-4xl max-w-lg text-center">Hello, I'm Matan. I'm a software engineer at Intesis in Igualada. I'm currently working with C#, Git, and Jenkins.</h1>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl mb-8">My Projects</h1>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            technologies={project.technologies}
            description={project.description}
            image={project.image}
          />
        ))}
      </section>

      <section id="skills" className="h-screen flex flex-col items-center justify-center ">
        <h1 className="text-4xl mb-8">My Skills</h1>
        <Skills />
      </section>

      <section id="experience" className="min-h-screen flex flex-col items-center justify-center  py-8">
        <h1 className="text-4xl mb-8">My Experience</h1>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Software Engineer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Intesis - September 2024 - Present
                  </Typography>
                  <Typography variant="body1" className="mt-2">
                    Software engineer in the Gateways Firmware team. We are a feature enablement team dedicated to developing features for developers, ensuring they are easier to create. We also look after issues of scale and technical debt for developers and the platform.
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Software Engineer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The University of Queensland - November 2022 - January 2024
                  </Typography>
                  <Typography variant="body1" className="mt-2">
                    Full-stack software engineer in the Application Development and Support team. Worked on web applications such as CAHP (Casual Academic Hire and Payment), UQ Maps, UQ Donations, and Programs and Courses.
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Junior Developer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    YouPay - February 2022 - November 2022
                  </Typography>
                  <Typography variant="body1" className="mt-2">
                    Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs. Created an email notification system for merchants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into dozens of stores.
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>

      <section id="education" className="h-screen flex flex-col items-center justify-center ">
        <h1 className="text-4xl mb-4">My Education</h1>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <img src="src\assets\UOB_logo.jfif" alt="University Logo" style={{ width: '100%', height: 'auto' }} />
              </Grid2>
              <Grid2 size={8}>
                <Typography variant="h5" component="div">
                  Bsc (Hons) Computer Science with Professional Placement 
                </Typography>
                <Typography variant="h6" component="div" className="mt-2">
                  University of Bath
                </Typography>
                <Typography variant="body1" color="text.secondary" className="mt-2">
                  Graduating in 2026
                </Typography>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      </section>

      <section id="contact" className="h-screen flex flex-col items-center justify-center ">
        <h1 className="text-4xl mb-4">Contact Me</h1>
        <Typography variant="body1" className="mb-4">
          Please contact me directly at my email or through this form.
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ width: '100%', maxWidth: 500 }}>
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Your Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </section>
    </div>
  );
};

export default Home;
