import React from "react";
import { client } from "../Lib/client";
import AllProducts from "../components/Products/AllProducts";


const Products = (props) => {

  return (
    <AllProducts products={props}/>
  );

};

export const getServerSideProps = async () => {
  const laptopsQuery = '*[_type == "laptops"]';
  const laptops = await client.fetch(laptopsQuery);

  const desktopsWorkstationQuery = '*[_type == "desktopsWorkstations"]';
  const desktopsWorkstations = await client.fetch(desktopsWorkstationQuery);

  return {
    props: { laptops, desktopsWorkstations },
  };
};

export default Products;
