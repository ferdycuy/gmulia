import React from "react";
import { Link } from "react-router-dom";
import Rectangle7 from "../Icon/rectangel-7";
import HeaderImg from "../../assets/images/header.png";

const Hero = () => {
  return (
    <>
      <div className="relative py-24 bg-gray-100">
        <div className="py-16 overflow-hidden">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl leading-tight mb-4">
                Discover Our{" "}
                <span className="text-secondary font-bold">
                  Innovative Projects
                </span>
              </h1>
              <p className="text-lg mt-4 mb-8 text-gray-700">
                Showcasing a blend of creativity and technical expertise.
                Explore our portfolio to see how we bring ideas to life.
              </p>
              <div className="mt-12">
                <Link
                  to="/portfolio"
                  className="border-2 border-secondary text-secondary rounded-md px-6 py-2 font-bold hover:bg-secondary hover:text-white transition duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <img src={HeaderImg} alt="Hero Image" className="w-96" />
            </div>
          </div>
        </div>
        <Rectangle7 />
      </div>
    </>
  );
};

export default Hero;
