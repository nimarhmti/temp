import React from "react";
import img1 from "../../img/img1.jpg";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../Store/shoppingCartSlicer/ShoppingCartSlicer";

function CartItem(props) {
  const { id, title, image, price, quantity, totalPrice } = props;
  const dispatch = useDispatch();
  const data = { ...props };
  const addToCartHandler = () => {
    dispatch(addToCart(data));
  };
  const removeFromCartHandler = () => {
    dispatch(removeFromCart({ id, price }));
  };
  return (
    <div className="row my-4 ">
      <div className="col-md-4">
        <img src={image} alt={title} height="200px" width="180px" />
      </div>
      <div className="col-md-4">
        <h3>{title}</h3>
        <p className="lead fw-bolder">
          {quantity} * ${price}= ${totalPrice.toFixed(2)}
        </p>
        <button
          onClick={removeFromCartHandler}
          className="btn btn-outline-dark me-4"
        >
          <i className="fa fa-minus"></i>
        </button>
        <button onClick={addToCartHandler} className="btn btn-outline-dark">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
