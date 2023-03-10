import React from "react";
import FeatureProducts from "./FeatureProducts";
import { useProductContext } from "../context/productContext";

const Fproduct = () => {
  const { isLoading, featureProduct } = useProductContext();

  if (isLoading) {
    return (
      <div
        style={{ textAlign: "center", padding: "0 0 2rem 0", fontSize: "2rem" }}
      >
        ...Loading
      </div>
    );
  }

  return (
    <div className="">
      <div className="feature-products">
        {featureProduct.map((item) => {
          return <FeatureProducts key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Fproduct;
