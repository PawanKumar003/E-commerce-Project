import React from "react";
// import { FcPlus, FcMinus } from "react-icons/fc";
import CartQytToggle from "./CartQytToggle";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ brand, id, image, max, name, price, qnt }) => {
  const { removeItem } = useCartContext();
  //   const [qntitem, setQntItem] = useState(1);

  const qntIncrease = () => {
    // setQntItem(qntitem === max ? max : qntitem + 1);
  };
  const qntDecrease = () => {
    // setQntItem(qntitem >= 2 ? qntitem - 1 : 1);
  };
  return (
    <div>
      <div className="product">
        <img src={image} alt={name} />

        <div className="product-info">
          <h3 className="product-name">{name}</h3>

          <h4 className="product-price">{price * qnt}</h4>

          <h4 className="product-offer">50%</h4>

          <div className="product-quantity">
            Qnt:{"    "}
            <CartQytToggle
              qntIncrease={qntIncrease}
              qntDecrease={qntDecrease}
              qnt={qnt}
            />
          </div>

          <p className="product-remove">
            <i className="fa fa-trash" aria-hidden="true"></i>

            <span
              className="remove"
              onClick={() => {
                removeItem(id);
              }}
            >
              Remove
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
