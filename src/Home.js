import React from "react";
import Carousel from "./components/Carousel";
import Fproduct from "./components/Fproduct";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="">
        <div className="row " style={{ marginTop: "3rem" }}>
          <Fproduct />
        </div>
      </div>
      <div className="container overflow-hidden text-center">
        <div className="row gy-5">
          <div className="col-6">
            <img
              src="https://i.postimg.cc/PqRhs2sP/loja-virtual.jpg"
              alt="xyz"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-6">
            <div className="p-3">
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
