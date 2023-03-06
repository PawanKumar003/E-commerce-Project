const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { singleproduct, qnt, id } = action.payload;

    let cartproduct;

    cartproduct = {
      id: id,
      name: singleproduct.title,
      qnt,
      price: singleproduct.price,
      max: singleproduct.stock,
      image: singleproduct.thumbnail,
      brand: singleproduct.brand,
    };
    return {
      ...state,
      cart: [...state.cart, cartproduct],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const updateCart = state.cart.filter(
      (curElm) => curElm.id !== action.payload
    );
    return {
      ...state,
      cart: updateCart,
    };
  }

  return state;
};

export default reducer;
