import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { RestrictedAccess } from "./private component/RestrictedAccess";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import DetailPage from "./pages/productDetail";
// import { Profile } from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route element={<RestrictedAccess />}>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Homepage />} />
          </Route>
          <Route exact path="/detail/:item_id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
