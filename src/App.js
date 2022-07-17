import logo from "./assets/logo.svg";
import eye from "./assets/eye.svg";
import "./App.css";

function App() {
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
        <div className="form-frame">
          <form className="form">
            <div className="form">
              <label className="label">
                email
                <div>
                  <input
                    className="input"
                    placeholder="Enter your password"
                  ></input>
                </div>
              </label>
              <br></br>
              <label className="label">
                password
                <div>
                  <img src={eye} className="eye-logo" alt="eye" />
                  <input
                    className="input"
                    placeholder="Enter your password"
                  ></input>
                </div>
              </label>
              <div className="validation-text"></div>
            </div>
          </form>
        </div>
        <div className="buttons-frame">
        <div className="next-frame">
          <p className="next-text">Next Step</p>
        </div>
        <div className="login-frame">
          <p className="login-text">Login instead</p>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
