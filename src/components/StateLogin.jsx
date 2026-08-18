import { useState } from "react";

export default function StateLogin() {
  // const [enterEmail, setEnteredEmail] = useState("");
  // const [enterPassword, setEnteredPassword] = useState("");

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }
  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
    //reseting the form
    setEnteredValues({
      email: "",
      password: "",
    });
  }

  function handleInputChange(i, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [i]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [i]: false,
    }));
  }

  function handleInputBlur(identefier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identefier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* page refreshing on submission because of default behaviour of the for which also refreshes the page */}
      <h2>State Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          {/*class and for are reserved names in js so we instead use className
          and htmlFor */}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please Enter a Valid Email Address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
