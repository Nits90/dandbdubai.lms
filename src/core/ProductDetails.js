import React from "react";
import "../core/styles.css";

const ProductDetails = (props) => {
  //console.log(props.reportDetails);
  console.log(props.reportDetails);
  return (
    <>
      <section className="u-line section-padding">
        <div className=" title-banner">
          <div className="container">
            <div className="row">
              <div className="col-12 mt-3">
                <h2>{props.details.course_name}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 mt-3 course-details">
              <h2>Overview</h2>
              <h4>{props.details.department}</h4>
              <p>{props.details.description}</p>
              <div className="container-fluid">
                <div className="row">
                  {props.details.topics?.length > 0
                    ? props.details.topics.map((item, i) => (
                        <div key={i} className="col-md-12 p-0 pb-20">
                          <div className="course-card">
                            <h5 className="h5">{item.topic}</h5>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-3">
              <div class="summery-details-item sidebar-to-header">
                <div class="summery-box">
                  <div class="summery-iframe">
                    <img
                      className=""
                      src={`${props.details.hero_image}`}
                      alt="Courses"
                    />
                  </div>
                  {props.reportDetails.result?.length > 0
                    ? props.reportDetails.result.map((item, i) => (
                        <div
                          key={i}
                          className="col-md-12 p-0 pb-20 summery-innerbox"
                        >
                          <div class="summery-inner">
                            <div class="summery-list">
                              <div class="summery-list-item">
                                <div class="summery-label">Level</div>
                                <div class="summery-option">{item.program}</div>
                              </div>
                              <div class="summery-list-item">
                                <div class="summery-label">Instructor</div>
                                <div class="summery-option">
                                  {item.instructor}
                                </div>
                              </div>
                              <div class="summery-list-item">
                                <div class="summery-label">Lessons</div>
                                <div class="summery-option">10</div>
                              </div>
                              <div class="summery-list-item">
                                <div class="summery-label">Enrolled</div>
                                <div class="summery-option">
                                  {item.student_count} Student
                                </div>
                              </div>
                              <div class="summery-list-item">
                                <div class="summery-label">Access</div>
                                <div class="summery-option">Lifetime</div>
                              </div>
                              <div class="summery-list-item">
                                <div class="summery-label">Language</div>
                                <div class="summery-option">English</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
