import "./frame-component2.css";

const FrameComponent2 = () => {
  return (
    <div className="heading-parent">
      <h3 className="heading">Your Total Balance</h3>
      <div className="heading1">$ 1234.56</div>
      <div className="frame-parent9">
        <div className="frame-wrapper1">
          <div className="amount-parent">
            <div className="amount1">$4000</div>
            <div className="amount1">$3000</div>
            <div className="amount1">$2000</div>
            <div className="amount1">$1000</div>
            <div className="amount5">0</div>
          </div>
        </div>
        <div className="frame-parent10">
          <div className="frame-parent11">
            <div className="frame-wrapper2">
              <div className="frame-parent12">
                <div className="frame-parent13">
                  <div className="investment-indicators-wrapper">
                    <div className="investment-indicators" />
                  </div>
                  <div className="income">Income</div>
                </div>
                <div className="frame-parent14">
                  <div className="investment-indicators-wrapper">
                    <div className="frame-child8" />
                  </div>
                  <div className="expenses">Expenses</div>
                </div>
              </div>
            </div>
            <div className="date">
              <div className="date-child" />
              <div className="monthly">Monthly</div>
              <div className="iconarrow-square-down">
                <img
                  className="function-call-icon"
                  alt=""
                  src="/function-call.svg"
                />
                <img className="variable-storage-icon" alt="" />
              </div>
            </div>
          </div>
          <div className="data-aggregator-wrapper">
            <div className="data-aggregator">
              <div className="line-parent">
                <div className="line6" />
                <div className="line7" />
                <div className="line8" />
                <div className="line9" />
                <div className="line10" />
                <img className="frame-child9" alt="" src="/vector-5.svg" />
                <img className="frame-child10" alt="" src="/vector-6.svg" />
                <div className="line-div" />
                <div className="tooltips-button" />
                <div className="tooltip">
                  <img
                    className="tooltip-child"
                    loading="lazy"
                    alt=""
                    src="/group-14@2x.png"
                  />
                  <div className="value">$224.00</div>
                  <div className="value1">Income</div>
                </div>
              </div>
              <div className="months">
                <div className="text89">Jan</div>
                <div className="text90">Feb</div>
                <div className="text91">Mar</div>
                <div className="text90">Apr</div>
                <div className="text93">May</div>
                <div className="text89">Jun</div>
                <div className="text95">Jul</div>
                <div className="text91">Aug</div>
                <div className="text89">Sep</div>
                <div className="text90">Oct</div>
                <div className="text91">Nov</div>
                <div className="text91">Dec</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
