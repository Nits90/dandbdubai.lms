import React, { Fragment, useState, useEffect } from "react";
import ProductDetails from "../../core/ProductDetails";
import DataService from "../../services/data.service";

const Content = (props) => {
  const [details, setDetails] = useState("");
  const [reportDetails, setReportDetails] = useState("");

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line
  }, [props.productId]);
  console.log(props.productId);
  const getDetail = () => {
    DataService.getCoursesDetail(props.productId).then((data) => {
      //console.log(data)
      setDetails(data.data.data);
    });
    DataService.getReportDetail(props.productId).then((data) => {
      //console.log(data.data.message)
      setReportDetails(data.data.message);
    });
  };

  return (
    <Fragment>
      <section className="container-fluid py-4">
        <div className="row">
          <div className="col-md-12 col-lg-12 pl-90 productDetails">
            <ProductDetails details={details} reportDetails={reportDetails} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Content;
