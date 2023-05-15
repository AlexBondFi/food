import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Dish from './components/Dish';
import Food from './components/Food';
import Layout from './pages/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="food" element={<Food />} />
          <Route path="food/:dish" element={<Dish />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;