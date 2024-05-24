import { useMemo } from "react";
import "./table-row2.css";

const TableRow2 = ({
  trash,
  materialSymbolsarrowDropD,
  propWidth,
  propPosition,
  propTop,
  propLeft,
  propRowGap,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
}) => {
  const tableRowStyle = useMemo(() => {
    return {
      width: propWidth,
      position: propPosition,
      top: propTop,
      left: propLeft,
      rowGap: propRowGap,
    };
  }, [propWidth, propPosition, propTop, propLeft, propRowGap]);

  const tableCellStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const tableCell1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const tableCell2Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const tableCell3Style = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className="table-row1" style={tableRowStyle}>
      <div className="table-cell7">
        <div className="text87">
          <div className="aaplapple-inc">
            <span className="aapl">AAPL(</span>
            <span>Apple Inc.)</span>
          </div>
        </div>
      </div>
      <div className="table-cell8" style={tableCellStyle}>
        <div className="div26">150.00</div>
      </div>
      <div className="table-cell9">
        <div className="div27">+154</div>
        <div className="badge16">
          <div className="div28">16%</div>
        </div>
      </div>
      <div className="table-cell10" style={tableCell1Style}>
        <div className="div29">80</div>
      </div>
      <div className="table-cell11" style={tableCell2Style}>
        <div className="div30">151.00</div>
      </div>
      <div className="table-cell11" style={tableCell3Style}>
        <div className="div26">149.00</div>
      </div>
      <div className="table-cell13">
        <img className="trash-icon1" alt="" src={trash} />
        <img
          className="material-symbolsarrow-drop-do-icon"
          loading="lazy"
          alt=""
          src={materialSymbolsarrowDropD}
        />
      </div>
    </div>
  );
};

export default TableRow2;
