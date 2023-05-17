import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
    const [data, setData] = useState({
        name: "",
        author: "",
        description: "",
        country: "",
        image: "",
        ingredients: [],
        instructions: ""
    });

    const [submited, setSubmited] = useState(false);
    const [ingredients, setIngredients] = useState([
        { id: 1, ingredient: "", amount: "" },
    ]);

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v2/all").then((res) => {
            setCountries(res.data);
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmited(true);
        axios.post('http://localhost:4001/dishes/', data);
    }

    const inputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const ingredientAddFieldHandler = (e) => {
        e.preventDefault();
        const newIngeredient = { id: ingredients.length + 1, ingredient: "", amount: "" };
        setIngredients([...ingredients, newIngeredient]);
    };

    const ingredientsHandler = (e, i) => {
        const { name, value } = e.target;
        const includedList = [...ingredients];
        includedList[i][name] = value;
        setIngredients(includedList);
        setData({ ...data, ingredients: ingredients });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                {submited && <div>Success! Recipe added</div>}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input onChange={inputHandler} type="text" name='name' id='name' />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input onChange={inputHandler} type="text" name='author' id='author' />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        onChange={inputHandler}
                    />
                </div>
                <div className="formsection">
                    <label htmlFor="country">Recipe is from:</label>
                    <select name="country" id="country" onChange={inputHandler}>
                        {countries.map((country) => (
                            <option key={country.name}>{country.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="image">Image URL:</label>
                    <input onChange={inputHandler} type="url" name='image' id='image' />
                </div>
                {ingredients.map((_, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <label htmlFor="amount">Quantity</label>
                                <input type="text" name="amount" id="amount" onChange={(e) => ingredientsHandler(e, i)} />
                            </div>
                            <div>
                                <label htmlFor="ingredient">Ingredient</label>
                                <input type="text" name="ingredient" id="ingredient" onChange={(e) => ingredientsHandler(e, i)} />
                            </div>
                        </div>
                    );
                })}
                <button onClick={ingredientAddFieldHandler}>Add more ingredients</button>
                <div>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea type="text" name="instructions" id="instructions" onChange={inputHandler} />
                </div>
                <button type='submit'>BTN</button>
            </form>
        </div>
    );
};

export default Form;