import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid text-center no-padding black-bg">
          <div className="col-lg-6 m-auto">
            <h1 className="mb-0">404</h1>
            <h3>Ooops! That page doesn't exist!</h3>
            <p>
              This file May Have Been Moved or Deleted. Be Sure to Check Your
              Spelling.
            </p>
            <Link to="/" className="btn-second btn-submit">
              Back to Home
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Content;
