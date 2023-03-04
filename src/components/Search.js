import React from "react";

const Search = ({ changeHandler }) => {
  return (
    <div className="">
      <input type="search" onChange={changeHandler} />
      <button>Search Item</button>
    </div>
  );
};

export default Search;
