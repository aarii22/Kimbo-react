import React from "react";

export default function OwnAddress() {
  return (
    <div>
      <div className="col-md-12 address-form">
        <h3>Company Address</h3>
        <div className="row">
          <div className="col-md-6 address-form-col">
            <label>Address Line 1</label>
            <input type="text" value="160 Robinson Road" />
            <label>Street address, P.O. box</label>
          </div>
          <div className="col-md-6 address-form-col">
            <label>Address Line 2</label>
            <input
              type="text"
              value="#14-04 Singapore Business Federation Centre"
            />
            <label>Unit, building, floor etc.</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 address-form-col">
            <label>City</label>
            <input type="text" value="Singapore" />
          </div>
          <div className="col-md-6 address-form-col">
            <label></label>
            <input type="text" value="State/ Province" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 address-form-col">
            <label>Zip/ Postcode</label>
            <input type="text" value="068914" />
          </div>
          <div className="col-md-8 address-form-col">
            <label>Select a Country</label>
            <select>
              <option>India</option>
              <option>Singapore</option>
              <option>China</option>
              <option>Japan</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
