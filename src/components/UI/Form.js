import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [data, setData] = useState({
        name: "",
        author: "",
        country: "",
        image: ""
    });
    const [submited, setSubmited] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmited(true);
        axios.post('http://localhost:4001/dishes/', data)
            .then((res) => console.log(res))
            .catch((err) => console.log('error'));
    }

    const nameInputHandler = (event) => {
        setData((data) => ({
            ...data,
            name: event.target.value,
        }));
    };
    const authorInputHandler = (event) => {
        setData((data) => ({
            ...data,
            author: event.target.value,
        }));
    };
    const countryInputHandler = (event) => {
        setData((data) => ({
            ...data,
            country: event.target.value,
        }));
    };
    const imageInputHandler = (event) => {
        setData((data) => ({
            ...data,
            image: event.target.value,
        }));
    };



    return (
        <div>
            <form onSubmit={submitHandler}>
                {submited && <div>Success! Recipe added</div>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={nameInputHandler} value={data.name} type="text" name='name' id='name' />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input onChange={authorInputHandler} value={data.author} type="text" name='author' id='author' />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input onChange={countryInputHandler} value={data.country} type="text" name='country' id='country' />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input onChange={imageInputHandler} value={data.image} type="text" name='image' id='image' />
                </div>
                <button type='submit'>BTN</button>
            </form>

        </div>
    );
};

export default Form;