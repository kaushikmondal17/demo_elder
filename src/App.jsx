import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Blog from './component/Blog';
import Header from './component/Header';
import Footer from './component/Footer';
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
