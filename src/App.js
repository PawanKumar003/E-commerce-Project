import React from "react";
import Header from "./components/header";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import SingleProduct from "./Pages/SingleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/footer";
import Cart from "./Pages/Cart";
import ClassComponent from "./ClassComponent";
import Caluclator from "./Caluclator";

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
          <Route exact path="/class" element={<ClassComponent />} />
          <Route exact path="calculator" element={<Caluclator/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
