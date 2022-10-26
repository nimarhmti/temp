import React, { useState, useEffect } from "react";
import ProductsItem from "./ProductsItem";
import CategoryButtons from "../Buttons/CategoryButtons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Products() {
  //-------------useState=====>stor Data
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  //-------------useEffect====> Fetch Data from api
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const Data = await response.json();
      setData(Data);
      setFilter(Data);
      setIsLoading(false);
    };
    getData().catch((err) => {
      console.log(err.message);
    });
  }, []);
  //---------function=========>Products render
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const Content = () => {
    return (
      <>
        {filter.map((item, index) => (
          <ProductsItem
            key={index}
            id={item.id}
            title={item.title}
            img={item.image}
            price={item.price}
          />
        ))}
      </>
    );
  };
  //----------function========>proucts filter function
  const setProductsFilter = (cat) => {
    if (cat) {
      const updateList = data.filter((item) => item.category === cat);
      setFilter(updateList);
    } else {
      setFilter(data);
    }
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <CategoryButtons itemfilte={setProductsFilter} />
        </div>
        <div className="row justify-content-center">
          {isLoading ? <Loading /> : <Content />}
        </div>
      </div>
    </div>
  );
}
export default Products;
