import React, { useState } from "react";

function Page3({ mail, name, pageswap }) {
  const checkfunctionpage = (data) => {
    if (typeof pageswap === "function") {
      pageswap(0);
    }
  };
  return (
    <div className="form-frame">
      <div>
        <p className="font-header">Good job {name}!</p>
      </div>
      <div className="text18px">
        We have sent you an email to {mail}. Make sure to click the link from
        the message to activate your account.
      </div>
      <div className="buttons-frame">
        <button onClick={checkfunctionpage} className="button-next">
        "Go to Homepage"
        </button>

        <a href="#" className="button-login">
          Login instead
        </a>
      </div>
    </div>
  );
}
export default Page3;
