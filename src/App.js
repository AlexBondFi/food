import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Dish from './components/Dish';
import Food from './components/Food';
import Form from './components/UI/Form';
import Layout from './pages/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="food" element={<Food />} />
          <Route path="food/:id" element={<Dish />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;