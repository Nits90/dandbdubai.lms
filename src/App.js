import ReactDOM from "react-dom/client";
import React from "react";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

const App = () => {
  React.useEffect(() => {
    document.title = "LMS";
  }, []);
  return <h1>LMS</h1>;
};
export default App;
