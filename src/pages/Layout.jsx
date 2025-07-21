import React from "react";
import Navbar from "../components/Navbar/page";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/page";
// import Hero from "../components/Hero/page";
// import AboutUs from "../components/About/page";
// import Clients from "../components/Client/page";
// import Testimonials from "../components/Testimonials/page";
// import Footer from "../components/Footer/page";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <main className="flex-1">
        <Hero />
        <AboutUs />
        <Clients />
        <Testimonials />
      </main>
      <Footer /> */}
      <Footer />
    </div>
  );
};

export default Layout;
