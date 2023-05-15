import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Card.module.css';

const Card = ({ image, name }) => {
  return (
    <div className={classes.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Link to={name}>See more</Link>
    </div>
  );
};

export default Card;