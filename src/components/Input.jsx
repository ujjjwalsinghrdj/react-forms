import React from "react";

const Input = ({ label, id, error, ...props }) => {
  return (
    <div className="control no-margin">
      {/*class and for are reserved names in js so we instead use className
          and htmlFor */}
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Input;
