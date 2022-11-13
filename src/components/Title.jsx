import { Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import style from '../sass/title.module.scss';

export default function Title({ title, color , dark }) {
  return (
    <Box className={`${dark ? style.dark : style.light}`}>
      <Typography
        sx={{ textTransform: 'uppercase' }}
        component={'h2'}
        variant='h2'
        color={color}
      >
        {title}
      </Typography>
      <Box className={style.starLine}>
        <Star sx={{ color: `${color}`, fontSize: '40px' }} />
      </Box>
    </Box>
  );
}
