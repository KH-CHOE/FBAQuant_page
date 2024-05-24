import { useMemo } from "react";
import "./total-sales-cost.css";

const TotalSalesCost = ({
  materialSymbolsarrowDownw,
  label,
  vector2,
  vector1,
  cash,
  sessions,
  totalSalesCostTop,
  totalSalesCostLeft,
  propWidth,
  propColor,
  vectorIconLeft,
  vectorIconWidth,
  vectorIconLeft1,
  propWidth2,
  propMinWidth2,
  propMinWidth1,
  sessionsDisplay,
}) => {
  const totalSalesCostStyle = useMemo(() => {
    return {
      top: totalSalesCostTop,
      left: totalSalesCostLeft,
      width: propWidth,
    };
  }, [totalSalesCostTop, totalSalesCostLeft, propWidth]);

  const labelStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const vectorIconStyle = useMemo(() => {
    return {
      left: vectorIconLeft,
      width: vectorIconWidth,
    };
  }, [vectorIconLeft, vectorIconWidth]);

  const vectorIcon1Style = useMemo(() => {
    return {
      left: vectorIconLeft1,
      width: propWidth2,
    };
  }, [vectorIconLeft1, propWidth2]);

  const cashStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const sessionsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      display: sessionsDisplay,
    };
  }, [propMinWidth1, sessionsDisplay]);

  return (
    <div className="total-sales-cost3" style={totalSalesCostStyle}>
      <div className="total-sales-cost-child2" />
      <div className="frame-container">
        <div className="material-symbolsarrow-downwar-container">
          <img
            className="material-symbolsarrow-downwar-icon2"
            alt=""
            src={materialSymbolsarrowDownw}
          />
          <div className="label15" style={labelStyle}>
            {label}
          </div>
        </div>
        <div className="label16">vs last 7 days</div>
      </div>
      <img
        className="vector-icon"
        alt=""
        src={vector2}
        style={vectorIconStyle}
      />
      <img
        className="total-sales-cost-child3"
        loading="lazy"
        alt=""
        src={vector1}
        style={vectorIcon1Style}
      />
      <b className="cash2" style={cashStyle}>
        {cash}
      </b>
      <div className="sessions" style={sessionsStyle}>
        {sessions}
      </div>
      <div className="label17">Last 7 days</div>
    </div>
  );
};

export default TotalSalesCost;
