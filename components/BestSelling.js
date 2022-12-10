import React from "react";
import Product from "./Product";
import classes from "./BestSelling.module.css";

const BestSelling = ({ products }) => {
  return (
    <>
      <div className={classes["best-selling-heading"]}>
        <h2>Best Selling Products</h2>
      </div>
      <div className={classes["products-container"]}>
        {products?.map((product) => {
          if (product.bestSelling === "yes") {
            return <Product key={product._id} product={product} />;
          }
        })}
      </div>
    </>
  );
};

export default BestSelling;
