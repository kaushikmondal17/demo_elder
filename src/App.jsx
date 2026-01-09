import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Blog from './component/Blog';
import Header from './component/Header';
import Footer from './component/Footer';
import Collection from './component/Collection';
import Category from './component/Category';
import Product from './component/Product';
import Contact from './component/Contact';
// import "../App.css";



const App =() => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/category' element={<Category />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
