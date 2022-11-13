import { Box, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Title from '../Title';
import data from '../../data/data';
import $ from 'jquery';
import PortfolioWork from './PortfolioWork';
import PopPage from './PopPage';
export default function Portfolio() {
  const [popData, setPopData] = useState('');

  const clickHandler = item => {
    const popItem = data.find(x => x.name === item);
    setPopData(popItem);
    $('#popPage').show(1000);
  };
  const closeHandlerBut = () => {
    $('#popPage').hide(1000);
  };
  return (
    <Box id='portfolio'>
      <Box sx={{ mt: '50px' , pt:'50px' }}>
        <Title title='Portfolio' color='#203040' dark />
        <Container sx={{ position: 'relative' }}>
          <Grid container spacing={5}>
            {data.map((x, index) => (
              <Grid
                item
                md={4}
                xs={12}
                key={index}
                onClick={() => {
                  clickHandler(x.name);
                }}
              >
                <PortfolioWork imgSrc={x.src} />
              </Grid>
            ))}
          </Grid>

          <PopPage data={popData} closeFun={closeHandlerBut} />
        </Container>
      </Box>
    </Box>
  );
}
