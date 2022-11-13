import { Box,  Typography } from '@mui/material';
import React from 'react';
import style from '../../sass/home.module.scss';
import Title from '../Title';

export default function Home() {
  return (
    <>
      <Box className={style.home}>
        <Box className={style.containerHome}>
          <img src='/img/avataaars.svg' alt='' />
          <Title title='START REACT' color='#fff' />
          <Typography component={'h5'} variant='h5'>
            Graphic Artist - Web Designer - Illustrator{' '}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
