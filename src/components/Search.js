import React from "react";

const Search = ({ changeHandler }) => {
  return (
    <div className="">
      <input type="search" onChange={changeHandler} placeholder="Search Item" />
      {/* <button>Search Item</button> */}
    </div>
  );
};

export default Search;
