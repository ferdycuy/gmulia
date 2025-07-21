import React from "react";
import HeroImage from "../../assets/images/bg-profile-perusahaan.JPG"; 
import { Link } from "react-router-dom";

const ProfileHero = () => {
  return (
    <div
      className="relative bg-dark text-white py-20"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "80vh",
      }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-dark opacity-60"></div>
      <div className="relative container mx-auto py-28 px-4 text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl mb-4 container mx-auto">
          Selamat Datang di{" "}
          <span className="font-bold">Profil Perusahaan</span>
        </h1>
        <p className="text-lg lg:text-xl mb-8 container mx-auto">
          Mengenal lebih dekat PT. Garam Mulia, produsen garam berkualitas tinggi
          untuk kebutuhan industri dan rumah tangga di Indonesia.
        </p>
        <div className="mt-12 container">
        <a
          href="https://wa.me/6281585015801"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary text-white px-6 py-3 rounded-full font-medium transition duration-300"
        >
          Hubungi Sekarang
        </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
