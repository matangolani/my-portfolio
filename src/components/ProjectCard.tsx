// src/components/ProjectCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Grid2 } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
  title: string;
  technologies: string[];
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, technologies, description, image }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ scale: 0.8, opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <Card className="my-4 mx-auto">
        <CardContent>
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Typography variant="h4" component="div">
                {title}
              </Typography>
              <Typography variant="h6" component="div" className="mt-4">
                Technologies Used:
              </Typography>
              <ul className="list-disc list-inside">
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <Typography variant="body1" color="text.secondary" className="mt-4">
                {description}
              </Typography>
            </Grid2>
            <Grid2 size={6}>
              <img src={image || 'https://via.placeholder.com/150'} alt={title} />
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
