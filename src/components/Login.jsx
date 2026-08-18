import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    console.log(enteredEmail, enteredPassword);
    //form reset on refs(not recommended)
    // email.current.value = "";
    // password.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* page refreshing on submission because of default behaviour of the for which also refreshes the page */}
      <h2>Refs Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          {/*class and for are reserved names in js so we instead use className
          and htmlFor */}
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please Enter a Valid Email Address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
