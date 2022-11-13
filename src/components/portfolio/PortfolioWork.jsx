import { Add } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';
import style from '../../sass/PortfolioWork.module.scss';

export default function PortfolioWork({ imgSrc }) {
  return (
    <Box position='relative'>
      <img src={imgSrc} alt='' width='100%' />
      <Box className={style.hoverImage}>
        <Add sx={{ color: '#fff', fontSize: '70px' }} />
      </Box>
    </Box>
  );
}
