import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header.component";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
