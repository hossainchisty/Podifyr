import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';

const podcasts = [
  {
    id: 1,
    title: 'Tech Talk with John',
    description: 'Exploring the latest in technology.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Health Matters',
    description: 'Your guide to a healthier life.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Business Insights',
    description: 'Deep dives into business strategies.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const ViewPodCast = () => {
  return (
    <Container
      sx={{
        mt: 4,
        color: 'white',
        minHeight: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={4}>
        {podcasts.map((podcast) => (
          <Grid item xs={12} sm={6} md={4} key={podcast.id}>
            <Card sx={{ backgroundColor: '#333' }}>
              <CardMedia
                component='img'
                height='140'
                image={podcast.imageUrl}
                alt={podcast.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ color: '#F97E8B' }}
                >
                  {podcast.title}
                </Typography>
                <Typography variant='body2' color='white'>
                  {podcast.description}
                </Typography>
              </CardContent>
              <Button
                variant='contained'
                sx={{
                  bgcolor: '#F97E8B',
                  color: 'black',
                  m: 2,
                }}
              >
                Listen Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ViewPodCast;
