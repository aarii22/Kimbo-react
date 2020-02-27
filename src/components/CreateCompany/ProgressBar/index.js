import React from "react";

export default function ProgressBar() {
  return (
    <div>
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

          <div className="bs-wizard-step disabled">
            <div className="text-center bs-wizard-stepnum">Address</div>
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
            <div className="bs-wizard-dot">
              <i className="fas fa-check"></i>
            </div>
          </div>

          <div className="bs-wizard-step disabled">
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
    </div>
  );
}
