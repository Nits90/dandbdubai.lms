import React from "react";
import "../core/styles.css";
import { Link } from "react-router-dom";
// import course img from "../data/course.json";
// import RenderSmoothImage from "./RenderSmoothImage";

const Course = (newCourses) => {
  console.log(newCourses.course.data);
  return (
    <>
      <section className="u-line section-padding">
        <div className="container">
          <div className="row">
            {newCourses.course.data?.length > 0
              ? newCourses.course.data.map((item, i) => (
                  <div key={i} className="col-12 col-md-6 col-lg-4 pb-20">
                    <div className="course-card">
                      <div class="summery-iframe">
                        <img src="/assets/images/courses.jpg" alt="Courses" />
                      </div>
                      <div className="course-card-content bg-off-white">
                        <ul class="course-info-list">
                          <li>
                            <i class="fa fa-user"></i> 23 Students
                          </li>
                          <li>
                            <i class="fa fa-book"></i> 30 Lessons
                          </li>
                        </ul>
                        <h3>
                          <Link
                            to={"/detail/" + item.name}
                            className="text-decoration-none"
                          >
                            {item.name}
                          </Link>
                        </h3>
                        <ul class="course-filter-list">
                          <li class="course-filter-danger">Featured</li>
                          <li class="course-filter-success">Free</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
            {/* {course img.map((item, i) => (
              <div key={i} className="col-12 col-md-4 mt-3">
                <div className=" p-5 prod-box">
                  <Link to="/">
                    <RenderSmoothImage src={item.img} className="img-fluid" />
                  </Link>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
