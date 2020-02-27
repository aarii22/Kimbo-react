import React, { useState, useEffect } from "react";
import CreateComapny from "../../components/CreateCompany";
import History from "../../Auth/History";
import { Link, Redirect } from "react-router-dom";
import CompanyAddress from "../../components/CompanyAddress";
import DirectorsShareholders from "../../components/DirectorsShareholders";
import Accounting from "../../components/Accounting";
import Payment from "../../components/Payment";

export default function CreateCompanyContainer(props) {
  const componentArr = [
    CreateComapny,
    CompanyAddress,
    DirectorsShareholders,
    Accounting,
    Payment
  ];
  const [CurrentComonent, setCurrentComponent] = useState(0);
  const showNextComponent = () => {
    let index = CurrentComonent;
    index = index + 1;
    setCurrentComponent(index);
  };
  let ActiveComponent = componentArr[CurrentComonent];
  return (
    <main>
      <ActiveComponent showNextComponent={showNextComponent} />
    </main>
  );
}
