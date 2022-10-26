import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./PriceTable.css";
function PriceTabel() {
  const Quantity = useSelector((preState) => preState.cart.totalQuantity);
  const fetchedAmount = useSelector((preState) => preState.cart.totalAmout);
  const Amount = Math.abs(fetchedAmount);
  return (
    <div className="pTableSection">
      <div className="container priceTable">
        <div className="info">
          <p>total price:</p>
          <p> ${Amount.toFixed(2)}</p>
        </div>
        <div className="info">
          <p>total Quantity:</p>
          <p>{Quantity}</p>
        </div>
        <div className="info">
          <NavLink to="/login" className="btn btn-outline-dark">
            <i className="fa fa-credit-card me-1" />
            Payment
          </NavLink>
          <NavLink to="/products" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1" />
            shopping
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PriceTabel;
