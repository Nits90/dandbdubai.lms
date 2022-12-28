import axios from "axios";

const API_URL = process.env.REACT_APP_PROXY_URL;

const getCourses = (name, topic) => {
  return axios
    .get(API_URL + "resource/Course", {
      course_details: {
        name: name,
        topic: topic,
      },
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
const getCoursesDetail = (item_code) => {
  return axios
    .get(API_URL + "resource/Course/" + item_code)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error.response;
    });
};
const getReportDetail = (item_code) => {
  return axios
    .get(
      API_URL +
        "method/frappe.desk.query_report.run?report_name=Course%20Detail"
    )
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error.response;
    });
};

const getUsers = () => {
  return axios
    .get(API_URL + "resource/User")
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
const DataService = {
  getCoursesDetail,
  getCourses,
  getUsers,
  getReportDetail,
};

export default DataService;
