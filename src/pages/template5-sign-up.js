import FrameComponent6 from "../components/frame-component";
import "./template5-sign-up.css";

const Template5SignUp = () => {
  return (
    <div className="template-5sign-up">
      <img className="rectangle-icon" alt="" src="/rectangle1.svg" />
      <div className="logo">
        <img className="logo-icon" loading="lazy" alt="" src="/logo1.svg" />
        <h3 className="fba-quant">FBA Quant</h3>
      </div>
      <section className="template-5sign-up-inner">
        <div className="frame-wrapper">
          <FrameComponent6 />
        </div>
      </section>
    </div>
  );
};

export default Template5SignUp;
