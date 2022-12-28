import React from "react";
import Footer from "../core/Footer";
import Navbar from "../core/Navbar";
import Content from "../sections/bestseller/Content";
import "../core/styles.css";

const Bestsellerpage = () => {
  React.useEffect(() => {
    document.title = "Exclusive Elements - Bestseller";
  }, []);
  return (
    <div className="app page-bestseller">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default Bestsellerpage;
