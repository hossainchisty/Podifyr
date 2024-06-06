import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { Videos, SideBar } from '../';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
            mb: 1,
          }}
        >
          <Button
            variant='contained'
            sx={{ bgcolor: '#F97E8B', color: 'black', borderRadius: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 1 }}>
          <Typography
            variant='h4'
            fontWeight='bold'
            mb={2}
            sx={{ color: 'white' }}
          >
            <span style={{ color: '#FFFFFF' }}>Trending Podcasts</span>
          </Typography>

          <Videos videos={videos} />
        </Box>

        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 1 }}>
          <Typography
            variant='h4'
            fontWeight='bold'
            mb={2}
            sx={{ color: 'white' }}
          >
            <span style={{ color: '#FFFFFF' }}>Latest Podcasts</span>
          </Typography>

          <Videos videos={videos} />
        </Box>

        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 1 }}>
          <Typography
            variant='h4'
            fontWeight='bold'
            mb={2}
            sx={{ color: 'white' }}
          >
            <span style={{ color: '#FFFFFF' }}>Popular Podcasts</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;
