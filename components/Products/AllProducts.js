import React, { useState } from "react";
import { Product } from "../../components";
import Link from "next/link";
import classes from './AllProducts.module.css';


const AllProducts = ({products:{ laptops, desktopsWorkstations }}) => {
    const [productsType, setProductsType] = useState('Laptops');


    const clickHandler = (event)=> {
        setProductsType(event.target.innerText);
    }

    let content = '';

    if (productsType === 'Laptops'){
        content = laptops?.map((product) => (
            <Product key={product._id} product={product} />
          ));
    }
    if (productsType === 'Desktops/Workstations'){
        content = desktopsWorkstations?.map((product) => (
            <Product key={product._id} product={product} />
          ));
    }
    if (productsType === 'Accessories'){
      content = "Comming soon..."
        // content = desktopsWorkstations?.map((product) => (
        //     <Product key={product._id} product={product} />
        //   ));
    }

  return (
    <>
      <div className={classes["products-navigation"]}>
        <ul>
            <li className={productsType === "Laptops" ? classes.active : ""}>
                <Link onClick={clickHandler} href='/products' as='/products/laptops'>Laptops</Link>
            </li>
            <li className={productsType === "Desktops/Workstations" ? classes.active : ""}>
                <Link onClick={clickHandler} href='/products' as='/products/desktops'>Desktops/Workstations</Link>
            </li>
            <li className={productsType === "Accessories" ? classes.active : ""}>
                <Link onClick={clickHandler} href='/products' as='/products'>Accessories</Link>
            </li>
        </ul>
      </div>
      <div className={classes["products-container"]}>
        {content}
      </div>
    </>
  );
};

export default AllProducts;

