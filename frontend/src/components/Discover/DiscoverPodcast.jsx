import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const podcasts = [
  {
    id: 1,
    title: 'the egyptian',
    author: 'Apple Music Dance',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Daily Discovery',
    author: 'DZ Messili',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Code & Coffee',
    author: 'Babbu Maan',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'JavaScript Jungle',
    author: 'Christopher Soltis',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'How Built This',
    author: 'NPR',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'The Tech Talks Daily',
    author: 'Neil C. Hughes',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'Technology Podcast',
    author: 'Tech Weekly',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const Discover = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
      }}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mb={4}
      >
        <Box display='flex' alignItems='center' sx={{ width: '70%' }}>
          <TextField
            variant='outlined'
            placeholder='Type here to search'
            fullWidth
            InputProps={{
              sx: { bgcolor: '#333', borderRadius: 2, color: 'white' },
              startAdornment: (
                <IconButton position='start'>
                  <SearchIcon sx={{ color: 'white' }} />
                </IconButton>
              ),
            }}
            sx={{ input: { color: 'white' } }}
          />
        </Box>
      </Box>

      <Typography variant='h5' gutterBottom sx={{ color: '#f6b26b' }}>
        Discover Community Podcasts
      </Typography>

      <Grid container spacing={3}>
        {podcasts.map((podcast) => (
          <Grid item xs={12} sm={6} md={3} key={podcast.id}>
            <Card sx={{ backgroundColor: '#333', color: 'white' }}>
              <CardMedia
                component='img'
                image={podcast.imageUrl}
                alt={podcast.title}
                sx={{ height: 150 }}
              />
              <CardContent>
                <Typography variant='h6' gutterBottom sx={{ color: '#f6b26b' }}>
                  {podcast.title}
                </Typography>
                <Typography variant='body2' color='white'>
                  {podcast.author}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Discover;
