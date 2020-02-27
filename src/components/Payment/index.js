import React from "react";

export default function Payment() {
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

            <div className="bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">Accounting</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step complete">
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
            height="512"
            viewBox="0 0 58 55"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Page-1" fill="none" fill-rule="evenodd">
              <g id="012---Card" fill-rule="nonzero">
                <path
                  id="Shape"
                  d="m50 42.02c.1779274-.3096294.3284984-.6341936.45-.97l4.79-13.16 2.4-6.57c.5439732-1.4958067.47132-3.146461-.2019703-4.5886901-.6732903-1.442229-1.8920403-2.5578395-3.3880297-3.1013099l-35.71-13c-1.4958067-.54397321-3.146461-.47131997-4.5886901.20197032-1.442229.67329029-2.5578395 1.89204025-3.1013099 3.38802968l-2.39 6.57-4.2 11.53z"
                  fill="#2980ba"
                />
                <path
                  id="Shape"
                  d="m49.59 25.83 5.65 2.06 2.4-6.57-46.99-17.1-2.39 6.57 30.8 11.21z"
                  fill="#35495e"
                />
                <rect
                  id="Rectangle-path"
                  fill="#2fa8cc"
                  height="33"
                  rx="6"
                  width="50"
                  y="22"
                />
                <path
                  id="Shape"
                  d="m15 29v2h-6v-4h4c1.1032019.0032948 1.9967052.8967981 2 2z"
                  fill="#f0c419"
                />
                <path
                  id="Shape"
                  d="m9 27v4h-4v-2c.0032948-1.1032019.89679813-1.9967052 2-2z"
                  fill="#f29c1f"
                />
                <path
                  id="Shape"
                  d="m9 31v4h-2c-1.10320187-.0032948-1.9967052-.8967981-2-2v-2z"
                  fill="#f0c419"
                />
                <path
                  id="Shape"
                  d="m15 31v2c-.0032948 1.1032019-.8967981 1.9967052-2 2h-4v-4z"
                  fill="#f29c1f"
                />
                <g fill="#ecf0f1">
                  <path
                    id="Shape"
                    d="m13 44h-6c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1h6c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1z"
                  />
                  <path
                    id="Shape"
                    d="m23 44h-6c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h6c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1z"
                  />
                  <path
                    id="Shape"
                    d="m33 44h-6c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h6c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1z"
                  />
                  <path
                    id="Shape"
                    d="m43 44h-6c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h6c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1z"
                  />
                  <path
                    id="Shape"
                    d="m9 50h-2c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1h2c.55228475 0 1 .4477153 1 1s-.44771525 1-1 1z"
                  />
                  <path
                    id="Shape"
                    d="m16 50h-2c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h2c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1z"
                  />
                </g>
                <circle id="Oval" cx="42" cy="31" fill="#c03a2b" r="3" />
                <circle id="Oval" cx="36" cy="31" fill="#ecf0f1" r="3" />
              </g>
            </g>
          </svg>
          <h1>Review and Pay</h1>
        </div>

        <div className="new-workflow-form-1">
          <div className="row on-boarding-card on-boarding-payment-card">
            <div className="col-md-6">
              <div className="payment-type">
                <label>Select a card</label>
                <select>
                  <option>Add New card</option>
                </select>
              </div>
              <div className="on-boarding-payment-card-1">
                <form>
                  <div className="label1">
                    <input className="text-box" type="email" />
                    <label className="label2">Email</label>
                  </div>
                  <div className="label1">
                    <input className="text-box" type="password" />
                    <label className="label2">Password</label>
                  </div>
                </form>
              </div>
              <div className="on-boarding-payment-card-2">
                <form>
                  <div className="label1">
                    <input className="text-box" type="email" />
                    <label className="label2">Expiration Date (MM/YY)</label>
                  </div>
                </form>
                <form>
                  <div className="label1">
                    <input className="text-box" type="email" />
                    <label className="label2">CVC</label>
                  </div>
                </form>
              </div>
              <div className="one-time-payment">
                <p>I want a one-time payment through bank-transfer/ cheque.</p>
              </div>
            </div>
            <div className="col-md-6 on-boarding-order-summary">
              <div className="on-boarding-order-summary-head">
                <h2>Summary</h2>
              </div>
              <div className="on-boarding-order-summary-body">
                <div className="row">
                  <div className="col-sm-6 summary-col-height">
                    <p>
                      <b>Item Name</b>
                    </p>
                  </div>
                  <div className="col-sm-6 summary-col-height">
                    <p className="right">
                      <b>Price</b>
                    </p>
                  </div>
                  <div className="col-sm-8 summary-col-height">
                    <p>Company Incorporaion in Singapore</p>
                  </div>
                  <div className="col-sm-4 summary-col-height">
                    <p className="right">S$ 500</p>
                  </div>
                  <div className="col-sm-8 summary-col-height">
                    <p>Incorporation Discount</p>
                  </div>
                  <div className="col-sm-4 summary-col-height">
                    <p className="right">S$ -500</p>
                  </div>
                  <div className="col-sm-8 summary-col-height">
                    <p>Corporate Secretary</p>
                  </div>
                  <div className="col-sm-4 summary-col-height">
                    <p className="right">S$ 500</p>
                  </div>
                  <div className="col-sm-8 summary-col-height">
                    <p>Registered Address & Virtual Mailroom</p>
                  </div>
                  <div className="col-sm-4 summary-col-height">
                    <p className="right">S$ 500</p>
                  </div>
                  <div className="col-sm-8 summary-col-height">
                    <p>
                      Slim Plan (with Xero Subscription) - End of Financial Year
                    </p>
                  </div>
                  <div className="col-sm-4 summary-col-height">
                    <p className="right">S$ 1200</p>
                  </div>
                </div>
              </div>
              <div className="on-boarding-order-summary-footer">
                <div className="row">
                  <div className="col-sm-6">
                    <p>Subtotal</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="right">S$ 2,300</p>
                  </div>
                  <div className="col-sm-9">
                    <input type="text" placeholder="Promo Code" />
                  </div>
                  <div className="col-sm-3">
                    <button className="secondary-button right">Apply</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <button className="primary-button right margin-bottom">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
