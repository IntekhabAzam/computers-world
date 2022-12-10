import React from "react";
import { urlFor } from "../../Lib/client";
import Link from "next/link";
import Image from "next/image";
import classes from "./ProductDetails.module.css";
import Specifications from "./Specifications";

const ProductDetails = ({ product }) => {
  const { image, name, price, details, salePrice } = product;

  const saleProductPrice = salePrice ? <span>&#8377; {salePrice}</span> : '';
  const priceClasses = salePrice ? classes["sale-product-price"] : classes["price"];

  return (
    <div>
      <div className={classes["product-detail-container"]}>
          <div className={classes["image-container"]}>
            <Image
              className={classes["product-detail-image"]}
              src={urlFor(image && image).url()}
              alt="details"
              width={400}
              height={400}
            />
          </div>
        <div className={classes["product-detail-desc"]}>
          <h1>{name}</h1>
          <h4>Details</h4>
          <p>{details}</p>
          <Specifications product={product} />
          <p className={priceClasses}>{saleProductPrice}&#8377; {price}</p>
          <Link href="/contacts">
            <button className={classes["visit-us"]} type="button">
              Visit Our Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
