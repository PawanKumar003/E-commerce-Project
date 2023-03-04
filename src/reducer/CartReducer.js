const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { singleproduct, qnt, id } = action.payload;
    console.log(singleproduct, "cart red");
    console.log(id, qnt, "red");
  }

  return state;
};

export default reducer;
