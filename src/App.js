import React from "react";
import Header from "./components/header";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./components/footer";
import Cart from "./Cart";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
