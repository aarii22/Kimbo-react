import React from "react";

function Input({ label, id, placeholder, type, onChange }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        className="material-input"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
