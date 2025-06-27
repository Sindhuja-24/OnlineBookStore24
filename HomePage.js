// HomePage.js
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography, Badge } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartPage from './CartPage';
import StyledRating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';


const HomePage = () => {
    const [cart, setCart] = useState([]);
    const location = useLocation();
    const username = location.state?.username || 'Guest';
    const backgroundStyle = {
        backgroundImage: 'url("https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    };

    const addToCart = (productName, price) => {
        const newItem = { name: productName, price: price };
        setCart([...cart, newItem]);
    };
 
    return (
        <div style={backgroundStyle}>
            <h2> <center>Welcome, {username}! </center></h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <Container>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '2rem' }}>
          Welcome to Pages & Petals!
        </Typography>
        <Slider {...settings}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://img.freepik.com/free-vector/online-library-flat-composition-with-electronic-book-man-reading-book-tablet-home-illustration_1284-62006.jpg?t=st=1714121046~exp=1714124646~hmac=18a7e4cbd44c34fd761f8a4b0a834ab68f4c8d7375ca5942bb9c547f25da29f6&w=1380" alt="carousel item 1" style={{ width: '75%', margin: '0 auto' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://cdn.dribbble.com/users/4032558/screenshots/8191843/reading_app_final_1_4x.jpg" alt="carousel item 2" style={{ width: '75%', margin: '0 auto' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://img.freepik.com/premium-vector/network-post-set-design-with-book-store-offers_87689-8907.jpg?w=1060" alt="carousel item 3" style={{ width: '75%', margin: '0 auto' }} />
          </div>
        </Slider>
      </Container>
      {Array.from({ length: 1 }).map((_, index) => (
  <div key={index} className="card" style={{ width: '10rem', margin: '18px' }}>
    <img
      src={`https://th.bing.com/th/id/OIP.fxmmOxBYVsxE3c63GVUjQQHaLf?w=720&h=1117&rs=1&pid=ImgDetMain${index}`}
      className="card-img-top"
      alt={`Card Image ${index + 1}`}
      style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
    />
    <div className="card-body">
      <h5 className="card-title">It Ends With Us</h5>
      <p className="card-text">$20</p>
      <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
        Add To Cart
      </button>
    </div>
  </div>
))}

            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.1Wic5jTHsJHiqa_-q1DZ5AHaLf?w=190&h=295&c=7&r=0&o=5&dpr=1.5&pid=1.7${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Ugly Love</h5>
                        <p className="card-text">
                            $15
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.UEpPyf_Uz9HsWLK9oKEsEQHaLo?rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">The Cursed Child</h5>
                        <p className="card-text">
                            $23
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.v90dMCX70nBi-qj-MlLlJQAAAA?rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Twisted Love</h5>
                        <p className="card-text">
                            $19
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.cGtOgBEKFYoKqXl8kNK3sgAAAA?rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">The Final Offer</h5>
                        <p className="card-text">
                            $30
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.6E84GQXIl7I10CLTvKsAsQHaLS?rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Half Girlfriend</h5>
                        <p className="card-text">
                            $20
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://i1.wp.com/bfdbookblog.net/wp-content/uploads/2018/12/Verity_Amazon_iBooks.jpg?w=1850&ssl=1${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Verity</h5>
                        <p className="card-text">
                            $20
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/R.b5a7225f2d3cf38ee345cf5ba814c47a?rik=ruuPZGy4vDz15w&riu=http%3a%2f%2fstarcrossedbookblog.com%2fwp-content%2fuploads%2f2022%2f01%2flove-hypothesis.jpg&ehk=3tBjmwhTNPNNIgh1zYshL4KdnfNSklkdAwEVfgi27Is%3d&risl=&pid=ImgRaw&r=0${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">The Love Hypothesis</h5>
                        <p className="card-text">
                            $20
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.lB53koXP1E9Hl_jtmbYQWQHaLu?w=736&h=1165&rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">King of Pride</h5>
                        <p className="card-text">
                            $20
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
             {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.MZhouHleYUaPZPiowy1JKwAAAA?w=423&h=650&rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Tea for Two and a Piece of Cake</h5>
                        <p className="card-text">
                            $25
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
             {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.5osj2WgfQKXdikpGFAeHwgHaLP?rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Before the Coffee gets Cold</h5>
                        <p className="card-text">
                            $15
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
             {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.BifG3SArXj9NtAd1Ko2IBwHaLJ?rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Days at the Murasaki Bookshop </h5>
                        <p className="card-text">
                            $50
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQqgRhvpoaB4wGcSYK1DDzImrXqZBacdPMvXdic06kA&s${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">The Children Of Tokyo</h5>
                        <p className="card-text">
                            $50
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.xgcBO_PPK2t6WTNMGdr5-wHaLl?w=190&h=298&c=7&r=0&o=5&dpr=1.5&pid=1.7${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">The Hating Game</h5>
                        <p className="card-text">
                            $35
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYgUoRh1CcdXxb-Z6F4ri0870ixv7Q5rTmhoYy8wK9A&s${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">RAKSHA(SI) </h5>
                        <p className="card-text">
                            $40
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://assets.vogue.in/photos/65985dd924ce8740072e81a9/3:4/w_2560%2Cc_limit/71oh83iq3EL${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">KNIFE </h5>
                        <p className="card-text">
                            $80
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}
             {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '10rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.wcC9s2hrWrjrlkR8-86rfwAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">The Neighbourhood Project</h5>
                        <p className="card-text">
                            $17
                        </p>
                        <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
                        <button onClick={() => addToCart(`Product ${index + 1}`, 10)} className="btn btn-primary">
                                Add To Cart
                            </button>
                    </div>
                </div>
            ))}

            </div>
            <Badge badgeContent={cart.length} color="secondary" overlap="circular">
                <Link to="/CartPage" className="btn btn-primary">View Cart</Link>
                
            </Badge>
        </div>

);
};

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default HomePage;
