import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

function Welcome() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '2rem' }}>
        Welcome to Pages & Petals!
      </Typography>
      <Slider {...settings}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://cdn.dribbble.com/users/881900/screenshots/5073651/be.jpg" alt="carousel item 1" style={{ width: '50%', margin: '0 auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://cdn.dribbble.com/users/4032558/screenshots/8191843/reading_app_final_1_4x.jpg" alt="carousel item 2" style={{ width: '50%', margin: '0 auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://artsorange.org/wp-content/uploads/2019/08/big-book-sale.png" alt="carousel item 3" style={{ width: '50%', margin: '0 auto' }} />
        </div>
      </Slider>
    </Container>
  );
}

export default Welcome;
