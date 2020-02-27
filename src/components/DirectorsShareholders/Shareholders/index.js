import React from "react";
import DirectorShareholdersBox from "../DirectorShareholdersBox";
export default function Shareholders() {
  const onClickShareholders = () => {
    alert("here");
  };
  return (
    <div>
      <h1>Shareholders</h1>
      <div className="onboarding-user-add-card">
        <div
          className="onboarding-user-add-card-head"
          onClick={onClickShareholders}
        >
          <div>
            <p>
              <b>Add Shareholders</b>
            </p>
          </div>
        </div>
        <DirectorShareholdersBox />
      </div>
    </div>
  );
}
