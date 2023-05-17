import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';
import allRecipes from "../images/recipe.jpg"
import addDish from "../images/dish.jpg"

const Home = () => {
  return (
    <div className={classes.home}>
      <Link to="/food"><img src={allRecipes} alt="ALL RCIPES" /> <p>Recipe book</p> </Link>
      <Link to="/form"><img src={addDish} alt="ADD DISH" /><p>Add recipe</p></Link>
    </div>
  );
};

export default Home;