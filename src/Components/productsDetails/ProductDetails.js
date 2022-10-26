import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowProductDetails from "./ShowProductDetails";
import Skeleton from "react-loading-skeleton";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Details not founded");
      }
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    };
    getProduct().catch((err) => {
      alert(err.message);
    });
  }, []);

  const Content = () => {
    if (isLoading) {
      return (
        <>
          <div className="col-md-6">
            <Skeleton height={400} />
          </div>
          <div className="col-md-6">
            <Skeleton height={50} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <ShowProductDetails
            id={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            rating={product.rating}
            price={product.price}
            description={product.description}
          />
        </>
      );
    }
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
