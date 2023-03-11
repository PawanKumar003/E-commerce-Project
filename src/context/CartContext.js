import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalStorageData = () => {
  const cartLocalItem = localStorage.getItem("cartItem");

  if (cartLocalItem === []) {
    return [];
  } else {
    return JSON.parse(cartLocalItem);
  }
};

const initialState = {
  // cart:[];
  cart: getLocalStorageData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispetch] = useReducer(reducer, initialState);

  const addToCart = (singleproduct, qnt, id) => {
    dispetch({ type: "ADD_TO_CART", payload: { singleproduct, qnt, id } });
  };

  const removeItem = (id) => {
    dispetch({ type: "REMOVE_ITEM", payload: id });
  };

  // Add Item in localStorage

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
