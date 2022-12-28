import React from "react";
import Navbar from "../core/Navbar";
import Content from "../sections/home/Content";
import Footer from "../core/Footer";
import "../core/styles.css";

const Homepage = () => {
  React.useEffect(() => {
    document.title = "LMS";
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default Homepage;
