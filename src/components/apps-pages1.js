import { useMemo } from "react";
import "./apps-pages1.css";

const AppsPages1 = ({
  smartHome,
  vector,
  vector1,
  vector2,
  frameDivBackgroundColor,
  vectorIconColor,
  listBackgroundColor,
  chevronRightIconColor,
}) => {
  const listStyle = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  const dashboardStyle = useMemo(() => {
    return {
      color: vectorIconColor,
    };
  }, [vectorIconColor]);

  const list1Style = useMemo(() => {
    return {
      backgroundColor: listBackgroundColor,
    };
  }, [listBackgroundColor]);

  const watchlistStyle = useMemo(() => {
    return {
      color: chevronRightIconColor,
    };
  }, [chevronRightIconColor]);

  return (
    <div className="apps-pages2">
      <div className="list28" style={listStyle}>
        <img
          className="smart-home-icon1"
          loading="lazy"
          alt=""
          src={smartHome}
        />
        <div className="withdrawl" style={dashboardStyle}>
          Dashboard
        </div>
        <div className="badge18">
          <div className="div38">3</div>
        </div>
        <img className="chevron-down-icon17" alt="" src="/chevrondown11.svg" />
      </div>
      <div className="list29" style={list1Style}>
        <div className="vector-parent">
          <img className="vector-icon1" loading="lazy" alt="" src={vector} />
          <img className="vector-icon1" loading="lazy" alt="" src={vector1} />
          <img className="vector-icon1" loading="lazy" alt="" src={vector2} />
        </div>
        <div className="withdrawl" style={watchlistStyle}>
          Watchlist
        </div>
        <img className="chevron-down-icon17" alt="" src="/chevronright.svg" />
      </div>
      <div className="list29">
        <div className="transaction-icon">
          <img className="vector-icon4" alt="" src="/vector-3.svg" />
          <img
            className="vector-icon5"
            loading="lazy"
            alt=""
            src="/vector-4.svg"
          />
        </div>
        <div className="withdrawl">Transaction</div>
        <img className="chevron-down-icon17" alt="" src="/chevronright.svg" />
      </div>
      <div className="list29">
        <div className="layer-25">
          <img className="vector-icon6" alt="" src="/vector-51.svg" />
          <img
            className="vector-icon7"
            loading="lazy"
            alt=""
            src="/vector-61.svg"
          />
        </div>
        <div className="withdrawl">Withdrawl</div>
        <img className="chevron-down-icon17" alt="" src="/chevronright.svg" />
      </div>
    </div>
  );
};

export default AppsPages1;
