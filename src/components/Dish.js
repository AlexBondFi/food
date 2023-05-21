import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classes from './Dish.module.css';

const Dish = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [flag, setFlag] = useState(
    "https://yt3.googleusercontent.com/k9rvajLn47sRKLAHsiaArgByTZVqQa_qVUUDjvxUjEA4L2N-SQ6yE8DdXk4LDz-VjMPVCDL9IpY=s900-c-k-c0x00ffffff-no-rj"
  );
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:4001/dishes/' + params.id)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        axios.get("https://restcountries.com/v3.1/name/" + res.data.country).then(
          (res) => {
            setFlag(res.data[0].flags.svg);
          }
        );
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.dish}>
      <div className={classes.leftside}>
        <img src={data.image} alt={data.name} className={classes.image} />
        <img src={flag} className={classes.flag} />
        <h4>Ingredients</h4>
        <table className={classes.table}>
          <tbody>
            {data.ingredients && data.ingredients.map((ingredient) => {
              return (
                <tr key={ingredient.id}>
                  <td >
                    {ingredient.ingredient} - {ingredient.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={classes.rightside}>
        <h2>{data.name}</h2>
        <p>By: {data.author}</p>
        <h4>Instructions</h4>
        <p>{data.instructions}</p>
        <button onClick={() => navigate(-1)}>Go back </button>
      </div>
    </div >
  );
};

export default Dish;
