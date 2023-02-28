import React, { useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { FcPlus, FcMinus } from "react-icons/fc";
import { Link } from "react-router-dom";

const Cart = () => {
  const [addItem, setAdditem] = useState(1);
  const [addOneTimePrice, setAddOneTimePrice] = useState(1);
  const addPrice = 1000;

  const removeItem = () => {
    console.log("asdjfy");
  };

  const incItem = () => {
    setAdditem(addItem >= 10 ? 10 : addItem + 1);
  };
  const decItem = () => {
    setAdditem(addItem >= 2 ? addItem - 1 : 1);
  };

  const priceMutli = () => {
    setAddOneTimePrice(addPrice * addItem);
  };

  useEffect(() => {
    priceMutli();
  }, [addItem]);

  return (
    <div className="cart-page">
      <div className="my-cart">
        <BsHandbag /> My Cart
      </div>
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className="cart">
          <div className="products">
            <div className="product">
              <img src="https://i.dummyjson.com/data/products/8/thumbnail.jpg" />

              <div className="product-info">
                <h3 className="product-name">New Shoes</h3>

                <h4 className="product-price">{addOneTimePrice}</h4>

                <h4 className="product-offer">50%</h4>

                <p className="product-quantity">
                  Qnt:{"    "}
                  <FcMinus
                    onClick={decItem}
                    style={{
                      fontSize: "2.5rem",
                      paddingLeft: "0.5rem",
                      fontSize: "2.5rem",
                      borderRadius: "50px",
                      background: "#4caf50",
                      height: "30px",
                      width: "30px",
                      padding: "0",
                      marginRight: "0.6rem",
                      cursor: "pointer",
                    }}
                  />
                  <input value={addItem} name="" />
                  <FcPlus
                    onClick={incItem}
                    style={{
                      fontSize: "2.5rem",
                      paddingLeft: "0.5rem",
                      cursor: "pointer",
                    }}
                  />
                </p>

                <p className="product-remove">
                  <i className="fa fa-trash" aria-hidden="true"></i>

                  <span className="remove">Remove</span>
                </p>
              </div>
            </div>
          </div>

          <div className="cart-total">
            <p>
              <span>Total Price</span>

              <span>{addOneTimePrice}</span>
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
