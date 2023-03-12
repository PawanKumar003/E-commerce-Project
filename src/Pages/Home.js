import React from "react";
import Carousel from "../components/Carousel";
import Fproduct from "../components/Fproduct";
import { BsTruck } from "react-icons/bs";
import { GiBoxUnpacking, GiTakeMyMoney } from "react-icons/gi";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="free-shiping">
        <div className="shiping-item">
          <div>
            <BsTruck style={{ fontSize: "2.5rem" }} />
          </div>
          <div className="shiping-text">
            <h3>Free shiping </h3>
            <p>
              Free Shiping on all us
              <br />
              order or order above $200
            </p>
          </div>
        </div>
        <div className="shiping-item">
          <div>
            <GiBoxUnpacking style={{ fontSize: "2.5rem" }} />
          </div>
          <div className="shiping-text">
            <h3>30 Days Return </h3>
            <p>
              Simply return it within <br /> 30 days for an exchange
            </p>
          </div>
        </div>
        <div className="shiping-item">
          <div>
            <GiTakeMyMoney style={{ fontSize: "2.5rem" }} />
          </div>
          <div className="shiping-text">
            <h3>100% Payment Secure </h3>
            <p>
              Simply return it within <br /> 30 days for an exchange
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="row " style={{ marginTop: "3rem" }}>
          <Fproduct />
        </div>
      </div>
      <div
        className="container overflow-hidden text-center"
        style={{ padding: "3rem 3.5rem 0rem" }}
      >
        <div className="row gy-5">
          <div className="col-6 p-d">
            <img
              src="https://i.postimg.cc/fLQ1dv2r/mobile.jpg"
              alt="xyz"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-6 p-d">
            <div className="p-3">
              <p>
                iPhone 13. boasts an advanced dual-camera system that allows you
                to click mesmerising pictures with immaculate clarity.
                Furthermore, the lightning-fast A15 Bionic chip allows for
                seamless multitasking, elevating your performance to a new
                dimension. A big leap in battery life, a durable design, and a
                bright Super Retina XDR display facilitate boosting your user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
