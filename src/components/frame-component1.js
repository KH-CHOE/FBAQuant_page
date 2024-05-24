import "./frame-component1.css";

const FrameComponent1 = () => {
  return (
    <div className="market-indices-label">
      <h3 className="market-indices">Market Indices</h3>
      <div className="matchmaker">
        <button className="nasdaq-wrapper">
          <div className="nasdaq">NASDAQ</div>
        </button>
        <div className="kospi-wrapper">
          <div className="kospi">KOSPI</div>
        </div>
        <div className="nikkei-wrapper">
          <div className="nikkei">Nikkei</div>
        </div>
        <div className="nikkei-wrapper">
          <div className="dija">DIJA</div>
        </div>
        <div className="nikkei-wrapper">
          <div className="eurostoxx">EuroStoxx</div>
        </div>
      </div>
      <div className="frame-parent15">
        <div className="frame-wrapper3">
          <div className="d-parent">
            <div className="d">1D</div>
            <div className="k-o-s-p-i-label" />
          </div>
        </div>
        <div className="frame-child11" />
        <div className="d-wrapper">
          <div className="m">5D</div>
        </div>
        <div className="frame-child11" />
        <div className="d-wrapper">
          <div className="m">1M</div>
        </div>
        <div className="frame-child11" />
        <div className="d-wrapper">
          <div className="m">6M</div>
        </div>
        <div className="frame-child11" />
        <div className="d-wrapper">
          <div className="m">1Y</div>
        </div>
      </div>
      <div className="frame-parent16">
        <div className="parent">
          <div className="div47">11,700</div>
          <div className="nikkei">11,650</div>
          <div className="nikkei">11,600</div>
          <div className="frame-parent17">
            <div className="group">
              <div className="nikkei">11,550</div>
              <div className="high-parent">
                <div className="open">High</div>
                <div className="div51">11,691.89</div>
              </div>
            </div>
            <div className="high-parent">
              <div className="open">Low</div>
              <div className="div52">11,470.47</div>
            </div>
          </div>
        </div>
        <div className="frame-parent18">
          <div className="frame-parent19">
            <img
              className="frame-child15"
              loading="lazy"
              alt=""
              src="/group-1213.svg"
            />
            <div className="am">10 am</div>
            <div className="am1">11 am</div>
            <div className="am">12 pm</div>
          </div>
          <div className="market-indices-rows">
            <div className="prev-close-avr-28-days-parent">
              <div className="prev-close-avr">Prev close (Avr 28 Days)</div>
              <div className="high-low-values">11,512.41</div>
            </div>
          </div>
          <div className="market-indices-rows1">
            <div className="open-parent">
              <div className="open">Open</div>
              <div className="high-low-values">11,690.11</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
