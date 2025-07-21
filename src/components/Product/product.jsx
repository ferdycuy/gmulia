import React from "react";
import { products } from "../Data/ProductData";
import { Link } from "react-router-dom";

const OurProduct = () => {
  return (
    <div className="relative pt-40 pb-24">

      <div
        style={{ borderRadius: "150px 150px 150px 150px" }}
        className="relative bg-secondary text-white shadow-inner shadow-primary"
      >
        <div className="pt-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Produk Kami</h1>
        </div>
        <div className="relative z-10 container mx-auto py-10">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-inner shadow-gray overflow-hidden transform transition-transform hover:scale-105 flex flex-col"
                  >
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div className="">
                        <img
                          src={product.imageUrl}
                          alt={product.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h1 className="text-3xl font-bold text-dark mb-2 text-center">
                        {product.title}
                      </h1>
                      <p className="text-dark mb-4 text-center pt-5 font-semibold">
                        {product.description}
                      </p>
                      <div className="mt-auto text-center pt-20">
                        <Link
                          to={`/contact`}
                          className="bg-secondary text-white lg:px-10 md:px-5 sm:px-7 py-2 rounded-md shadow-md"
                        >
                          Ask for Price
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
