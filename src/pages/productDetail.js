import React from "react";
import Footer from "../core/Footer";
import Navbar from "../core/Navbar";
import Content from "../sections/course/content";
import "../core/styles.css";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();
  console.log(params.item_id);
  React.useEffect(() => {
    document.title = "LMS - Course Detail";
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Content productId={params.item_id} />

      <Footer />
    </div>
  );
};

export default DetailPage;
