import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <Link
          className="navbar-brand text-dark logo h1 align-self-center mobile-logo"
          to="/"
        >
          <img
            src="/assets/images/logo.webp"
            className="card-img-top"
            alt="..."
          />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#templatemo_main_nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container d-flex justify-content-between align-items-center">
          <div
            className="col-md-4 align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_logo"
          >
            <Link
              className="navbar-brand text-dark logo h1 align-self-center"
              to="/"
            >
              <img
                src="/assets/images/logo.webp"
                className="card-img-top"
                alt="..."
              />
            </Link>
          </div>

          <div
            className="col-md-4 align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <Menu />
            </div>
          </div>
        </div>
      </nav>
      <div
        className="modal fade bg-white"
        id="templatemo_search"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            action=""
            method="get"
            className="modal-content modal-body border-0 p-0"
          >
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                className="input-group-text bg-success text-light"
              >
                <i className="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
