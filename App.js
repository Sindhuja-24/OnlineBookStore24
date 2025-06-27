import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ToggleColorMode from './components/ToggleColorMode'; // Import the ToggleColorMode component
import Home from './components/Home';
import Welcome from './components/Welcome';
import Signin from './components/Signin';
import Signup from './components/Signup';
import About from './components/About';
import Invalid from './components/Invalid';
import Checkout from './components/Checkout';
import FetchRegistrations from './components/FetchRegistrations';
import Success from './components/Success';
import ContactUs from './components/ContactUs';
import HomePage from './components/HomePage';
import Logout from './components/Logout';
import CartPage from './components/CartPage';

function App() {
  return (
    <React.Fragment> 
      <header>
        <Header />
        <ToggleColorMode />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/Welcome' element={<Welcome />} exact />
          <Route path='/signup' element={<Signup />} exact />
          <Route path='/signin' element={<Signin />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/invalid' element={<Invalid />} exact />
          <Route path='/checkout' element={<Checkout />} exact />
          <Route path='/fetchregistraions' element={<FetchRegistrations />} exact />
          <Route path='/success' element={<Success />} exact />
          <Route path='/ContactUs' element={<ContactUs />} exact />
          <Route path='/homepage' element={<HomePage />} exact />
          <Route path='/Logout' element={<Logout />} exact />
          <Route path='/CartPage' element={<CartPage />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
