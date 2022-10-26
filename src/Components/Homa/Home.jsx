import React from "react";
import img1 from "../../img/img1.jpg";
import Products from "../Products/Products";
function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img src={img1} className="card-img border-0" alt="home-img" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
            <p className="card-text lead fs-2">CHEKOUT THE TERENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
