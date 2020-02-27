import React, { useState } from "react";
import profile from "../../assets/images/profile.png";
import { Link } from "react-router-dom";
import Directors from "./Directors";
import Shareholders from "./Shareholders";

export default function DirectorsShareholders(props) {
  const [activeCard, setActiveCard] = useState("");
  const currentActiveCard = card => {
    setActiveCard(card);
  };
  const onClickSave = () => {
    props.showNextComponent();
  };
  return (
    <div>
      <div className="container new_workflow">
        <div className="form-progress">
          <div className="row bs-wizard" style={{ borderBottom: "0" }}>
            <div className="bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">
                Company information
              </div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">Address</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">
                Directors & Shareholders
              </div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step disabled">
              <div className="text-center bs-wizard-stepnum">Accounting</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step disabled">
              <div className="text-center bs-wizard-stepnum">Payment</div>
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
            height="480pt"
            viewBox="0 -1 480.00003 480"
            width="480pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m364.9375 369.601562-8.464844-8.464843 5.664063-5.65625c0-.046875.046875-.105469.085937-.144531l16.855469-16.855469 5.65625 5.664062c3.125 3.121094 8.191406 3.121094 11.3125 0l45.257813-45.257812c3.121093-3.121094 3.121093-8.1875 0-11.3125l-101.824219-101.796875c-3.175781-3.003906-8.140625-3.003906-11.3125 0l-45.257813 45.253906c-3.121094 3.125-3.121094 8.1875 0 11.3125l5.65625 5.65625-15.277344 15.28125-12.257812 2.4375-23.375-23.375c-1.5-1.5-3.535156-2.34375-5.65625-2.34375h-30.625l-14.632812-14.625c3.125-3.121094 3.125-8.1875 0-11.3125l-45.246094-45.261719c-1.5-1.503906-3.535156-2.347656-5.660156-2.347656s-4.160157.84375-5.660157 2.347656l-90.511719 90.511719c-3.125 3.125-3.125 8.1875 0 11.3125l45.257813 45.253906c3.121094 3.125 8.1875 3.125 11.308594 0l51.945312 51.945313c-3.488281 7.210937-3.121093 15.691406.980469 22.570312 4.101562 6.878907 11.386719 11.238281 19.386719 11.597657.511719 12.289062 10.367187 22.125 22.65625 22.617187.523437 12.253906 10.339843 22.066406 22.59375 22.589844.503906 9.429687 6.5 17.679687 15.308593 21.074219 8.8125 3.390624 18.792969 1.292968 25.492188-5.363282l8.503906 8.503906c6.671875 6.761719 16.714844 8.929688 25.585938 5.527344 8.871094-3.40625 14.882812-11.738281 15.316406-21.230468 12.273438-.503907 22.105469-10.339844 22.609375-22.613282 12.277344-.519531 22.117187-10.355468 22.636719-22.632812 9.457031-.453125 17.753906-6.445313 21.15625-15.277344 3.40625-8.835938 1.273437-18.84375-5.433594-25.523438zm-31.113281-166.882812 90.511719 90.539062-33.9375 33.941407-90.519532-90.511719zm33.945312 124.480469-11.3125 11.3125-67.882812-67.878907 11.304687-11.3125zm-76.371093-8.480469c3.125 3.125 3.125 8.1875 0 11.3125-3.160157 3.035156-8.148438 3.035156-11.308594 0l-33.945313-33.933594c-3.125-3.125-8.1875-3.125-11.3125 0-9.375 9.378906-24.578125 9.378906-33.953125 0l-11.277344 11.300782c2.902344 2.851562 6.226563 5.242187 9.855469 7.089843l-40.976562 40.976563-28.304688-28.265625 71.199219-71.199219h27.3125zm-200.796876-19.796875-33.96875-33.953125 79.199219-79.199219 33.945313 33.941407zm84.855469-62.226563 11.296875 11.304688-67.898437 67.878906-11.3125-11.3125zm62.144531 217.226563c-2.097656.007813-4.117187-.816406-5.601562-2.296875-3.074219-3.085938-3.113281-8.066406-.089844-11.199219l16.53125-16.53125 6.167969-6.152343-11.296875-11.34375-6.183594 6.1875-16.503906 16.4375-.074219.089843c-3.183593 2.839844-8.039062 2.679688-11.027343-.367187-2.992188-3.042969-3.066407-7.898438-.171876-11.035156l22.648438-22.632813-11.3125-11.308594-22.625 22.628907c-3.121094 3.128906-8.1875 3.128906-11.316406.003906-3.125-3.121094-3.125-8.1875-.003906-11.3125l22.632812-22.625-11.3125-11.3125-22.636719 22.625c-3.164062 3.023437-8.144531 3.023437-11.304687 0-3.125-3.125-3.125-8.1875 0-11.3125l16.96875-16.976563 36.511718-36.527343c7.925782.117187 15.710938-2.136719 22.351563-6.472657l28.847656 28.847657c9.5 9.066406 24.445313 9.066406 33.941407 0 9.371093-9.371094 9.371093-24.5625 0-33.9375l-28.078126-28.078126 70.527344 70.519532-2.398437 2.398437c-6.96875-1.929687-14.4375-.574219-20.289063 3.675781-5.847656 4.253907-9.4375 10.941407-9.75 18.164063-12.359375.523437-22.226562 10.480469-22.632812 22.84375-12.277344.304687-22.1875 10.125-22.609375 22.398437-7.214844.308594-13.894531 3.886719-18.148438 9.71875-4.257812 5.832032-5.625 13.285157-3.714843 20.25l-2.402344 2.398438c-1.507813 1.464844-3.542969 2.269531-5.644532 2.234375zm48.140626 6.214844c-3.160157 3.023437-8.144532 3.023437-11.308594 0l-11.320313-11.335938c-2.800781-3.167969-2.652343-7.964843.335938-10.953125 2.984375-2.988281 7.78125-3.140625 10.949219-.34375l11.34375 11.296875c1.511718 1.492188 2.355468 3.527344 2.347656 5.648438.007812 2.132812-.835938 4.179687-2.347656 5.6875zm22.625-22.632813c-3.125 3.125-8.1875 3.125-11.3125 0l-11.3125-11.3125c-1.5-1.5-2.34375-3.535156-2.34375-5.660156 0-2.121094.84375-4.160156 2.34375-5.660156 1.492187-1.507813 3.527343-2.351563 5.648437-2.34375 2.121094 0 4.15625.84375 5.65625 2.34375l11.3125 11.3125c1.503906 1.5 2.347656 3.535156 2.351563 5.660156 0 2.121094-.839844 4.160156-2.34375 5.660156zm22.617187-22.632812c-3.160156 3.023437-8.144531 3.023437-11.304687 0l-11.3125-11.3125c-3.03125-3.136719-2.988282-8.128906.097656-11.214844 3.085937-3.085938 8.074218-3.128906 11.214844-.097656l11.3125 11.3125c1.5 1.5 2.34375 3.535156 2.34375 5.65625.007812 2.125-.839844 4.164062-2.351563 5.65625zm22.640625-22.625c-1.5 1.503906-3.539062 2.347656-5.660156 2.347656-2.125 0-4.160156-.84375-5.660156-2.347656l-11.3125-11.308594c-3.128907-3.128906-3.132813-8.199219-.007813-11.328125 3.125-3.132813 8.199219-3.136719 11.328125-.007813l11.289062 11.335938c3.121094 3.121094 3.121094 8.1875 0 11.308594zm0 0" />
            <path d="m472 48h-152v-40c0-4.417969-3.582031-8-8-8h-144c-4.417969 0-8 3.582031-8 8v40h-152c-4.417969 0-8 3.582031-8 8v80c-.00390625 2.863281 1.519531 5.511719 4 6.945312l12 6.839844v218.214844c0 13.253906 10.746094 24 24 24h88v-16h-88c-4.417969 0-8-3.582031-8-8v-209.070312l28 16c1.214844.699218 2.597656 1.070312 4 1.070312h48v-16h-45.871094l-50.128906-28.640625v-67.359375h448v67.359375l-50.128906 28.640625h-253.871094v16h256c1.402344.003906 2.78125-.359375 4-1.054688l28-16v209.054688c0 4.417969-3.582031 8-8 8h-56v16h56c13.253906 0 24-10.746094 24-24v-218.214844l12-6.839844c2.480469-1.433593 4.003906-4.082031 4-6.945312v-80c0-4.417969-3.582031-8-8-8zm-296-32h128v32h-128zm0 0" />
            <path d="m48 408h-16v48c0 4.417969 3.582031 8 8 8h80v-16h-72zm0 0" />
            <path d="m136 448h16v16h-16zm0 0" />
            <path d="m168 448h16v16h-16zm0 0" />
            <path d="m440 448h-72v16h80c4.417969 0 8-3.582031 8-8v-48h-16zm0 0" />
            <path d="m336 448h16v16h-16zm0 0" />
          </svg>
          <h1>Are you setting up from overseas?</h1>
          <p>
            Singapore law mandates that all incorporated companies must have at
            least one local resident director. You can use your own Local
            Director (Singaporean Citizen, PR or Entrepass holder) or sign up
            for our Nominee Local Director service.
          </p>
        </div>
      </div>
      <div className="manual-dis-fix">
        <div className="row on-boarding-card on-boarding-card-excp">
          <div
            className={
              "col-md-3 col-sm-12 col-xs-12 on-boarding-card-1 gap-box " +
              (activeCard === "local-director" ? "active-card" : "")
            }
            onClick={() => currentActiveCard("local-director")}
          >
            <div className="on-boarding-card-icon">
              <div className="on-boarding-card-icon-logo">
                <img src={profile} alt="logo.png" />
              </div>
            </div>
            <div className="on-boarding-card-title">
              <p>I have a local resident director</p>
              <br />
              <p>Eligibility Criteria</p>
            </div>
          </div>
          <div
            className={
              "col-md-3 col-sm-12 col-xs-12 on-boarding-card-1 gap-box " +
              (activeCard === "nominee-director-one" ? "active-card" : "")
            }
            onClick={() => currentActiveCard("nominee-director-one")}
          >
            <div className="on-boarding-card-icon">
              <div className="on-boarding-card-icon-logo">
                <img src={profile} alt="logo.png" />
              </div>
            </div>
            <div className="on-boarding-card-title">
              <p>Add Nominee Director</p>
            </div>
            <div className="on-boarding-card-body">
              <h1>S$ 1500</h1>
              <p className="gray-color">/ billed Yearly</p>
            </div>
            <div>
              <label className="checkbox-container-2">
                With Kimbocorp Accounting
                <input type="checkbox" checked="checked" />
                <span className="checkmark-2"></span>
              </label>
              <label className="checkbox-container-2">
                With S$2000 deposit
                <input type="checkbox" />
                <span className="checkmark-2"></span>
              </label>
            </div>
          </div>
          <div
            className={
              "col-md-3 col-sm-12 col-xs-12 on-boarding-card-1 gap-box " +
              (activeCard === "nominee-director-two" ? "active-card" : "")
            }
            onClick={() => currentActiveCard("nominee-director-two")}
          >
            <div className="on-boarding-card-icon">
              <div className="on-boarding-card-icon-logo">
                <img src={profile} alt="logo.png" />
              </div>
            </div>
            <div className="on-boarding-card-title">
              <p>Add Nominee Director</p>
            </div>
            <div className="on-boarding-card-body">
              <h1>S$ 800</h1>
              <p className="gray-color">/ billed Yearly</p>
            </div>
            <div>
              <label className="checkbox-container-2">
                With Kimbocorp Accounting
                <input type="checkbox" checked="checked" />
                <span className="checkmark-2"></span>
              </label>
              <label className="checkbox-container-2">
                With S$2000 deposit
                <input type="checkbox" />
                <span className="checkmark-2"></span>
              </label>
            </div>
          </div>
          <div
            className={
              "col-md-3 col-sm-12 col-xs-12 on-boarding-card-1 gap-box " +
              (activeCard === "nominee-director-three" ? "active-card" : "")
            }
            onClick={() => currentActiveCard("nominee-director-three")}
          >
            <div className="on-boarding-card-icon">
              <div className="on-boarding-card-icon-logo">
                <img src={profile} alt="logo.png" />
              </div>
            </div>
            <div className="on-boarding-card-title">
              <p>Add Nominee Director</p>
            </div>
            <div className="on-boarding-card-body">
              <h1>S$ 500</h1>
              <p className="gray-color">/ billed Yearly</p>
            </div>
            <div>
              <label className="checkbox-container-2">
                With Kimbocorp Accounting
                <input type="checkbox" checked="checked" />
                <span className="checkmark-2"></span>
              </label>
              <label className="checkbox-container-2">
                With S$2000 deposit
                <input type="checkbox" />
                <span className="checkmark-2"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="container new_workflow workflow-form-checkbox terms-cond">
        <div className="checkbox-label">
          <label className="checkbox-container">
            <input type="checkbox" checked="checked" />
            <span className="checkmark"></span>
          </label>
          <p>
            I agree with nominee director service specific terms & conditions
          </p>
          <br />
          <p className="warning-alert-msg">
            You must accept the terms and conditions!
          </p>
        </div>

        <div className="onboarding-user-add">
          <div className="row">
            {activeCard === "local-director" && (
              <>
                <div className="col-md-6">
                  <Directors />
                </div>
                <div className="col-md-6">
                  <Shareholders />
                </div>
              </>
            )}

            <div className="col-md-12">
              <span className="float-right">
                <button className="primary-button right" onClick={onClickSave}>
                  Save & Next
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
