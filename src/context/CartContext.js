import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
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
