import { AppBar, Box, Container, List, ListItem, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../sass/navbar.module.scss';
// import $ from 'jquery';

export default function Navbar() {
  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > 100) {
  //     $('#Toolbar').css('padding', '0');
  //   } else {
  //     $('#Toolbar').css('padding', '20px');
  //   }
  //   const loctionPortfolio = $('#portfolio').offset().top;
  //   const loctionAbout = $('#about').offset().top;
  //   const loctionContact = $('#contact').offset().top;
  //   if ($(window).scrollTop() > loctionPortfolio - 100) {
  //     $('.portfolio').addClass('actvie');
  //     $('.portfolio').siblings().removeClass('actvie');
  //   } else {
  //     $('.portfolio').removeClass('actvie');
  //   }
  //   if ($(window).scrollTop() > loctionAbout - 80) {
  //     $('.about').addClass('actvie');
  //     $('.about').siblings().removeClass('actvie');
  //   }
  //   if ($(window).scrollTop() > loctionContact - 100) {
  //     $('.contact').addClass('actvie');
  //     $('.contact').siblings().removeClass('actvie');
  //   }
  // });

  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar className={style.Toolbar} id='Toolbar'>
          <Container className={style.navContainer}>
            <Box className={style.logoLink}>
              <Link to=''>START REACT</Link>
            </Box>
            <Box className={style.linksList}>
              <List>
                <ListItem className='portfolio'>
                  <Link to='portfolio'>PORTFOLIO</Link>
                </ListItem>
                <ListItem className='about'>
                  <Link to='about'>ABOUT</Link>
                </ListItem>
                <ListItem className='contact'>
                  <Link to='contact'>Contact</Link>
                </ListItem>
              </List>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
