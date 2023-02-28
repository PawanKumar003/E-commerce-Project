import React from "react";
import AllProducts from "./components/AllProducts";
import Carousel from "./components/Carousel";
import { useProductContext } from "./context/productContext";

const Product = () => {
  const { isLoading, products } = useProductContext();

  console.log({ ...products }, "product");
  console.log(products, "product11");

  if (isLoading) {
    return (
      <div
        style={{ textAlign: "center", padding: "0 0 2rem 0", fontSize: "2rem" }}
      >
        ...Loading
      </div>
    );
  }

  if (!products) {
    return null;
  }

  return (
    <div>
      <Carousel />
      <div className="main-allProduct">
        <div className="flexBox">
          {products.map((AllItem) => (
            <AllProducts {...AllItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
