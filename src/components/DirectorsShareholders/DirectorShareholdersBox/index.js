import React from "react";
import profile from "../../../assets/images/profile.png";
export default function DirectorShareholdersBox() {
  return (
    <div>
      <div className="onboarding-user-add-card-users">
        <div className="user_icon">
          <img src={profile} alt="profile.png" />
        </div>
        <p>Kimbo Nominee Director</p>
        <span className="close-icon">
          <i className="fas fa-times"></i>
        </span>
      </div>
    </div>
  );
}
