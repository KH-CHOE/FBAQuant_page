import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component.css";

const FrameComponent6 = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const navigate = useNavigate();

  const onTermsText1Click = useCallback(() => {
    navigate("/template-5login");
  }, [navigate]);

  return (
    <form className="start-your-14-day-free-trial-parent">
      <b className="start-your-14-day">Sign up to FBA Quant</b>
      <div className="already-a-member">{`Quick & Simple way to Automate your investment`}</div>
      <div className="input-name-areas">
        <div className="inputname">
          <div className="email-address-input">
            <div className="first-name">FIRST NAME</div>
            <div className="john-wrapper">
              <div className="john">John</div>
            </div>
          </div>
        </div>
        <div className="inputname-copy-2">
          <div className="frame">
            <div className="email-adrress">EMAIL ADRRESS</div>
            <div className="johndoeexamplecom-wrapper">
              <div className="johndoeexamplecom">johndoe@example.com</div>
            </div>
          </div>
        </div>
        <div className="inputname-copy-3">
          <div className="frame1">
            <div className="password">PASSWORD</div>
            <div className="johndoeexamplecom-wrapper">
              <div className="div54">**********</div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkbox-container">
        <input
          className="checkbox"
          checked={checkboxChecked}
          type="checkbox"
          onChange={(event) => setCheckboxChecked(event.target.checked)}
        />
        <div className="terms">
          I agree to the Terms of Service and Privacy Policy.
        </div>
      </div>
      <button className="btn-prytemplate-2">
        <div className="create-an-account">CREATE AN ACCOUNT</div>
      </button>
      <div className="or-use-wrapper">
        <div className="or-use">OR</div>
      </div>
      <div className="or-use-wrapper">
        <div className="terms1" onClick={onTermsText1Click}>
          Already a Member? Log in Now
        </div>
      </div>
    </form>
  );
};

export default FrameComponent6;
