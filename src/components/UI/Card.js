import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Card.module.css';

const Card = ({ image, name, id }) => {
  return (
    <div className={classes.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Link to={`/food/${id}`}>How to cook it</Link>
    </div>
  );
};

export default Card;