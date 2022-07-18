import React, { useState } from "react";

function ConfirmPage({ mail, name, pageswap }) {
  const checkfunctionpage = (data) => {
    if (typeof pageswap === "function") {
      pageswap(0);
    }
  };
  return (
    <div className="header-frame">
      <div>
        <p className="font-header">Good job {name}!</p>
      </div>
      <div className="form-frame">
        <div className="input-frame">
          <div className="text18px">
            We have sent you an email to {mail}. Make sure to click the link
            from the message to activate your account.
            <div className="buttons-frame">
              <button onClick={checkfunctionpage} className="button-next">
                "Go to Homepage"
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ConfirmPage;
