import React from "react";
import Link from "next/link";
import classes from "./Product.module.css";
import Image from "next/image";
import { urlFor } from "../Lib/client";

const Product = ({
  product: { image, name, slug, price, salePrice },
  saleIdentifier,
}) => {
  const imageClasses =
    saleIdentifier === "onSale"
      ? classes["sale-product-image"]
      : classes["product-image"];
  const priceClasses =
    saleIdentifier === "onSale"
      ? classes["sale-product-price"]
      : classes["product-price"];
  const saleProductsPrice =
    saleIdentifier === "onSale" ? <span>&#8377;{salePrice}</span> : "";

  const percentageSave = Math.ceil(((price - salePrice) / +price) * 100);

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className={classes["product-card"]}>
          {saleIdentifier === "onSale" && (
            <div className={classes["percentage-save"]}>
              Save upto {percentageSave}%
            </div>
          )}
          <Image
            src={urlFor(image).url()}
            alt="Products"
            width={250}
            height={250}
            className={imageClasses}
          />
          <p className={classes["product-name"]}>{name}</p>
          <p className={priceClasses}>{saleProductsPrice}&#8377;{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
