import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Title from '../Title';
import style from '../../sass/about.module.scss';

export default function About() {
  return (
    <Box className={style.aboutSection} id='about' >
      <Container>
        <Title title={'About'} color='#fff' />
        <Box sx={{ width: '70%', margin: 'auto' }}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ducimus vero quasi, alias cum unde nobis iusto eos repudiandae
                magni ratione minus. Saepe itaque incidunt recusandae id
                molestiae rem aspernatur quibusdam deserunt vitae, eius
                praesentium omnis necessitatibus nisi veritatis, vel illum!
                Molestias modi nam, enim id optio libero dicta cupiditate cum!
                Eaque corrupti possimus deleniti soluta. Omnis rerum, dicta
                aspernatur modi, dolorem, quidem officia est blanditiis optio
                inventore asperiores? Unde?
              </p>
            </Grid>
            <Grid item md={6} xs={12}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ducimus vero quasi, alias cum unde nobis iusto eos repudiandae
                magni ratione minus. Saepe itaque incidunt recusandae id
                molestiae rem aspernatur quibusdam deserunt vitae, eius
                praesentium omnis necessitatibus nisi veritatis, vel illum!
                Molestias modi nam, enim id optio libero dicta cupiditate cum!
                Eaque corrupti possimus deleniti soluta. Omnis rerum, dicta
                aspernatur modi, dolorem, quidem officia est blanditiis optio
                inventore asperiores? Unde?
              </p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
