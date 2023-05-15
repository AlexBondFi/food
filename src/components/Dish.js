import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Dish = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.dish}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <img
        src={data.sprites?.other.dream_world.front_default}
        alt={data.name}
      />
      <button onClick={() => navigate(-1)}>Go back </button>
    </div>
  );
};

export default Dish;
