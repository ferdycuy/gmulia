import React from "react";
import HeroImage from "../../assets/images/portfolio/training-kit-plc/3.jpg"; // Replace with your actual image path
import { Link } from "react-router-dom";

const CareerHero = () => {
  return (
    <div
      className="relative bg-dark text-white py-20"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark opacity-70"></div>
      <div className="relative container mx-auto py-32 text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl mb-4">
          Welcome to <span className="font-bold">Our Careers</span>
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Discover opportunities to grow and contribute in the world of
          automation.
        </p>
        <div className="mt-12">
          <Link
            to="#career-opportunities"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-full font-medium transition duration-300"
          >
            Explore Career Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
