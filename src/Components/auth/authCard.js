import React from "react";
import "./authCard.css";
import AuthForm from "./authForm";
import onlinestore from "../../img/onlinestore.jpg";
function AuthCard() {
  return (
    <div className="authCardSection">
      <div className="authCard">
        <div className="left">
          <AuthForm />
        </div>
        <div className="right">
          <img src={onlinestore} className="auth--img" />
        </div>
      </div>
    </div>
  );
}

export default AuthCard;
