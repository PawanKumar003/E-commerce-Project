import React from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <div className="col-sm-3 mb-3 mb-sm-0 me-5">
      <div className="card">
        <img src="https://i.postimg.cc/PqRhs2sP/loja-virtual.jpg" alt="xyz" />
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link to="#" className="btn btn-primary">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
