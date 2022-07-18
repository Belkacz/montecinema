import React, { useEffect, useState } from "react";

function UserDataPage({ reciveName, pageswap, name }) {
  let minAge = 18;
  const [lastname, setLName] = useState("");
  const [age, setAge] = useState();
  const [msg, setMsg] = useState(null);
  const [checkbox, setCheckbox] = useState(false);

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

    if (calcAge < minAge) {
      setMsg("You should be minium 18 years old");
    } else {
      setMsg(null);
    }
  };
  const toggleCheckbox = (e) => {

    setCheckbox(!checkbox);
  };

  useEffect(() => {
    calculateAge()
  }, [age]);

  return (
    <div>
      <div className="header-frame">
        <p id="break-line-title-dark" className="font-header">
          Great!
        </p>
        <p id="break-line-title-light" className="font-header">Now your name</p>
      </div>
      <div className="form-frame">
        <form className="form">
          <div className="form">
            <div className="input-frame">
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
            </div>
            <br></br>
            <div className="input-frame">
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
            </div>
            <br></br>
            <div className="input-frame">
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
            </div>
            <div className="validation-frame">
              <div className="validation-text">
                <p>{msg}</p>
              </div>
            </div>
            <div className="input-frame">
              <div className="chackboxframe">
                <input
                  value={age}
                  type="checkbox"
                  onChange={(e) => {
                    toggleCheckbox(e);
                  }}
                  className="checkbox"
                ></input>
                <label className="chaeckboxText">
                  I accept <u>Privacy Policy</u>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="buttons-frame">
        <button
          disabled={
            age < 18 ||
            msg != null ||
            name === "" ||
            lastname === "" ||
            checkbox === false
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

export default UserDataPage;
