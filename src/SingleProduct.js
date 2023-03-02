import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useProductContext } from "./context/productContext";
import { TbTruckDelivery } from "react-icons/tb";
import { GiBoxUnpacking, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import Star from "./components/Star";

const SingleProduct = () => {
  const [img, setimg] = useState();
  const [qnt, setQnt] = useState(1);
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

  const smallImg = (e) => {
    setimg(e.target.src);
  };

  const qntIncrease = () => {
    setQnt(qnt === singleproduct.stock ? singleproduct.stock : qnt + 1);
  };
  const qntDecrease = () => {
    setQnt(qnt >= 2 ? qnt - 1 : 1);
  };

  return (
    <div
      className="container overflow-hidden text-center"
      style={{ marginTop: "4rem" }}
    >
      <div className="row gy-5">
        <div className="col-6">
          <img
            src={img ? img : singleproduct.thumbnail}
            alt={singleproduct.title}
            style={{ width: "100%", height: "75%" }}
          />
          <div className="short-img">
            {singleproduct.images?.map((image, inedx) => {
              return (
                <div
                  key={inedx}
                  onClick={smallImg}
                  className={img === image ? "activeClass" : ""}
                >
                  <img
                    src={image}
                    alt="jhhjh"
                    style={{ width: "159px", height: "125px" }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-6 single-product">
          <h1>{singleproduct.title}</h1>
          <p>
            <Star star={singleproduct.rating} />
          </p>
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
            <span
              style={{ paddingRight: "0.5rem", cursor: "pointer" }}
              onClick={qntDecrease}
            >
              -{/* <BsFileMinus style={{ fontSize: "1.5rem" }} /> */}
            </span>
            <span>{qnt !== 0 ? qnt : qnt}</span>
            <span
              style={{ paddingLeft: "0.5rem", cursor: "pointer" }}
              onClick={qntIncrease}
            >
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
