import React from "react";
import Footer from "../core/Footer";
import Navbar from "../core/Navbar";
import Content from "../sections/productCategory/Content";
import "../core/styles.css";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const params = useParams();

  React.useEffect(() => {
    document.title = `Exclusive Elements - Category ${params.item_group}`;
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app page-bestseller">
      <Navbar />
      <Content group={params.item_group} />
      <Footer />
    </div>
  );
};

export default CategoryPage;
