import logo from "./assets/logo.svg";
import eye from "./assets/eye.svg";
import "./css/App.css";
import "./css/Buttons.css";
import "./css/Text.css";
import React, { useEffect, useState } from "react";
import usePasswordValidtor from "./hooks/hooks.js";
import RegistarionPage from "./components/RegistarionPage";
import UserDataPage from "./components/UserDataPage";
import ConfirmPage from "./components/ConfirmPage";

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
          <p className="Logo-txt">Developed with ♥ by Monterail</p>
        </header>
      </div>

      <div className="body-frame">
        <div className="popup">
          <div hidden={page != 1}>
            <RegistarionPage
              reciveMail={reciveMail}
              pageswap={pageswap}
              mail={mail}
            ></RegistarionPage>
          </div>
          <div hidden={page != 2}>
            <UserDataPage
              reciveName={reciveName}
              pageswap={pageswap}
              name={name}
            ></UserDataPage>
          </div>
          <div hidden={page != 3}>
            <ConfirmPage
              mail={mail}
              name={name}
              pageswap={pageswap}
            ></ConfirmPage>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
