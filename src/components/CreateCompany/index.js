import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

export default function CreateCompany(props) {
  const [companyInformation, setCompanyInformation] = useState({
    proposedName: "",
    firstChoice: "",
    businessDetail: "",
    companyActivity: ""
  });

  const businessInterestPoints = [
    "Expansion of existing business",
    "Entering into Asia",
    "Requested by parties we work with",
    "Singapore is internationally recognized hub",
    "Others please specify"
  ];
  const sourceFund = [
    "Savings From Employment",
    "Profits generated from business",
    "Investment gain",
    "Loans from family and friends",
    "Investors"
  ];
  const [businessPoints, setBusinessPoints] = useState([]);
  const [sourceFunds, setSourceFunds] = useState([]);

  const onChangeCompanyInformation = e => {
    const { name, value } = e.target;
    let temp = { ...companyInformation };
    temp[name] = value;
    setCompanyInformation(temp);
  };
  const onCheckProposedName = e => {
    alert("check click");
  };
  const onChangeCompanyActivity = e => {
    let temp = { ...companyInformation };
    temp["companyActivity"] = e.target.value;
    setCompanyInformation(temp);
  };
  const onChangeBusinessPoints = point => {
    let temp = [...businessPoints];
    if (temp.includes(point)) {
      const index = temp.indexOf(point);
      if (index > -1) {
        temp.splice(index, 1);
      }
    } else {
      temp = [...temp, point];
    }

    setBusinessPoints(temp);
  };
  const onSelectSourceFund = point => {
    let temp = [...sourceFunds];
    if (temp.includes(point)) {
      const index = temp.indexOf(point);
      if (index > -1) {
        temp.splice(index, 1);
      }
    } else {
      temp = [...temp, point];
    }
    setSourceFunds(temp);
  };
  const onClickSave = e => {
    e.preventDefault();
    let tempObj = {
      ...companyInformation,
      businessPoints: businessPoints,
      sourceFunds: sourceFunds
    };
    props.showNextComponent();
  };

  return (
    <div>
      <div className="container new_workflow">
        <ProgressBar />
        <div className="workflow-header">
          <svg
            id="Layer_1_1_"
            enable-background="new 0 0 64 64"
            height="512"
            viewBox="0 0 64 64"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m27 12h10v2h-10z" />
            <path d="m27 16h10v2h-10z" />
            <path d="m57 54v-8c0-.444-.293-.835-.72-.96l-23.28-6.79v-12.25h7c.553 0 1-.448 1-1v-16c0-.265-.105-.52-.293-.707l-6-6c-.187-.188-.441-.293-.707-.293h-10c-.553 0-1 .448-1 1v22c0 .552.447 1 1 1h7v12.25l-23.28 6.79c-.427.125-.72.516-.72.96v8c0 .444.293.835.72.96l24 7c.092.027.185.04.28.04s.188-.013.28-.04l24-7c.427-.125.72-.516.72-.96zm-22-48.586 2.586 2.586h-2.586zm-10-1.414h8v5c0 .552.447 1 1 1h5v14h-14zm6 36.333v5.253l-2.293-2.293-1.414 1.414 4 4c.195.195.451.293.707.293s.512-.098.707-.293l4-4-1.414-1.414-2.293 2.293v-5.253l19.429 5.667-20.429 5.958-20.429-5.958zm-22 7 22 6.417v5.917l-22-6.417zm24 12.334v-5.917l22-6.417v5.917z" />
            <path d="m27 8h4v2h-4z" />
            <path d="m3 26h7c0 2.757 2.243 5 5 5h3c1.654 0 3 1.346 3 3v1.586l-2.293-2.293-1.414 1.414 4 4c.195.195.451.293.707.293s.512-.098.707-.293l4-4-1.414-1.414-2.293 2.293v-1.586c0-2.757-2.243-5-5-5h-3c-1.654 0-3-1.346-3-3h7c.553 0 1-.448 1-1v-16c0-.265-.105-.52-.293-.707l-6-6c-.187-.188-.441-.293-.707-.293h-10c-.553 0-1 .448-1 1v22c0 .552.447 1 1 1zm11-20.586 2.586 2.586h-2.586zm-10-1.414h8v5c0 .552.447 1 1 1h5v14h-14z" />
            <path d="m6 12h10v2h-10z" />
            <path d="m6 16h10v2h-10z" />
            <path d="m6 20h10v2h-10z" />
            <path d="m6 8h4v2h-4z" />
            <path d="m62 25v-16c0-.265-.105-.52-.293-.707l-6-6c-.187-.188-.441-.293-.707-.293h-10c-.553 0-1 .448-1 1v22c0 .552.447 1 1 1h7c0 1.654-1.346 3-3 3h-3c-2.757 0-5 2.243-5 5v1.586l-2.293-2.293-1.414 1.414 4 4c.195.195.451.293.707.293s.512-.098.707-.293l4-4-1.414-1.414-2.293 2.293v-1.586c0-1.654 1.346-3 3-3h3c2.757 0 5-2.243 5-5h7c.553 0 1-.448 1-1zm-6-19.586 2.586 2.586h-2.586zm-10 18.586v-20h8v5c0 .552.447 1 1 1h5v14z" />
            <path d="m48 12h10v2h-10z" />
            <path d="m48 16h10v2h-10z" />
            <path d="m48 20h10v2h-10z" />
            <path d="m48 8h4v2h-4z" />
            <path d="m27 20h2v2h-2z" />
            <path d="m31 20h2v2h-2z" />
            <path d="m35 20h2v2h-2z" />
          </svg>
          <h1>Let's Piece this together</h1>
        </div>
        <div className="new-workflow-form-1">
          <div className="row">
            <div className="col-md-12">
              <h3>Information about your new company</h3>
            </div>
            <div className="col-md-12">
              <div>
                <div className="workflow-form">
                  <label>Proposed Name - First Choice</label>
                  <br />
                  <input
                    type="text"
                    className="line-textbox"
                    name="proposedName"
                    onChange={onChangeCompanyInformation}
                    value={companyInformation.proposedName}
                  />
                  <input
                    type="text"
                    className="dotted-textbox"
                    name="firstChoice"
                    onChange={onChangeCompanyInformation}
                    value={companyInformation.firstChoice}
                  />
                  <button
                    className="primary-button"
                    onClick={onCheckProposedName}
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <p>
                Incorporation Tentative Date : 26 Feb 2020
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              </p>
            </div>
            <div className="col-md-12">
              <p>
                Financial Year End : 31 Jan 2021
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              </p>
            </div>
            <div className="col-md-12 about-textbox">
              <label>Please describe your business</label>
              <textarea
                aria-label="Please describe your business"
                rows="5"
                name="businessDetail"
                onChange={onChangeCompanyInformation}
                value={companyInformation.businessDetail}
              ></textarea>
              <p>Description must have atleast 100 or more characters</p>
            </div>
            <div className="col-md-12 workflow-form-dropdown">
              <label>SSIC - Company Activity</label>
              <select
                onChange={onChangeCompanyActivity}
                value={companyInformation.companyActivity}
              >
                <option value="First">
                  [01111] Growing of leafy and fruit vegetables
                </option>
                <option value="Second">
                  [01111] Growing of leafy and fruit vegetables
                </option>
                <option value="Third">
                  [01111] Growing of leafy and fruit vegetables
                </option>
                <option value="Fourth">
                  [01111] Growing of leafy and fruit vegetables
                </option>
              </select>
            </div>
            <div className="col-md-12 workflow-form-checkbox">
              <p>
                Why are you interested in incorporating your business in
                Singapore?
              </p>
              <p className="Warning-color"> Please select atleast 1.</p>
              <div className="checkbox-label">
                {businessInterestPoints.map((eachPoint, index) => {
                  return (
                    <>
                      <label className="checkbox-container" key={index}>
                        <input
                          type="checkbox"
                          checked={
                            businessPoints.includes(eachPoint) ? "checked" : ""
                          }
                          onChange={() => onChangeBusinessPoints(eachPoint)}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <p>{eachPoint}</p>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-12 workflow-form-checkbox">
              <p>Select your company's source of fund</p>
              <p className="Warning-color"> Please select atleast 1.</p>
              <div className="checkbox-label">
                {sourceFund.map((eachFund, index) => {
                  return (
                    <>
                      <label className="checkbox-container" key={index}>
                        <input
                          type="checkbox"
                          checked={
                            sourceFunds.includes(eachFund) ? "checked" : ""
                          }
                          onChange={() => onSelectSourceFund(eachFund)}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <p>{eachFund}</p>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-12">
              <span className="float-right margin-bottom">
                <button
                  className="primary-button right"
                  // style={{
                  //   opacity:
                  //     companyInformation.proposedName.length &&
                  //     companyInformation.firstChoice.length &&
                  //     sourceFunds.length &&
                  //     businessPoints.length
                  //       ? ""
                  //       : "0.4"
                  // }}
                  // disabled={
                  //   !companyInformation.proposedName.length &&
                  //   !companyInformation.firstChoice.length &&
                  //   !sourceFunds.length &&
                  //   !businessPoints.length
                  // }
                  onClick={onClickSave}
                >
                  Save & Next
                </button>
              </span>
            </div>
            <div className="clo-md-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
