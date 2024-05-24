import StartTrialButton from "../components/start-trial-button";
import "./template5-login.css";

const Template5Login = () => {
  return (
    <div className="template-5login">
      <img className="rectangle-icon1" alt="" src="/rectangle.svg" />
      <div className="logo1">
        <img className="logo-icon1" loading="lazy" alt="" src="/logo.svg" />
        <h3 className="fba-quant1">FBA Quant</h3>
      </div>
      <section className="checkbox-frame-wrapper">
        <div className="checkbox-frame">
          <StartTrialButton />
        </div>
      </section>
    </div>
  );
};

export default Template5Login;
