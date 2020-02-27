import React from "react";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";

function Header() {
  return (
    <header>
      <div className="header_logo">
        <img src={logo} alt="kimbocorp.png" />
      </div>
      <div className="header_tools">
        <div className="profile_icon">
          <img src={profile} alt="profile.png" />
        </div>
      </div>
    </header>
  );
}
export default Header;
