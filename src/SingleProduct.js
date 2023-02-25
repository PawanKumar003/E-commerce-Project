import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BsFillCartCheckFill, BsFilePlus, BsFileMinus } from "react-icons/bs";
import { useProductContext } from "./context/productContext";
import { TbTruckDelivery } from "react-icons/tb";
import { GiBoxUnpacking, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

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
          <div className="short-img">
            {singleproduct.images?.map((image, inedx) => {
              return (
                <div>
                  <img
                    src={image}
                    alt="jhhjh"
                    key={inedx}
                    style={{ width: "100%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-6 single-product">
          <h1>{singleproduct.title}</h1>
          <p>{singleproduct.rating}</p>
          <p>Mrp : {singleproduct.price}</p>
          <p>
            <span style={{ color: "blue" }}>Deal of the day: </span>
            {singleproduct.price}
          </p>
          <p style={{ paddingRight: "8rem" }}>{singleproduct.description}</p>
          <div className="delivery-status">
            <div>
              <div>
                <TbTruckDelivery style={{ fontSize: "2rem" }} />
              </div>
              <p>Free Delivery</p>
            </div>
            <div>
              <div>
                <GiBoxUnpacking style={{ fontSize: "2rem" }} />
              </div>
              <p>30 Days Replacement</p>
            </div>
            <div>
              <div>
                <GiTakeMyMoney style={{ fontSize: "2rem" }} />
              </div>
              <p>Free Delivery</p>
            </div>
            <div>
              <div>
                <MdOutlineSecurity style={{ fontSize: "2rem" }} />
              </div>
              <p>2 Yesrs Warranty</p>
            </div>
          </div>
          <div className="stock-text">
            <p style={{ fontWeight: "bold" }}>
              {singleproduct.stock ? "Available: in stock" : "No Stock"}
            </p>
            <p>
              Item Id:
              <span style={{ fontWeight: "bold", paddingLeft: "0.5rem" }}>
                {singleproduct.id}
              </span>
            </p>
            <p>
              Brand:
              <span style={{ fontWeight: "bold", paddingLeft: "0.5rem" }}>
                {singleproduct.brand}
              </span>
            </p>
          </div>
          <div className="stock-btn">
            <span style={{ paddingRight: "0.5rem", cursor: "pointer" }}>
              -{/* <BsFileMinus style={{ fontSize: "1.5rem" }} /> */}
            </span>
            <span>1</span>
            <span style={{ paddingLeft: "0.5rem", cursor: "pointer" }}>
              +{/* /<BsFilePlus style={{ fontSize: "1.5rem" }} /> */}
            </span>
          </div>
          <NavLink to="/cart">
            <button className="button">
              Add to cart
              <BsFillCartCheckFill style={{ fontSize: "1.5rem" }} />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
