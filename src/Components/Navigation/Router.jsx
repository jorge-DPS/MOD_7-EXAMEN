import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../../screens/Home.jsx';
import Products from '../../screens/Product.jsx';
import About from '../../screens/About.jsx';
import Think from '../../screens/Think.jsx';
import Counter from '../Counter/Counter.jsx';
import Login from '../../screens/Login.jsx';

const Router = ({ formRef }) => {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="login" element={<Login formRef={formRef} />} />
      <Route path="products" element={<Products />} />
      <Route path="think" element={<Think />} />
      <Route path="about" element={<About />} />
      <Route path="counter" element={<Counter />} />
    </Routes>
  );
};

export default Router;
