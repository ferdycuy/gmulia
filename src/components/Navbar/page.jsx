import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "/garam-mulia-transparant.png";

const Navbar = () => {
  const location = useLocation();
  const activeClass = "text-secondary font-bold";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBlogPage = location.pathname.startsWith("/profile");

  return (
    <nav
      className={`fixed w-full z-[99] transition-all duration-300 ease-in-out ${
        isBlogPage
          ? scrolled
            ? "bg-white shadow-md py-2"
            : "bg-transparent text-white py-4"
          : scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo Kiri */}
        <Link to="/" className="text-xl font-bold max-w-[120px]">
          <img
            src={Logo}
            width={scrolled ? 150 : 250}
            alt="logo-scs"
            className="transition-all duration-300 ease-in-out"
          />
        </Link>

        {/* Menu Tengah */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          <Link to="/" className={location.pathname === "/" ? activeClass : ""}>Home</Link>
          <Link to="/products" className={location.pathname === "/products" ? activeClass : ""}>Produk Kami</Link>
          {/* <Link to="/portfolio" className={location.pathname === "/portfolio" ? activeClass : ""}>Portfolio</Link> */}
          <Link to="/profile" className={location.pathname === "/profile" ? activeClass : ""}>Profile Perusahaan</Link>
          {/* <Link to="/career" className={location.pathname === "/career" ? activeClass : ""}>Career</Link> */}
        </div>

        {/* Button Kanan */}
        <div className="hidden md:block">
          <Link to="/contact" className="button rounded-md bg-secondary text-white p-2 px-5">
            Contact Us
          </Link>
        </div>

        {/* Toggle Button Mobile */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-20 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end items-center p-4">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start p-4 space-y-4">
          <Link to="/" className={`w-full ${location.pathname === "/" ? activeClass : ""}`} onClick={toggleMenu}>Home</Link>
          <Link to="/products" className={`w-full ${location.pathname === "/products" ? activeClass : ""}`} onClick={toggleMenu}>Produk Kami</Link>
          {/* <Link to="/portfolio" className={`w-full ${location.pathname === "/portfolio" ? activeClass : ""}`} onClick={toggleMenu}>Portfolio</Link> */}
          <Link to="/Profile" className={`w-full ${location.pathname === "/profile" ? activeClass : ""}`} onClick={toggleMenu}>Profile Perusahan</Link>
          {/* <Link to="/career" className={`w-full ${location.pathname === "/career" ? activeClass : ""}`} onClick={toggleMenu}>Career</Link> */}
          <Link to="/contact" className="w-full rounded-md bg-secondary text-white p-2 text-center" onClick={toggleMenu}>Contact Us</Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
