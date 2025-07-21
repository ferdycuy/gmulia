import React from "react";
import Rectangle7Product from "../Icon/rectangel-7-product";
import ProductHeader from "../../assets/images/product-header.png";

const HeroProduct = () => {
  return (
    <>
      <div className="relative py-24">
        <div className="bg-transparent py-16 overflow-hidden">
          <div className="mx-auto flex flex-col md:flex-row items-center justify-between\">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl leading-tight mb-10 container">
                Improve Your Factory <br />
                with{" "}
                <span className="text-secondary font-bold">Best Parts</span>
              </h1>
              <Rectangle7Product />
            </div>
            <div className="flex-2">
              <img
                src={ProductHeader}
                alt="HeroProduct Image"
                className="relative w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroProduct;
