import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import NoPage from "./pages/404.jsx";
// import ProjectDetailPage from "./components/Portfolio/detail.jsx";
import ProfileDetail from "./components/Profile/detail.jsx";
import Career from "./components/career/page.jsx";
import JobDetail from "./components/career/detail/detail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
          <Route path="/profile/:slug" component={ProfileDetail} />
          <Route path="/Profile" element={<ProfilePage />} />
          {/* <Route path="/career" element={<Career />} />
          <Route path="/career/:slug" element={<JobDetail />} /> */}
          {/* Rute ke detail pekerjaan berdasarkan ID */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
