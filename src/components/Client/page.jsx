import React from "react";
import Duakelinci from "../../assets/images/client/logo-duakelinci.png";
import Corp from "../../assets/images/client/logo-corp.png";
import Etira from "../../assets/images/client/logo-etira.png";
import Kahatex from "../../assets/images/client/logo-kahatex.png";
import KAM from "../../assets/images/client/logo-KAM.png";
import Saltindo from "../../assets/images/client/logo-saltindo.png";
import { MdArrowForwardIos } from "react-icons/md";

const logos = [
  { src: Duakelinci, alt: "Dua Kelinci" },
  { src: Corp, alt: "Corp" },
  { src: Etira, alt: "Etira" },
  { src: Kahatex, alt: "Kahatex" },
  { src: KAM, alt: "KAM" },
  { src: Saltindo, alt: "Saltindo" },
];

const clients = [
  "Dua Kelinci",
  "Corp",
  "Etira",
  "Kahatex",
  "Kelola Agro Mandiri",
  "Saltindo",
];

const Clients = () => {
  return (
    <div className="bg-gray-50 py-40 shadow-inner">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <h1 className="text-5xl font-bold text-secondary mb-4 text-center">
          Klien Kami
        </h1>
        <h3 className="text-2xl font-semibold text-gray-600 mb-12 text-center">
          Dipercaya oleh perusahaan-perusahaan terkemuka dari berbagai industri
        </h3>

        {/* Client Logos Section */}
        <div className="relative m-auto lg:w-[500px] xl:w-[1200px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(550px*10)]">
            {logos.map((logo, index) => (
              <div
                className="slide flex w-[250px] items-center justify-center mx-2"
                key={index}
              >
                <img
                  className="m-5 h-[100px] object-contain"
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Client List Section */}
        <div className="mt-16">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 container">
            {clients.map((client, index) => (
              <li key={index} className="flex items-center text-lg text-gray-700">
                <span className="text-secondary mr-4">
                  <MdArrowForwardIos />
                </span>
                <span>{client}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clients;
