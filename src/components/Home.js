import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Here will be home page and links
      <Link to="/food">Food</Link>
    </div>
  );
};

export default Home;