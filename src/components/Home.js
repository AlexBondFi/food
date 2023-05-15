import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.home}>
      <Link to="/food"><img src="#" alt="ALL RCIPES" /></Link>
      <Link to="/dish"><img src="#" alt="SINGLE DISH" /></Link>
    </div>
  );
};

export default Home;