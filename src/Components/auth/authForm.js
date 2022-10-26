import React, { useState } from "react";
import "./authForm.css";
import useForm from "../../hooks/useForm";
function AuthForm() {
  const [emailblurFlag, setEmailBlutFlag] = useState(false);
  const [passlblurFlag, setPassBlutFlag] = useState(false);
  const {
    emailOnChangeHandler,
    passwordOnChangeHandler,
    resetValue,
    value,
    error,
  } = useForm();

  const { emailErr, passErr } = error;
  const disableBtn = !emailErr && !passErr;

  const [isLogin, setIslogin] = useState(true);

  //log in mod function
  const isLoginModHandler = () => {
    setIslogin((preState) => (preState = !preState));
  };

  //submit handler
  const onSubmitionHandler = (event) => {
    //stopt default events
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmitionHandler}>
        <div className="input--title">
          <h2>zara collection</h2>
          <p>{isLogin ? "Login" : "Sign in"}</p>
        </div>
        <div className="inputs">
          <div className="inner-input">
            <label>username</label>
            <input
              type="text"
              className="userN"
              onBlur={() => setEmailBlutFlag(true)}
              onChange={emailOnChangeHandler}
            />

            {emailblurFlag && <p className="error">{emailErr}</p>}
          </div>
          <div className="inner-input">
            <label>password</label>
            <input
              type="text"
              className="pass"
              onBlur={() => setPassBlutFlag(true)}
              onChange={passwordOnChangeHandler}
            />
            {passlblurFlag && <p className="error">{passErr}</p>}
          </div>
        </div>
        <button disabled={!disableBtn} className="btn btn-outline-dark">
          {isLogin ? "Login" : "Sign in"}
        </button>
        <p className="createAccount" onClick={isLoginModHandler}>
          create an new Acounet?
        </p>
      </form>
    </>
  );
}

export default AuthForm;
