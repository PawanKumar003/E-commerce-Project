import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useProductContext } from "./context/productContext";

const SingleProduct = () => {
  const { getsinbgleProduct, singleproduct, isSingleLoading } =
    useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getsinbgleProduct(id);
  }, []);

  if (isSingleLoading) {
    return (
      <div
        style={{ textAlign: "center", padding: "0 0 2rem 0", fontSize: "2rem" }}
      >
        ...Loading
      </div>
    );
  }

  return (
    <div
      className="container overflow-hidden text-center"
      style={{ marginTop: "4rem" }}
    >
      <div className="row gy-5">
        <div className="col-6">
          <img
            src={singleproduct.thumbnail}
            alt={singleproduct.title}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6">
          <div className="p-3" style={{ fontSize: "2rem" }}>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td>{singleproduct.brand}</td>
                </tr>
                <tr>
                  <td>Title</td>
                  <td>{singleproduct.title}</td>
                </tr>
                <tr>
                  <td>Stock</td>
                  <td>{singleproduct.stock}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{singleproduct.description}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{singleproduct.price}</td>
                </tr>
              </tbody>
            </table>
            <NavLink to="/cart">
              <button className="button">
                Add to cart
                <BsFillCartCheckFill style={{ fontSize: "1.5rem" }} />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
