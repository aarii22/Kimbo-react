import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import loginImg from "../../assets/images/login-indesign.png";
import { Link } from "react-router-dom";
import { history } from "../../Auth/History";

export default function Login() {
  const [loginCredential, setLoginCredential] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState({
    email: "*",
    password: "*"
  });

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
  const onChange = event => {
    const { name, value } = event.target;
    let errors = error;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "*";
        break;
      case "password":
        errors.password = value.length < 4 ? "*" : "";
        break;
      default:
        break;
    }

    let tempLoginCredential = { ...loginCredential };
    tempLoginCredential[name] = value;
    setError(errors);
    setLoginCredential(tempLoginCredential);
  };
  const handleSubmit = event => {
    if (
      validateForm(error) &&
      loginCredential.email.length &&
      loginCredential.password.length
    ) {
      history.push("/home");
      // console.log(loginCredential);
      // axios
      //   .post(`${FLASK_PORT}login`, loginCredential, config)
      //   .then(response => {
      //     if (response.data.status === 200) {
      //       console.log(response);
      //     } else {
      //       alert(response.data.message);
      //     }
      //   });
    }
  };
  console.log(error, loginCredential);
  return (
    <div>
      <div className="login">
        <div className="login-1">
          <div className="login-head">
            <div className="login-head-logo">
              <img src={logo} alt="logo.png" />
            </div>
            <div>
              <img src={loginImg} alt="login.png" />
            </div>
          </div>
        </div>
        <div className="login-2">
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <div class="field">
                      <input type="email" name="fullname" id="fullname" placeholder="User"
                        className="text-box"
                        type="email"
                        value={loginCredential.email}
                        name="email"
                        onChange={onChange}
                      />
                      <label for="fullname">Email</label>
                    </div>
              <div class="field">
                      <input type="password" name="email" id="email" placeholder="user@example.com"
                        className="text-box"
                        type="password"
                        name="password"
                        value={loginCredential.password}
                        onChange={onChange}
                      />
                      <label for="email">Password</label>
                </div>
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    Forgot Password?{" "}
                    <span className="primary-color">Reset</span>
                  </p>
                  <p>
                    Don’t Have an account?{" "}
                    <span className="primary-color">
                      <Link to="/signup">Signup</Link>
                    </span>
                  </p>
                </div>
                <div className="col-sm-6">
                  <span className="right">
                    <Link to="/home">
                      <button
                        className="primary-button"
                        style={{
                          opacity:
                            (error.email.length || error.password.length) &&
                            (!loginCredential.email.length ||
                              !loginCredential.password.length)
                              ? "0.4"
                              : ""
                        }}
                        disabled={
                          (error.email.length || error.password.length) &&
                          (!loginCredential.email.length ||
                            !loginCredential.password.length)
                        }
                        onClick={handleSubmit}
                      >
                        SIGN IN
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
