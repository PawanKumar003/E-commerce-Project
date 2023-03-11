import React from "react";
import Search from "./Search";
import { useProductContext } from "../context/productContext";

const Category = ({ changeHandler, categoryItem, clickAll }) => {
  const { products } = useProductContext();

  if (!products) {
    return null;
  }
  return (
    <div style={{ padding: "1rem 1rem" }}>
      <div className="search-box">
        <Search changeHandler={changeHandler} />
      </div>

      <h4 style={{ paddingBottom: "1rem" }}>Category</h4>
      <p className="category_item" onClick={clickAll}>
        All
      </p>

      {/* {products.map((curelm, index) => {
        return (
          <p className="category_item" key={index} onClick={categoryItem}>
            {curelm.category.Set()}
          </p>
        );
      })} */}
      <p className="category_item" onClick={categoryItem}>
        Mobile
      </p>
      <p className="category_item" onClick={categoryItem}>
        Laptop
      </p>
      <p className="category_item" onClick={categoryItem}>
        Skincare
      </p>
      <p className="category_item" onClick={categoryItem}>
        Fragrances
      </p>
      <p className="category_item" onClick={categoryItem}>
        Groceries
      </p>
      <p className="category_item" onClick={categoryItem}>
        Home-decoration
      </p>
      <h5 style={{ marginTop: "1.5rem" }}>Companies</h5>
      <select className="cate-dropdown">
        <option className="cate-option">All</option>
        <option className="cate-option">Apple</option>
        <option className="cate-option">Samsung</option>
        <option className="cate-option">Microsoft</option>
        <option className="cate-option">Skincare</option>
        <option className="cate-option">Perfume</option>
        <option className="cate-option">Home-decoration</option>
      </select>

      <h5 style={{ marginTop: "1.5rem" }}>Price</h5>
      <span>rs. 5000</span>
      <input type="range" id="points" name="points" min="0" max="10" />

      <button
        className="btn"
        style={{
          background: "#f89f38",
          textTransform: "uppercase",
          marginTop: "1rem",
        }}
      >
        Clear filter
      </button>
    </div>
  );
};

export default Category;
