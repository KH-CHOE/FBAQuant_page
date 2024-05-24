import { useMemo } from "react";
import "./table-row1.css";

const TableRow1 = ({
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
  const tableRow1Style = useMemo(() => {
    return {
      width: propWidth,
      position: propPosition,
      top: propTop,
      left: propLeft,
      rowGap: propRowGap,
    };
  }, [propWidth, propPosition, propTop, propLeft, propRowGap]);

  const tableCell4Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const tableCell5Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const tableCell6Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const tableCell7Style = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className="table-row2" style={tableRow1Style}>
      <div className="table-cell14">
        <div className="text88">
          <div className="amznamazoncom-inc">
            <span className="amzn">AMZN(</span>
            <span>Amazon.com, Inc.)</span>
          </div>
        </div>
      </div>
      <div className="table-cell15" style={tableCell4Style}>
        <div className="div32">3100.00</div>
      </div>
      <div className="table-cell16">
        <div className="div33">-19.54</div>
        <button className="badge17">
          <div className="div34">1.45%</div>
        </button>
      </div>
      <div className="table-cell17" style={tableCell5Style}>
        <div className="div35">3.2</div>
      </div>
      <div className="table-cell18" style={tableCell6Style}>
        <div className="div36">3,125.00</div>
      </div>
      <div className="table-cell18" style={tableCell7Style}>
        <div className="div37">3,075.00</div>
      </div>
      <div className="table-cell20">
        <img className="trash-icon2" alt="" src={trash} />
        <img
          className="material-symbolsarrow-drop-do-icon1"
          alt=""
          src={materialSymbolsarrowDropD}
        />
      </div>
    </div>
  );
};

export default TableRow1;
