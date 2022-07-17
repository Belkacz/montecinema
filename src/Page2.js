import logo from "./assets/logo.svg";
import eye from "./assets/eye.svg";
import React, { useEffect, useState } from "react";
import { useAgeValidtor } from "./hooks/hooks.js";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

function Page2() {
  let minAge = 18;
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [ageold, connectAge] = useAgeValidtor("", minAge);
  const [age, setAge] = useState();
  const [msg, setMsg] = useState(null);

  const calculateAge = () => {
    let today = new Date();
    let birthDate = new Date(age);
    let calcAge = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0) {
      calcAge--;
    }
    if (m === 0 && today.getDay() < birthDate.getDay()) {
      calcAge--;
    }
    console.log(calcAge);
    if (calcAge < 18) {
      setMsg("You should be minium 18 years old");
    } else {
      setMsg(null);
    }
  };
  useEffect(() => {
    calculateAge();
  }, [age]);
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
                value={age}
                type="date"
                onChange={(e) => setAge(e.target.value)}
                className="input"
                placeholder="DD/MM/YYYY"
              ></input>
            </div>
          </label>
          <div className="validation-text">
            <p>{msg}</p>
          </div>
          <div className="chackboxframe">
            <input
              value={age}
              type="checkbox"
              onChange=""
              className="checkbox"
            ></input>
            <label className="label">I accept Privacy Policy</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page2;
