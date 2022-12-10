import React from "react";
import {
  MainTitle,
  Mission,
  Sale,
  Services,
  BestSelling,
} from "../components";

import { client } from "../Lib/client";

const Home = ({ products }) => {
  return (
    <>
      <MainTitle />

      <Services />

      <Sale products={products} />

      <BestSelling products={products} />

      <Mission />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type in ["laptops", "desktopsWorkstations"]]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Home;
