import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Avatar,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Verified } from '@mui/icons-material';

const Profile = () => {
  return (
    <Container
      sx={{
        color: 'white',
        minHeight: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          mb: 20,
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#222',
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Avatar
          alt='Profile Picture'
          src='https://avatars.githubusercontent.com/u/62835101?v=4'
          sx={{
            mb: 2,
            width: 100,
            height: 100,
            mx: 'auto',
          }}
        />

        <Typography
          variant='h4'
          fontWeight='bold'
          sx={{ color: '#F97E8B', mb: 2 }}
        >
          Hossain C.
          <Verified
            sx={{
              color: '#1F57C3',
              p: 0.2,
            }}
          />
        </Typography>

        <Typography variant='body1' sx={{ mb: 3 }}>
          Podcaster, Tech Enthusiast, and Blogger
        </Typography>

        <Stack spacing={2}>
          <Button
            variant='contained'
            sx={{ bgcolor: '#F97E8B', color: 'black' }}
          >
            Edit Profile
          </Button>

          <Button
            variant='outlined'
            sx={{
              color: '#F97E8B',
              borderColor: '#F97E8B',
              '&:hover': {
                borderColor: '#F97E8B',
                backgroundColor: 'rgba(246, 178, 107, 0.1)',
              },
            }}
          >
            {' '}
            <Link to='/my-profile/view-podcast'>
              <Typography
                sx={{
                  color: 'white',
                }}
              >
                View Podcasts
              </Typography>
            </Link>
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Profile;
