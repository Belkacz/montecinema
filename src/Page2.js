import logo from "./assets/logo.svg";
import eye from "./assets/eye.svg";
import React, { useEffect, useState } from "react";
import { useAgeValidtor } from "./hooks/hooks.js";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

function Page2({ reciveName, pageswap, name }) {
  let minAge = 18;
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [ageold, connectAge] = useAgeValidtor("", minAge);
  const [age, setAge] = useState();
  const [msg, setMsg] = useState(null);

  const checkfunction = (data) => {
    if (typeof reciveName === "function") {
      reciveName(data);
    }
  };
  const checkfunctionpage = (data) => {
    if (typeof pageswap === "function") {
      pageswap(data);
    }
  };

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

    if (calcAge < 18) {
      setMsg("You should be minium 18 years old");
    } else {
      setMsg(null);
    }
  };
  useEffect(() => {
    calculateAge();
  }, [age]);
  console.log(age);
  return (
    <div>
      <div className="header-frame">
        <p className="font-header">Great! Now your name</p>
      </div>
      <div className="form-frame">
        <form className="form">
          <div className="form">
            <label className="label">
              First Name
              <div>
                <input
                  onChange={(e) => checkfunction(e.target.value)}
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
      <div className="buttons-frame">
        <button
          disabled={
            age < 18 || msg != null || name == "" || lastname == ""
              ? true
              : false
          }
          onClick={checkfunctionpage}
          className="button-next"
        >
          Register
        </button>

        <a href="#" className="button-login">
          Login instead
        </a>
      </div>
    </div>
  );
}

export default Page2;
