import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import AuthService from "../../services/auth.service";
const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">This field is required!</div>
    );
  }
};
const Content = () => {
  const form = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    showPassword: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const auth = cookie.get("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    AuthService.login(username, password).then(
      (data) => {
        //console.log(data)
        // if (data.message.success_key === 1) {
        //   window.history.go(-1);
        // }
        setLoading(false);
        navigate("/");
      },
      (error) => {
        //console.log(error)
        if (error.response.data.message.success_key === 0) {
          setLoading(false);
          setMessage(error.response.data.message.message);
        }
      }
    );
  };
  return (
    <div className="inner-wrapper page-login-signup">
      <div className="container-fluid no-padding login-bg">
        <div className="row login-main-cont">
          <div className=" col-lg-12 col-md-12 col-sm-12">
            <div className="section-2 user-page ">
              <div className="login-sec">
                <div className="login-box">
                  {message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    </div>
                  )}
                  <form onSubmit={handleLogin} ref={form}>
                    <h4 className="login-reg-head">Login</h4>
                    <div className="row">
                      <div className="col-12">
                        <p className="text-light-black"></p>
                        <div className="form-group">
                          <input
                            type="inout"
                            className="form-control form-control-submit"
                            placeholder="Email I'd"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                          />
                          <span className="required">*</span>
                        </div>
                        <div className="form-group">
                          <input
                            type={values.showPassword ? "text" : "password"}
                            className="form-control form-control-submit"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                          />
                          <span className="required">*</span>
                          <div
                            data-name="#password-field"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            className={
                              values.showPassword
                                ? "fa fa-fw fa-eye  field-icon toggle-password"
                                : "fa fa-fw fa-eye-slash  field-icon toggle-password"
                            }
                          />
                        </div>
                        <div className="form-group checkbox-reset">
                          <label className="custom-checkbox mb-0">
                            <input type="checkbox" name="#" />
                            <span className="checkmark" /> Keep me signed in
                          </label>
                        </div>

                        <div className="form-group text-center mb-0">
                          <button
                            type="submit"
                            className="btn-second btn-submit full-width"
                            disabled={loading}
                          >
                            {loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}{" "}
                            <span>Login</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
