import logo from "./assets/logo.svg";
import eye from "./assets/eye.svg";
import "./css/App.css";
import "./css/Buttons.css";
import "./css/Text.css";
import React, { useEffect, useState } from "react";
import usePasswordValidtor from "./hooks/hooks.js";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {
  const [page, setPage] = useState(1);
  const [pagename, setPageName] = useState("Next Step");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");

  function reciveMail(obj) {
    setMail(obj);
  }
  function reciveName(obj) {
    setName(obj);
  }
  let page1 = page === 1 ? false : true;
  let page2 = page === 2 ? false : true;
  let page3 = page === 3 ? false : true;

  function pageswap(data) {
    setPage((prev) => prev + 1);
    if (data == 0) {
      setPage(1);
    }
  }

  useEffect(() => {}, [page]);

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>

      <div className="body-frame">
        <div hidden={page != 1}>
          <Page1 reciveMail={reciveMail} pageswap={pageswap} mail={mail}></Page1>
        </div>
        <div hidden={page != 2}>
          <Page2 reciveName={reciveName} pageswap={pageswap} name={name}></Page2>
        </div>
        <div hidden={page != 3}>
          <Page3 mail={mail} name={name} pageswap={pageswap}></Page3>
        </div>
        {/* <div className="buttons-frame">
          <button
            className="button-next"
            onClick={() => PageName(page, pagename)}
          >
            {pagename}
          </button>

          <a href="#" className="button-login">
            Login instead
          </a>

        </div> */}
      </div>
    </div>
  );
}

export default App;
