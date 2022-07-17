import logo from "./assets/logo.svg";
import eye from "./assets/eye.svg";
import "./css/App.css";
import "./css/Buttons.css";
import React, { useEffect, useState } from "react";
import usePasswordValidtor from "./hooks/hooks.js";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  const [page, setPage] = useState(1);
  const [pagename, setPageName] = useState("Next Step");
  const [mail, setMail] = useState("");

  function reciveMail(obj) {
    setMail(obj);
  }

  function PageName(page, pagename) {
    setPage((prev) => prev + 1);
    if (page == 1) {
      setPageName("Register");
    } else if (page == 2) {
      setPageName("Go to Homepage");
    }
  }

  let page1 = page == 1 ? "true" : "none";
  let page2 = page == 2 ? "true" : "none";
  let page3 = page == 3 ? "true" : "none";
  useEffect(() => {
    console.log(page2)
  }, [page]);

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>

      <div className="body-frame">
        <div className="header-frame">
          <p className="font--header">
            Ahoy you! Care to register?
            {/* <p className="font--header" style={{ color: "grey" }}>
              Care to register?
            </p> */}
          </p>
        </div>
        <div style={{ display: page1 }}>
          <Page1 reciveMail={reciveMail}></Page1>
        </div>
        <div style={{ display: page2 }}>
          <Page2></Page2>
        </div>

        <div className="buttons-frame">
          <button
            className="button-next"
            onClick={() => PageName(page, pagename)}
          >
            {pagename}
          </button>
          {/* <div className="next-frame">
            <p className="next-text">Next Step</p>
          </div> */}
          <a href="#" className="button-login">
            Login instead
          </a>
          {/* <div className="login-frame">
          
            <p className="login-text">Login instead</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
