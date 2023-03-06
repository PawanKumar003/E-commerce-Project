import React from "react";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";
import CartItem from "./components/CartItem";

const Cart = () => {
  const { cart } = useCartContext();

  if (!cart) {
    return null;
  }

  return (
    <div className="cart-page">
      <div className="my-cart">
        <BsHandbag /> My Cart
      </div>
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className="cart">
          <div className="products">
            {cart.map((curElm) => {
              return <CartItem key={curElm.id} {...curElm} />;
            })}
          </div>

          <div className="cart-total">
            <p>
              <span>Total Price</span>

              <span>1000</span>
            </p>

            <p>
              <span>Number of Items</span>

              <span>2</span>
            </p>

            <p>
              <span>You Save</span>

              <span>₹ 1,000</span>
            </p>

            <Link to="/#">Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
