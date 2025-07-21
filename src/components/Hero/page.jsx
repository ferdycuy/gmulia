import React from "react";
import { Link } from "react-router-dom";
import Rectangle7 from "../Icon/rectangel-7";
import HeaderImg from "../../assets/images/header.png"; // Ganti dengan gambar garam kemasan Anda

const Hero = () => {
  return (
    <>
      <div className="relative py-32 bg-gradient-to-tl from-secondary/20 via-white to-white md:bg-none">
        <div className="bg-transparent py-16 overflow-hidden">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl leading-tight mb-4">
                Garam Halus <span className="text-secondary font-bold">Berkualitas</span>{" "}
                untuk Kebutuhan Dapurmu
              </h1>
              <p className="text-lg mt-4 text-gray-600">
                Garammulia menyediakan garam halus kemasan higienis, praktis, dan terpercaya.
              </p>
              <div className="mt-12">
                <Link
                  to="/products"
                  className="border-2 rounded-md mb-10 text-secondary px-6 py-2 font-bold active:bg-secondary hover:bg-secondary hover:text-white transition duration-300"
                >
                  Lihat Produk Kami
                </Link>
              </div>
            </div>
            <div className="hidden md:block mt-[-3%]">
              <img src={HeaderImg} alt="Garam Halus Kemasan" className="w-96" />
            </div>

          </div>
        </div>
        <Rectangle7 />
      </div>
    </>
  );
};

export default Hero;
