import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ star }) => {
  const ratinStar = Array.from({ length: 5 }, (elm, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="icon" />
        ) : star >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <div className="icon-style">
      {ratinStar}
      <p>({Math.floor(Math.random() * 100 + 50)} Customer reviews)</p>
    </div>
  );
};

export default Star;
