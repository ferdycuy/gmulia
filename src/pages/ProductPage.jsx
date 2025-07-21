import React from "react";
import HeroProduct from "../components/Product/hero";
import OurProduct from "../components/Product/product";
import OtherProducts from "../components/Product/otherProducts";

const ProductPage = () => {
  return (
    <>
      {/* <HeroProduct /> */}
      <OurProduct />
      <OtherProducts />
    </>
  );
};

export default ProductPage;
