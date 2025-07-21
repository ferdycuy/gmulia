import React from "react";
import Logo from "/garam-white.png";

const Footer = () => {
  return (
    <footer className="bg-dark shadow-inner text-white py-24 z-[999999]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-0 md:mb-2 -mt-10 ">
          <img src={Logo}  width={130} alt="SCS Logo" className=" h-auto mb-4" />
          <p className="text-sm -mt-6">PT. Garam Mulia</p>
          <p className="text-xs">Garam Kemasan Berkualitas</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-2xl">Company</h3>
          <ul className="text-sm mt-2">
            <li className="py-1">
              <a href="/" className="hover:underline">
                Beranda
              </a>
            </li>
            <li className="py-1">
              <a href="/products" className="hover:underline">
                Produk
              </a>
            </li>
            <li className="py-1">
              <a href="/profile" className="hover:underline">
                Profile Perusahaan
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl">Contacts</h3>
          <ul className="text-sm mt-2">
            <li className="py-1">
              Email:{" "}
              <a href="mailto:sales@saranacs.com" className="hover:underline">
                anaferdy01@gmail.com
              </a>
            </li>
            <li className="py-1">
              Phone:{" "}
              <a href="tel:+622188347108" className="hover:underline">
                +62 815 5801 8501
              </a>
            </li>
            <li>Address: Desa Gajah Kumpul RT.1 RW.1</li>
            <li>Kecamatan Batangan</li>
            <li>Kabupaten Pati</li>
            <li>Jawa Tengah - Indonesia</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
