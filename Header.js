import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import AddHomeIcon from "@mui/icons-material/AddHome";
import { NavLink } from 'react-router-dom';
import Book1 from '../imgaes/Book1.jpeg';

const Header = () => {
  const [value, setValue] = useState();

  const titleStyle = {
    fontFamily: 'Courgette-Regular', // Replace with the actual font family you want to use
    fontSize: 'rem', // Adjust the font size as needed
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: '#1b6272' }} position='Gap'>
        <Toolbar>
          <img src={Book1} width={35} alt="Book Store Logo" />
          <Typography variant='h6' style={titleStyle}>
            <b>Pages & Petals</b>
          </Typography>
          <Tabs sx={{ ml: 'auto' }} textColor='inherit' indicatorColor='primary' value={value} onChange={(e, val) => setValue(val)}>
            <Tab LinkComponent={NavLink} to='/Welcome' label='Welcome' />
            <Tab LinkComponent={NavLink} to='/signup' label='SignUp' />
            <Tab LinkComponent={NavLink} to='/signin' label='Signin' />
            <Tab LinkComponent={NavLink} to='/about' label='About' />
            <Tab LinkComponent={NavLink} to='/CartPage' label='CartPage' />
            <Tab LinkComponent={NavLink} to='/ContactUs' label='Contact Us' />
            <Tab LinkComponent={NavLink} to='/Checkout' label='Checkout' />
            <Tab LinkComponent={NavLink} to='/fetchregistraions' label='Registrations' />
            <Tab LinkComponent={NavLink} to='/Logout' label='Logout' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
