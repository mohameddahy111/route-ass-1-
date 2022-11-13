import {

  FacebookOutlined,
  LinkedIn,
  SportsBasketballOutlined,
  Twitter,
} from '@mui/icons-material';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import style from '../../sass/footer.module.scss';

export default function ContactInfo() {
  return (
    <Box className={style.footerCont}>
      <Container>
        <Grid container spacing={3} pt={3}>
          <Grid item md={4} xs={12}>
            <Typography component={'h5'} variant='h5'>
              LOCATION
            </Typography>
            <p>2215 John Daniel Drive Clark, MO 65243</p>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography component={'h5'} variant='h5'>
              AROUND THE WEB
            </Typography>
            <List>
              <ListItem>
                <a href='/'>
                  <FacebookOutlined />
                </a>
              </ListItem>
              <ListItem>
                <a href='/'>
                  <Twitter />
                </a>
              </ListItem>
              <ListItem>
                <a href='/'>
                  <LinkedIn />
                </a>
              </ListItem>
              <ListItem>
                <a href='/'>
                  <SportsBasketballOutlined />
                </a>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography component={'h5'} variant='h5'>
              ABOUT FREELANCER
            </Typography>
            <p>
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by Route
            </p>
          </Grid>
        </Grid>
      </Container>
      <Box p={3} mt={2} className={style.Copyright}>
      <Typography component={'p'} align='center' >
      Copyright © Your Website 2021
      </Typography>

      </Box>
    </Box>
  );
}
