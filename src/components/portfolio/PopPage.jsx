import { Close } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';
import Title from '../Title';
import style from '../../sass/popPage.module.scss';

export default function PopPage({ data  , closeFun}) {
  const { name, src, text } = data;
  return (
    <Box className={style.popPage} id='popPage'>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' onClick={closeFun}>
          <Close />
        </Button>
      </Box>
      <Title title={name} color='#203040' dark />
      <img src={src} alt='' />
      <p>{text}</p>
      <Button variant='contained' onClick={closeFun}>Cloes Page</Button>
    </Box>
  );
}
