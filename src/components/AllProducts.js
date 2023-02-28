import React from "react";
import { Link, NavLink } from "react-router-dom";

const AllProducts = (props) => {
  const { title, category, description, thumbnail, id, brand, rating, price } =
    props;
  return (
    <div className="col-sm-3 mb-sm-4 me-5">
      <div className="card allproduct">
        <img src={thumbnail} alt={title} />
        <figcaption className="caption">{category}</figcaption>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{brand}</p>
          <p className="">{rating}</p>
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
