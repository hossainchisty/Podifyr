import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MicIcon from '@mui/icons-material/Mic';
import ExploreIcon from '@mui/icons-material/Explore';
import Person2Icon from '@mui/icons-material/Person2';

const categories = [
  { name: 'Home', icon: <HomeIcon />, path: '/' },
  { name: 'Discover', icon: <ExploreIcon />, path: '/discover' },
  { name: 'Create Podcast', icon: <MicIcon />, path: '/create-podcast' },
  { name: 'My Profile', icon: <Person2Icon />, path: '/my-profile' },
];

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <Link
        to={category.path}
        key={category.name}
        style={{ textDecoration: 'none' }}
      >
        <button
          className='category-btn'
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && '#F97E8B',
            color: 'white',
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? 'white' : '#F97E8B',
              marginRight: '15px',
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? '1' : '0.8',
            }}
          >
            {category.name}
          </span>
        </button>
      </Link>
    ))}
  </Stack>
);

export default Categories;
