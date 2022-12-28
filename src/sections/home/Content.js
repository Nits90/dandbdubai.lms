import React, { Fragment } from "react";
import Courses from "../../core/Courses";
// import Users from "../../core/User";
import { useEffect } from "react";
import { useState } from "react";
import DataService from "../../services/data.service";

const Content = () => {
  const [courses, setCourses] = useState([]);
  const [details, setDetails] = useState([]);
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    getCourses();
    // getUsers();
  }, []);

  const getCourses = () => {
    DataService.getCourses().then((data) => {
      // console.log(data.data);
      setCourses(data.data);
    });
    DataService.getCoursesDetail().then((data) => {
      //console.log(data.data.data);
      setDetails(data.data.data);
    });
  };
  // const getUsers = () => {
  //   DataService.getUsers().then((data) => {
  //     console.log(data.data.data);
  //     setUsers(data.data);
  //   });
  // };

  return (
    <Fragment>
      <div className="container-fluid black-bg main-cont">
        <div className="title-bar">
          <div className="container">
            <h1 className="h1">Courses</h1>
          </div>
        </div>
      </div>
      <section className="container py-5">
        <div className="row">
          <Courses course={courses} details={details} />
        </div>
      </section>

      {/* <div className="container-fluid text-center black-bg">
        <div className="col-lg-6 m-auto">
          <h3 className="h3">Users</h3>
        </div>
      </div>
      <section className="container py-5">
        <div className="row">
          <Users user={users} />
        </div>
      </section> */}
    </Fragment>
  );
};

export default Content;
