import React, { useEffect, useState } from "react";
import AllProducts from "./components/AllProducts";
import Carousel from "./components/Carousel";
import Search from "./components/Search";
import { useProductContext } from "./context/productContext";

const Product = () => {
  const { isLoading, products } = useProductContext();
  const [searchItem, setSearchItem] = useState([]);

  const changeHandler = (e) => {
    const newData = products.filter((dataItem) => {
      return dataItem.title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setSearchItem(newData);
  };

  useEffect(() => {
    setSearchItem(products);
  }, [products]);

  if (isLoading) {
    return (
      <div
        style={{ textAlign: "center", padding: "0 0 2rem 0", fontSize: "2rem" }}
      >
        ...Loading
      </div>
    );
  }

  return (
    <div>
      <Carousel />
      <div className="main-allProduct">
        <div className="search-box">
          <Search changeHandler={changeHandler} />
        </div>
        l
        <div className="flexBox">
          {searchItem.map((AllItem) => (
            <AllProducts {...AllItem} key={AllItem.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
