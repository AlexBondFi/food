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
      .get('http://localhost:4001/dishes/' + params.id)
      .then((res) => {
        console.log(res)
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
        src={data.image}
        alt={data.name}
      />
      <button onClick={() => navigate(-1)}>Go back </button>
    </div>
  );
};

export default Dish;
