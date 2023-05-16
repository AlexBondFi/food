import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.home}>
      <Link to="/food"><img src="#" alt="ALL RCIPES" /></Link>
      <Link to="/form"><img src="#" alt="ADD DISH" /></Link>
    </div>
  );
};

export default Home;