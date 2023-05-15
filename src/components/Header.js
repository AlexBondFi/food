import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <h1>Food</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
