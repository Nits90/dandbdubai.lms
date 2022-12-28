import React from "react";
import Footer from "../core/Footer";
import Navbar from "../core/Navbar";
import Content from "../sections/pagenotfound/Content";
import "../core/styles.css";

const PageNotFound = () => {
  React.useEffect(() => {
    document.title = "Exclusive Elements - Page Not Found ";
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default PageNotFound;
