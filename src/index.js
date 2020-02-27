import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
import HomeContainer from "./containers/HomeContainer";
import "./assets/css/style.css";
import Header from "./components/Header";
import Reducer from "./Reducers";
import LoginContainer from "./containers/LoginContainer";
import SignUpContainer from "./containers/SignUpContainer";
import CreateCompanyContainer from "./containers/CreateCompanyContainer";
import CompanyAddress from "./components/CompanyAddress";
import DirectorsShareholders from "./components/DirectorsShareholders";
import Accounting from "./components/Accounting";
import Payment from "./components/Payment";
import ExistCompany from "./components/ExistCompany";
const store = createStore(Reducer);
const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/home" component={HomeContainer} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(
  <Provider store={store}>{routing}</Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

// <Route path="/accounting" component={Accounting} />
//         <Route path="/payment" component={Payment} />
//         <Route path="/company-address" component={CompanyAddress} />
//         <Route
//           path="/directors-shareholders"
//           component={DirectorsShareholders}
//         />
// <Route path="/existing-company" component={ExistCompany} />
// <Route path="/create-company" component={CreateCompanyContainer} />
