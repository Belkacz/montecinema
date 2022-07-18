import logo from "./assets/logo.svg";
import eye from "./assets/eye.svg";
import React, { useState, useEffect } from "react";
import { usePasswordValidtor } from "./hooks/hooks.js";

function Page1({ reciveMail, pageswap, mail }) {
  let regexletter = /[a-z]/gi;
  let regexnum = /[0-9]/gi;
  let minlenght = 8;

  const [password, connectPassword] = usePasswordValidtor(
    "",
    regexletter,
    regexnum,
    minlenght
  );
  const [passwordShown, setPasswordShown] = useState(false);

  const checkfunction = (data) => {
    if (typeof reciveMail === "function") {
      reciveMail(data);
    }
  };

  const checkfunctionpage = (data) => {
    if (typeof pageswap === "function") {
      pageswap(data);
    }
  };
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <div className="header-frame">
        <p className="font-header">
          Ahoy you! Care to register?
        </p>
      </div>
      <div className="form-frame">
        <form className="form">
          <div className="form">
            <div className="input-frame">
              <label className="label">
                email
                <div>
                  <input
                    onChange={(e) => checkfunction(e.target.value)}
                    className="input"
                    placeholder="Enter your email"
                  ></input>
                </div>
              </label>
            </div>
            <br></br>
            <div className="input-frame">
              <label className="label">
                password
                <div>
                  <input
                    type={passwordShown ? "text" : "password"}
                    {...connectPassword}
                    className="input"
                    placeholder="Enter your password"
                  ></input>
                  <img
                    src={eye}
                    className="eye-logo"
                    alt="eye"
                    onClick={(e) => togglePassword(e)}
                  />
                </div>
              </label>
            </div>
            <div className="validation-frame">
              <div className="validation-text">
                <p>{connectPassword.msgletter}</p>
                <p>{connectPassword.msgnum}</p>
                <p>{connectPassword.msglenght}</p>
              </div>
            </div>
          </div>
        </form>
        <div className="buttons-frame">
          <button
            disabled={
              connectPassword.msgletter ||
              connectPassword.msgnum ||
              connectPassword.msglenght ||
              password == "" ||
              mail == ""
                ? true
                : false
            }
            onClick={checkfunctionpage}
            className="button-next"
          >
            Next Step
          </button>

          <a href="#" className="button-login">
            Login instead
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page1;
