import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartQytToggle = ({ qntIncrease, qntDecrease, qnt }) => {
  return (
    <div>
      <button
        onClick={() => qntDecrease()}
        style={{
          border: "navajowhite",
          background: "none",
          paddingRight: "0.7rem",
        }}
      >
        <FaMinus />
      </button>
      <span>{qnt}</span>
      <button
        onClick={() => qntIncrease()}
        style={{
          border: "navajowhite",
          background: "none",
          paddingLeft: "0.7rem",
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default CartQytToggle;
