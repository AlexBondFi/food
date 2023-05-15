import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './UI/Card';
import classes from './Food.module.css';

const Food = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then((res) => {
        const fetches = res.data.results.map((p) => {
          return axios.get(p.url).then((res) => res.data);
        });
        Promise.all(fetches).then((res) => {
          setData(res);
          setIsLoading(false);
        });
      });
  }, []);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const searchFilter = data.filter(item => {
    return item.name.includes(searchInput)
  })

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <input onChange={searchInputHandler} />
      <div className={classes.cards}>
        {searchFilter.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            image={card.sprites.other['official-artwork'].front_default}
          />
        ))}
      </div>
    </>

  );
};

export default Food;