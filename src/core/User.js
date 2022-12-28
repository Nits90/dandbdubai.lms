import React from "react";
import "../core/styles.css";

const User = (newUsers) => {
  // console.log(newUsers.user.data);
  return (
    <>
      <section className="u-line section-padding">
        <div className="container">
          <div className="row">
            {newUsers.user.data?.length > 0
              ? newUsers.user.data.map((item, i) => (
                  <div key={i} className="col-12 col-md-4 mt-3">
                    <div className=" p-5 prod-box">
                      <h2 className="h5 text-center mt-3 mb-3">{item.name}</h2>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
