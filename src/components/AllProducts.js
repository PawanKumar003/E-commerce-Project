import React from "react";
import { NavLink } from "react-router-dom";
import Star from "./Star";

const AllProducts = (props) => {
  const { title, category, description, thumbnail, id, brand, rating, price } =
    props;
  return (
    <div className="col-sm-3 mb-sm-4" style={{ marginLeft: "4rem" }}>
      <div className="card allproduct">
        <img src={thumbnail} alt={title} />
        <figcaption className="caption">{category}</figcaption>
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "bold" }}>
            {title}
          </h5>
          <p className="card-text">{description}</p>
          <strong className="card-text" style={{ fontSize: "1rem" }}>
            {brand}
          </strong>
          <div className="" style={{ paddingBottom: "1rem" }}>
            {<Star star={rating} />}
          </div>
          <p className="">Price: &#8377;{price}</p>
          <NavLink to={`/singleproduct/${id}`} className="btn btn-primary">
            View Product
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
