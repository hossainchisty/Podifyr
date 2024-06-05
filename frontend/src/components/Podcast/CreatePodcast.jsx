import React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  Stack,
  MenuItem,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const categories = [
  'Technology',
  'Health',
  'Business',
  'Education',
  'Entertainment',
];

const CreatePodcast = () => {
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
      <Typography
        variant='h4'
        fontWeight='bold'
        mb={4}
        sx={{ color: '#FFFFFF' }}
      >
        Create a Podcast
      </Typography>

      <Box
        component='form'
        noValidate
        autoComplete='off'
        sx={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#222',
          p: 4,
          borderRadius: 2,
        }}
      >
        <Stack spacing={3}>
          <TextField
            fullWidth
            required
            label='Podcast title'
            variant='outlined'
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#F97E8B' },
              },
              '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F97E8B',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F97E8B',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#F97E8B',
              },
            }}
          />

          <TextField
            fullWidth
            select
            required
            label='Category'
            placeholder='Select category'
            variant='outlined'
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#F97E8B' },
              },
              '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F97E8B',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F97E8B',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#F97E8B',
              },
            }}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            required
            label='Description'
            placeholder='Write a short description about the podcast'
            variant='outlined'
            multiline
            rows={4}
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#F97E8B' },
              },
              '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F97E8B',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F97E8B',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#F97E8B',
              },
            }}
          />

          <Box display='flex' alignItems='center'>
            <Button
              variant='contained'
              component='label'
              sx={{ bgcolor: '#F97E8B', color: 'black', mr: 2 }}
            >
              Upload Cover Image
              <input type='file' hidden />
            </Button>
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='label'
            >
              <input hidden type='file' />
              <PhotoCamera sx={{ color: '#F97E8B' }} />
            </IconButton>
          </Box>

          {/* <TextField
            fullWidth
            required
            label='Host Name'
            variant='outlined'
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#F97E8B' },
              },
              '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F97E8B',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F97E8B',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#F97E8B',
              },
            }}
          /> */}

          <Button
            variant='contained'
            sx={{ bgcolor: '#F97E8B', color: 'black' }}
          >
            Submit & publish podcast
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default CreatePodcast;
