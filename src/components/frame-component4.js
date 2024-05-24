import "./frame-component4.css";

const FrameComponent = () => {
  return (
    <div className="nav-tabs-parent">
      <nav className="nav-tabs">
        <button className="nav-item">
          <div className="text79">US Stocks</div>
        </button>
        <div className="nav-item1">
          <div className="text80">Korean Stocks</div>
        </div>
        <div className="nav-item1">
          <div className="text81">Crypto</div>
        </div>
        <div className="nav-item1">
          <div className="text82">Exchange Rates</div>
        </div>
        <div className="nav-item1">
          <div className="text83">ETFs</div>
        </div>
        <div className="nav-item1">
          <div className="text84">Bonds</div>
        </div>
        <div className="nav-item1">
          <div className="text85">Indices</div>
        </div>
      </nav>
      <div className="form6">
        <div className="form7">
          <div className="text86">Search by Ticker</div>
          <div className="mingcutesearch-line-wrapper">
            <img
              className="mingcutesearch-line-icon"
              alt=""
              src="/mingcutesearchline.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
