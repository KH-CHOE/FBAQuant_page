import "./total-sales-cost1.css";

const TotalSalesCost1 = () => {
  return (
    <div className="total-sales-cost2">
      <div className="total-sales-cost-child1" />
      <div className="total-sales">{`Total Sales & Costs`}</div>
      <b className="cash1">$350K</b>
      <div className="label3">Last 7 days</div>
      <div className="cost-trend">
        <div className="material-symbolsarrow-downwar-group">
          <img
            className="material-symbolsarrow-downwar-icon1"
            alt=""
            src="/materialsymbolsarrowdownwardrounded@2x.png"
          />
          <div className="label4">8.56K</div>
        </div>
        <div className="label5">vs last 7 days</div>
      </div>
      <div className="sales-period-labels">
        <div className="label6">Mon</div>
        <div className="label7">tue</div>
        <div className="label8">wed</div>
        <div className="label9">thu</div>
        <div className="label10">fri</div>
        <div className="label7">sat</div>
        <div className="label12">sun</div>
      </div>
      <img className="group-icon" loading="lazy" alt="" src="/group-1.svg" />
      <div className="sales-figures">
        <div className="material-symbolsarrow-downwar-group">
          <div className="sales-circles" />
          <div className="label13">Sales</div>
        </div>
        <div className="material-symbolsarrow-downwar-group">
          <div className="frame-child1" />
          <div className="label14">Cost</div>
        </div>
      </div>
    </div>
  );
};

export default TotalSalesCost1;
