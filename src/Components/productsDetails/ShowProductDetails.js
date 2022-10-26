import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/shoppingCartSlicer/ShoppingCartSlicer";

function ShowProductDetails(props) {
  const { id, image, title, category, rating, price, description } = props;
  const data = { ...props };
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(data));
  };
  return (
    <>
      <div className="col-md-6 mt-5 ">
        <img src={image} alt={title} height="400px" width="300px" />
      </div>
      <div className="col-md-6 mt-5">
        <h4 className="text-uppercase text-black=50">{category}</h4>
        <h1 className="display-5">{category}</h1>
        <p className="lead fw-bolder">
          Rating {rating && rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bolder my-4"> ${price}</h3>
        <p className="lead">{description}</p>
        <button
          onClick={addToCartHandler}
          className="btn btn-outline-dark text-uppercase px-4 py-2"
        >
          add to cart
        </button>
        <NavLink
          to="/cart"
          className="btn btn-outline-dark text-uppercase ms-2 px-3 py-2"
        >
          go to cart
        </NavLink>
      </div>
    </>
  );
}

export default ShowProductDetails;
