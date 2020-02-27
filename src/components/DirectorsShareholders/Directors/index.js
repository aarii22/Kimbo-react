import React from "react";
import DirectorShareholdersBox from "../DirectorShareholdersBox";

export default function Directors() {
  const onClickAddDirectors = () => {
    alert("here");
  };
  return (
    <div>
      <h1>Directors</h1>
      <div className="onboarding-user-add-card">
        <div
          className="onboarding-user-add-card-head"
          onClick={onClickAddDirectors}
        >
          <div>
            <p>
              <b>Add Directors</b>
            </p>
          </div>
        </div>
        <DirectorShareholdersBox />
      </div>
    </div>
  );
}
