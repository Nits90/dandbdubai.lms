import React from "react";
import Navbar from "../core/Navbar";
import "../core/styles.css";
import Content from "../sections/login/Content";

const Login = () => {
  React.useEffect(() => {
    document.title = "LMS - Login";
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Content />
    </div>
  );
};

export default Login;
