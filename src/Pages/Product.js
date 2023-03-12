import React, { useEffect, useState } from "react";
import AllProducts from "../components/AllProducts";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import { useProductContext } from "../context/productContext";

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

  const categoryItem = (e) => {
    const categoryData = products.filter((catItem) => {
      return catItem.category
        .toLowerCase()
        .includes(
          e.target.innerText === "Mobile"
            ? "smartphone"
            : e.target.innerText.toLowerCase()
        );
    });
    setSearchItem(categoryData);
  };

  const clickAll = () => {
    setSearchItem(products);
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: " 0rem 2rem",
          }}
        >
          <div className="category">
            <Category
              changeHandler={changeHandler}
              categoryItem={categoryItem}
              clickAll={clickAll}
            />
          </div>
          <div className="flexBox">
            {searchItem.map((AllItem) => (
              <AllProducts {...AllItem} key={AllItem.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
