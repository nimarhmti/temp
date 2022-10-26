import React from "react";
import { NavLink } from "react-router-dom";
function ProductsItem(props) {
  const { id, img, title, price } = props;
  const Price = price.toFixed(2);

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-center p-4">
        <img src={img} className="card-img-top" height="250px" alt={title} />
        <div className="card-body">
          <h5 className="card-title mb-0">{title.substring(0, 12)}...</h5>
          <p className="card-text lead fw-bolder">${Price}</p>
          <NavLink to={`/products/${id}`} className="btn btn-outline-dark me-3">
            Buy Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductsItem;
