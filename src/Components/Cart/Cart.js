import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import PriceTabel from "./priceTabel";
import "./Cart.css";
function Cart() {
  const products = useSelector((preState) => preState.cart.products);

  let content = "";

  if (products.length > 0) {
    content = products.map((item, index) => (
      <CartItem
        key={index}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        quantity={item.quantity}
        totalPrice={item.totalPrice}
      />
    ));
  } else {
    content = <h1>is Empty</h1>;
  }

  return (
    <div className="container py-4 Cart">
      {content}
      <PriceTabel />
    </div>
  );
}

export default Cart;
