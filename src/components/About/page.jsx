import React from "react";
import Eclipse1 from "../Icon/eclipse-1";

const AboutUs = () => {
  return (
    <div className="relative flex flex-col md:flex-row">
      <div className="bg-secondary text-white py-16 flex-1 relative">
        <div className="container mx-auto px-6">
          <div className="p-8 relative">
            <Eclipse1 />
            <h2 className="text-2xl font-bold mb-4 text-dark">TENTANG KAMI</h2>
            <h3 className="text-3xl font-bold mb-4">
              Garam Halus Berkualitas, Higienis, dan Terpercaya
            </h3>
            <p className="text-xl">
              Garammulia telah melayani kebutuhan garam halus kemasan untuk berbagai
              industri dan rumah tangga di Indonesia. Dengan pengalaman dan
              komitmen kami terhadap kualitas, kami memastikan setiap produk aman
              dan layak konsumsi.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white py-16 flex-1">
        <div className="container mx-auto px-6">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">VISI KAMI</h2>
            <h3 className="text-4xl font-bold mb-4">
              Menjadi Penyedia Garam Halus Kemasan Terdepan di Indonesia
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
