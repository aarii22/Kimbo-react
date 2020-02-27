import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import loginImg from "../../assets/images/login-indesign.png";
import { config } from "../../Auth";
import axios from "axios";
import { FLASK_PORT } from "../../Auth/PortConstant";

export default function SignUp() {
  const [signUpCredential, setSignUpCredential] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [termsCondition, setTermsCondition] = useState(false);

  const onChangeForm = e => {
    let temp = { ...signUpCredential };
    const { name, value } = e.target;
    temp[name] = value;
    setSignUpCredential(temp);
  };
  const onChangeTermsCondition = () => {
    setTermsCondition(!termsCondition);
  };
  const onClickRegister = e => {
    e.preventDefault();
    console.log({ ...signUpCredential, termsCondition: termsCondition });
    axios
      .post(
        `${FLASK_PORT}signup`,
        { ...signUpCredential, termsCondition: termsCondition },
        config
      )
      .then(response => {
        if (response.data.status === 200) {
          console.log(response);
        } else {
          alert(response.data.message);
        }
      });
  };
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
        <div className="login-2 create-login">
          <div className="login-form">
            <h2>Create Account</h2>
            <div className="row">
              <div className="col-sm-6">
                <form>
                  <div className="label3">
                    <input
                      className="text-box"
                      type="text"
                      name="firstName"
                      value={signUpCredential.firstName}
                      onChange={onChangeForm}
                    />
                    <label className="label4">First Name</label>
                  </div>
                </form>
              </div>
              <div className="col-sm-6">
                <form>
                  <div className="label3">
                    <input
                      className="text-box"
                      type="text"
                      name="lastName"
                      value={signUpCredential.lastName}
                      onChange={onChangeForm}
                    />
                    <label className="label4">Last Name</label>
                  </div>
                </form>
              </div>
              <div className="col-sm-12">
                <form>
                  <div className="label3">
                    <input
                      className="text-box"
                      type="email"
                      name="email"
                      value={signUpCredential.email}
                      onChange={onChangeForm}
                    />
                    <label className="label4">Email</label>
                  </div>
                </form>
              </div>
              <div className="col-sm-6">
                <form>
                  <div className="label3">
                    <input
                      className="text-box"
                      type="password"
                      name="password"
                      value={signUpCredential.password}
                      onChange={onChangeForm}
                    />
                    <label className="label4">Password</label>
                  </div>
                </form>
              </div>
              <div className="col-sm-6">
                <form>
                  <div className="label3">
                    <input
                      className="text-box"
                      type="password"
                      name="confirmPassword"
                      value={signUpCredential.confirmPassword}
                      onChange={onChangeForm}
                    />
                    <label className="label4">Confirm Password</label>
                  </div>
                </form>
              </div>
              <div className="col-md-12">
                <div className="checkbox-label">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="termsCondition"
                      value={termsCondition}
                      checked={termsCondition ? true : false}
                      onChange={onChangeTermsCondition}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <p>
                    I agree to the <a href="">terms & conditions</a> and{" "}
                    <a href="">Policy.</a>
                  </p>
                </div>
              </div>
              <div className="col-sm-12">
                <span className="float-right">
                  <a href="">
                    <button
                      className="primary-button right"
                      onClick={onClickRegister}
                    >
                      Register
                    </button>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
