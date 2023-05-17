import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './UI/Card';

const Food = () => {

  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:4001/dishes/')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log("Something wrong with the database ", err));
  }, []);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const searchFilter = data.filter(item => {
    return item.name.toLowerCase().includes(searchInput)
  })

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <input onChange={searchInputHandler} />
      <div>
        {searchFilter.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            id={item.id}
            image={item.image}
          />
        ))}
      </div>
    </>

  );
};

export default Food;