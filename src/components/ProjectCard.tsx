// src/components/ProjectCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Grid2 , CardActionArea} from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  scale: number; // Add a scale prop
}

// src/components/ProjectCard.tsx
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, imageUrl, scale }) => {
    return (
      <Card
        className="my-4 mx-auto"
        style={{
          maxWidth: `${scale * 80}%`, // Adjust maxWidth based on scale
          width: 'auto', // Change this line
          height: 'auto', // Change this line
        }}
      >
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
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    );
  };
  

export default ProjectCard;
