import React, { useState } from "react";

function useForm() {
  const [value, setValue] = useState({});
  const [error, setError] = useState({
    emailErr: "email address requierd",
    passErr: "enter your password",
  });
  
  //email input handler
  const emailOnChangeHandler = (event) => {
    const input = event.target.value;
    if (input.length < 0 || !input.includes("@")) {
      const err = {
        emailErr: "please enter a correct email address",
      };
      setError({
        ...error,
        ...err,
      });
    } else {
      setError({
        ...error,
        emailErr: "",
      });
      setValue({
        ...value,
        email: input,
      });
    }
  };
  //  password input handler
  const passwordOnChangeHandler = (event) => {
    const input = event.target.value;
    if (input.length < 4) {
      const err = {
        passErr: "your pass have to more than 4 charecter",
      };
      setError({
        ...error,
        ...err,
      });
    } else {
      setError({
        ...error,
        passErr: "",
      });
      setValue({
        ...value,
        passWord: input,
      });
    }
  };
  const resetValue = () => {
    setValue("");
  };
  return {
    emailOnChangeHandler,
    passwordOnChangeHandler,
    resetValue,
    value,
    error,
  };
}

export default useForm;
