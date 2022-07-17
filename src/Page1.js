import logo from "./assets/logo.svg";
import eye from "./assets/eye.svg";
import React, { useState } from "react";
import {usePasswordValidtor} from "./hooks/hooks.js";

function Page1({reciveMail}) {
  let regexletter = /[a-z]/gi
  let regexnum = /[0-9]/gi;
  let minlenght = 8;

  const [password, connectPassword] = usePasswordValidtor(
    "",
    regexletter,
    regexnum,
    minlenght
  );
  
  const checkfunction = (data) => {
    console.log(data)
    if (typeof reciveMail === "function") {
        reciveMail(data);
    }
  };

  return (
    <div className="form-frame">
          <form className="form">
            <div className="form">
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
              <br></br>
              <label className="label">
                password
                <div>
                  <img  src={eye} className="eye-logo" alt="eye" />
                  <input type ="password"
                    {...connectPassword}
                    className="input"
                    placeholder="Enter your password"
                  ></input>
                </div>
              </label>
              <div className="validation-text">
                <p>{connectPassword.msgletter}</p>
                <p>{connectPassword.msgnum}</p>
                <p>{connectPassword.msglenght}</p>
              </div>
            </div>
          </form>
        </div>
  );
}

export default Page1;
