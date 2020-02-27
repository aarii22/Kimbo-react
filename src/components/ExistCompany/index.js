import React from "react";
import { Link } from "react-router-dom";

export default function ExistCompany() {
  return (
    <div>
      <div className="container new_workflow">
        <div className="form-progress">
          <div className="row bs-wizard" style={{ borderBottom: "0" }}>
            <div className="bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">Step 1</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step disabled">
              <div className="text-center bs-wizard-stepnum">Step 2</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step disabled">
              <div className="text-center bs-wizard-stepnum">Step 3</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step disabled">
              <div className="text-center bs-wizard-stepnum">Step 4</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step disabled">
              <div className="text-center bs-wizard-stepnum">Step 5</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>
          </div>
        </div>

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
          <p>
            As you have selected a company secretary subscription without
            Incorporation, can we assume that you already have an existing
            company and hence a company secretary?
          </p>
        </div>

        <div className="new-workflow-form-1">
          <div className="row">
            <div className="col-md-12">
              <h3>About your existing company</h3>
            </div>
            <div className="col-md-6">
              <div className="">
                <div className="workflow-form">
                  <label>UEN</label>
                  <br />
                  <input type="text" className="line-textbox line-textbox-2" />
                  <button className="primary-button">Check</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <div className="workflow-form">
                  <label>Company Name</label>
                  <br />
                  <input type="text" className="line-textbox line-textbox-3" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <div className="workflow-form">
                  <label>Name of the current Secretary</label>
                  <br />
                  <input type="text" className="line-textbox line-textbox-3" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className=""></div>
            </div>
            <div className="col-md-12 about-textbox">
              <label>Please describe your business</label>
              <textarea
                aria-label="Please describe your business"
                rows="5"
              ></textarea>
              <p>Description must have atleast 100 or more characters</p>
            </div>
            <div className="col-md-12 workflow-form-dropdown">
              <label>SSIC - Company Activity</label>
              <select>
                <option>[01111] Growing of leafy and fruit vegetables</option>
                <option>[01111] Growing of leafy and fruit vegetables</option>
                <option>[01111] Growing of leafy and fruit vegetables</option>
                <option>[01111] Growing of leafy and fruit vegetables</option>
              </select>
            </div>
            <div className="col-md-12 workflow-form-checkbox">
              <p>
                Why are you interested in incorporating your business in
                Singapore?
              </p>
              <p className="Warning-color"> Please select atleast 1.</p>
              <div className="checkbox-label">
                <label className="checkbox-container">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
                <p>Expansion of existing business</p>
                <br />
                <label className="checkbox-container">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
                <p>Entering into Asia</p>
                <br />
                <label className="checkbox-container">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
                <p>Requested by parties we work with</p>
                <br />
                <label className="checkbox-container">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
                <p>Singapore is internationally recognized hub</p>
                <br />
                <label className="checkbox-container">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
                <p>Others please specify</p>
                <br />
              </div>
            </div>
            <div className="col-md-12 workflow-form-checkbox">
              <p>
                Why are you interested in incorporating your business in
                Singapore?
              </p>
              <p className="Warning-color"> Please select atleast 1.</p>
              <div className="checkbox-label">
                <label className="checkbox-container">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
                <p>Expansion of existing business</p>
                <br />
                <label className="checkbox-container">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
                <p>Entering into Asia</p>
                <br />
                <label className="checkbox-container">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
                <p>Requested by parties we work with</p>
                <br />
                <label className="checkbox-container">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
                <p>Singapore is internationally recognized hub</p>
                <br />
                <label className="checkbox-container">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
                <p>Others please specify</p>
                <br />
              </div>
            </div>
            <div className="col-md-12">
              <Link to="/company-address">
                <button className="primary-button right">Save & Next</button>
              </Link>
            </div>
            <div className="clo-md-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
