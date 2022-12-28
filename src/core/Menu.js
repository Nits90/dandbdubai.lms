import React from "react";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const auth = cookie.get("user");
  const navigate = useNavigate();

  const logout = () => {
    if (window.confirm("You will be logged out of application")) {
      cookie.remove("user");
      navigate("/Login");
    }
  };
  return (
    <div className="app">
      <ul className="nav navbar-nav d-flex justify-content-flex-end mx-lg-auto">
        <li className="nav-item">
          <a href="/" className="text-light-white fw-500">
            <span className="menu-items-name">Courses</span>
          </a>
        </li>
        {auth ? (
          <li className="nav-item">
            <a className="nav-a" href=" " onClick={logout}>
              <span className="menu-items-name">Logout</span>
            </a>
          </li>
        ) : (
          <li className="nav-item">
            <a className="nav-a" href="/Login">
              <span className="menu-items-name">Login</span>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
