import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./start-trial-button.css";

const StartTrialButton = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const navigate = useNavigate();

  const onTermsText1Click = useCallback(() => {
    navigate("/template-5sign-up");
  }, [navigate]);

  return (
    <form className="start-trial-button">
      <b className="start-your-14-day1">Log in to FBA Quant</b>
      <div className="already-a-member1">{`Quick & Simple way to Automate your investment`}</div>
      <div className="input-name-copy-email-address">
        <div className="inputname-copy-21">
          <div className="email-adrress1">EMAIL ADRRESS</div>
          <input
            className="terms-text"
            placeholder="johndoe@example.com"
            type="text"
          />
        </div>
        <div className="inputname-copy-31">
          <div className="email-adrress1">PASSWORD</div>
          <input
            className="inputname-copy-3-child"
            placeholder="**********"
            type="text"
          />
        </div>
      </div>
      <div className="new-shape-vector">
        <input
          className="checkbox1"
          checked={checkboxChecked}
          type="checkbox"
          onChange={(event) => setCheckboxChecked(event.target.checked)}
        />
        <div className="terms2">Remember Me</div>
      </div>
      <button className="btn-prytemplate-21">
        <div className="create-an-account1">PROCEED</div>
      </button>
      <div className="or-use-container">
        <div className="or-use1">OR</div>
      </div>
      <div className="or-use-container">
        <div className="terms3" onClick={onTermsText1Click}>
          No account yet? Register now
        </div>
      </div>
    </form>
  );
};

export default StartTrialButton;
