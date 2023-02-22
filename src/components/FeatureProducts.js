import React from "react";
import { NavLink } from "react-router-dom";

const FeatureProducts = (item) => {
  const { id, title, thumbnail, description, category } = item;
  return (
    <div className="col-sm-3 mb-3 mb-sm-0 me-5">
      <div className="card">
        <img src={thumbnail} alt={title} />
        <figcaption className="caption">{category}</figcaption>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <NavLink to={`/singleproduct/${id}`} className="btn btn-primary">
            View Product
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
