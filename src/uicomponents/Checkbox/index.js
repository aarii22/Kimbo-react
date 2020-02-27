import React from "react";

export default function Checkbox({ label, isChecked }) {
  return (
    <div className="checkbox">
      {label}
      <input type="checkbox" checked={isChecked ? "checked" : ""} />
      <span className="checkmark"></span>
    </div>
  );
}
