import React from "react";
import Duakelinci from "../../assets/images/client/logo-duakelinci.png";
import Corp from "../../assets/images/client/logo-corp.png";
import Etira from "../../assets/images/client/logo-etira.png";
import Kahatex from "../../assets/images/client/logo-kahatex.png";
import KAM from "../../assets/images/client/logo-kam.png";
import Saltindo from "../../assets/images/client/logo-saltindo.png";

const logos = [
  { src: Duakelinci, alt: "Dua Kelinci" },
  { src: Corp, alt: "Corp" },
  { src: Etira, alt: "Etira" },
  { src: Kahatex, alt: "Kahatex" },
  { src: KAM, alt: "KAM" },
  { src: Saltindo, alt: "Saltindo" },
];

const OtherProducts = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-secondary">Other Products</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-32 w-48" // Adjust width to control the space between logos
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-24 max-w-full object-contain" // Ensures logos scale properly
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProducts;
