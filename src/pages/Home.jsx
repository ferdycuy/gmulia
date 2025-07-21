import React from "react";
import Hero from "../components/Hero/page";
import AboutUs from "../components/About/page";
import Clients from "../components/Client/page";
import Testimonials from "../components/Testimonials/page";
import Footer from "../components/Footer/page";
import ClientList from "../components/Client/list";
// import ContactUs from "../components/Contact/page";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Clients />
      {/* <ClientList /> */}
      <Testimonials />
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
