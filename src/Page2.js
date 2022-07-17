import logo from "./assets/logo.svg";
import eye from "./assets/eye.svg";
import React, { useState } from "react";
import {useAgeValidtor} from "./hooks/hooks.js";

function Page2() {
  let minAge = 18;
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [age, connectAge] = useAgeValidtor("", minAge);

  return (
    <div className="form-frame">
      <form className="form">
        <div className="form">
          <label className="label">
            First Name
            <div>
              <input
                onChange={(e) => setFName(e.target.value)}
                className="input"
                placeholder="e.g Jessica"
              ></input>
            </div>
          </label>
          <br></br>
          <label className="label">
            Last Name
            <div>
              <input
                onChange={(e) => setLName(e.target.value)}
                className="input"
                placeholder="e.g Walton"
              ></input>
            </div>
          </label>
          <br></br>
          <label className="label">
            Date of Birth
            <div>
              <input
                {...connectAge}
                className="input"
                placeholder="DD/MM/YYYY"
              ></input>
            </div>
          </label>
          <div className="validation-text">
            <p>{connectAge.msg}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page2;
