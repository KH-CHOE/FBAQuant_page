import AppsPages1 from "./apps-pages1";
import AppsPages from "./apps-pages";
import "./menu1.css";

const Menu1 = () => {
  return (
    <div className="menu5">
      <div className="logo3">
        <img className="logo-icon3" loading="lazy" alt="" src="/logo1.svg" />
        <h3 className="fba-quant3">FBA Quant</h3>
      </div>
      <div className="section6">
        <div className="main-menu2">MAIN MENU</div>
      </div>
      <AppsPages1
        smartHome="/smarthome1.svg"
        vector="/vector1.svg"
        vector1="/vector1.svg"
        vector2="/vector1.svg"
        frameDivBackgroundColor="#fff"
        vectorIconColor="#8b909a"
        listBackgroundColor="#f3f4f8"
        chevronRightIconColor="#23272e"
      />
      <div className="section7">
        <div className="todo1">TODO</div>
      </div>
      <AppsPages />
      <div className="section7">
        <div className="settings1">SETTINGS</div>
      </div>
      <div className="components2">
        <div className="list27">
          <img
            className="user-circle-icon2"
            loading="lazy"
            alt=""
            src="/usercircle.svg"
          />
          <div className="manage-account1">Manage Account</div>
          <div className="badge15">
            <div className="div25">4</div>
          </div>
          <img
            className="chevron-right-icon11"
            alt=""
            src="/chevronright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu1;
