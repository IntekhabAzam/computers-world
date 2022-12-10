import React from "react";
import Product from "./Product";
import classes from './Sale.module.css';

const Sale = ({ products }) => {
  let isSale = false;
  for (const product of products){
    if (product.onSale === 'yes'){
      isSale = true;
    };
  }
  console.log(products)
  return (
    <>
    {isSale && <div className={classes["sale-container"]}>
      <div className={classes["sale-heading-1"]}>
        <h1>SALE</h1>
      </div>

      <div className={classes["sale-product-container"]}>
        {products?.map((product) => {
          if (product.onSale === "yes") {
            return <Product key={product._id} product={product} saleIdentifier='onSale'/>;
          }
        })}
      </div>

      <div className={classes["sale-heading-2"]}>
        <h1>SALE</h1>
      </div>
    </div>}
    </>
  );
};

export default Sale;
