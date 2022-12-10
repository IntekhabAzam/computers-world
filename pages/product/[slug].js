import React from 'react'
import { client } from '../../Lib/client'
import ProductDetails from '../../components/productDetails/ProductDetails'

const SingleProductDetails = ({product}) => {
  return (
    <ProductDetails product={product}/>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type in ["product", "laptops", "desktopsWorkstations"]] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type in ["product", "laptops", "desktopsWorkstations"] && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  return {
    props: { product },
  };
};


export default SingleProductDetails
