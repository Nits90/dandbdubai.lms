import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="app">
      <footer id="tempaltemo_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <h2 className="h2 text-success pb-3 border-light logo">
                <img
                  src="/assets/images/footer-logo.png"
                  className="card-img-top"
                  alt="..."
                />
              </h2>
              <p>
                Working to bring significant changes in online-based learning by
                doing extensive research for course curriculum preparation,
                student engagements, and looking forward to the flexible
                education!
              </p>
              <ul className="social-icons">
                <li>
                  <Link to="/" className="text-decoration-none">
                    <i className="fab fa-facebook-square"> </i>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none">
                    <i className="fab fa-instagram-square"> </i>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none">
                    <i className="fab fa-twitter-square"> </i>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none">
                    <i className="fab fa-linkedin "> </i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 footer-subscribe">
              <h5 className="h5 text-light pb-3 border-light">About</h5>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <Link className="text-decoration-none" to="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none" to="/">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 ">
              <h5 className="h5 text-light pb-3 border-light">Information</h5>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <Link className="text-decoration-none" to="/">
                    Privacy Poilicies
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none" to="/">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none" to="/">
                    Become a Teacher
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 ">
              <h5 className="h5 text-light pb-3 border-light">Address</h5>
              <ul className="list-unstyled text-light footer-link-list footer-contact">
                <li>
                  <span>
                    <i className="fa fa-phone"></i>
                  </span>
                  <Link className="text-decoration-none" to="/">
                    800 388 80 90
                  </Link>
                </li>
                <li>
                  <span>
                    <i className="fa fa-envelope"></i>
                  </span>
                  <Link className="text-decoration-none" to="/">
                    email@gmail.com
                  </Link>
                </li>
                <li>
                  <span>
                    <i className="fa fa-clock"></i>
                  </span>
                  9 AM – 5 PM , Monday – Friday
                </li>

                <li>
                  <span>
                    <i className="fa fa-map-marker-alt"></i>
                  </span>
                  Abc xyz qwerty
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
