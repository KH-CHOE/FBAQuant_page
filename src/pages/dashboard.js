import TotalSalesCost1 from "../components/total-sales-cost1";
import TotalSalesCost from "../components/total-sales-cost";
import SalesAndCostContainer1 from "../components/total-sales-cost2";
import Body from "../components/body";
import Table from "../components/table";
import Menu from "../components/Menu";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <main className="container">
        <TotalSalesCost1 />
        <TotalSalesCost
          materialSymbolsarrowDownw="/materialsymbolsarrowdownwardrounded-1.svg"
          label="3%"
          vector2="/vector-2.svg"
          vector1="/vector-1.svg"
          cash="16.5K"
          sessions="Sessions"
        />
        <TotalSalesCost
          materialSymbolsarrowDownw="/materialsymbolsarrowdownwardrounded@2x.png"
          label="6%"
          vector2="/vector-2-1.svg"
          vector1="/vector-31.svg"
          cash="25.7K"
          sessions="Total Orders"
          totalSalesCostTop="317px"
          totalSalesCostLeft="2px"
          propWidth="358px"
          propColor="#1eb564"
          vectorIconLeft="179px"
          vectorIconWidth="155px"
          vectorIconLeft1="179px"
          propWidth2="155px"
          propMinWidth2="89px"
          propMinWidth1="101px"
          sessionsDisplay="inline-block"
        />
        <div className="total-sales-cost">
          <div className="total-sales-cost-child" />
          <div className="frame-parent">
            <div className="material-symbolsarrow-downwar-parent">
              <img
                className="material-symbolsarrow-downwar-icon"
                alt=""
                src="/materialsymbolsarrowdownwardrounded@2x.png"
              />
              <div className="label">12%</div>
            </div>
            <div className="label1">vs last 7 days</div>
          </div>
          <img className="total-sales-cost-item" alt="" src="/vector-2-2.svg" />
          <img
            className="total-sales-cost-inner"
            alt=""
            src="/vector-3-1.svg"
          />
          <b className="cash">50K</b>
          <div className="total-profit">Total Profit</div>
          <div className="label2">Last 7 days</div>
        </div>
        <TotalSalesCost
          materialSymbolsarrowDownw="/materialsymbolsarrowdownwardrounded-4@2x.png"
          label="2%"
          vector2="/vector-2-3.svg"
          vector1="/vector-3-2.svg"
          cash="12K"
          sessions="Discounted Amount"
          totalSalesCostTop="317px"
          totalSalesCostLeft="770px"
          propWidth="358px"
          propColor="#d02626"
          vectorIconLeft="179px"
          vectorIconWidth="155px"
          vectorIconLeft1="179px"
          propWidth2="155px"
          propMinWidth2="56px"
          propMinWidth1="unset"
          sessionsDisplay="inline-block"
        />
        <SalesAndCostContainer1 />
        <div className="navbar">
          <div className="navbar1">
            <div className="search">
              <img className="search-icon" alt="" src="/search1.svg" />
              <h2 className="dashboard1">Dashboard</h2>
            </div>
            <div className="action">
              <div className="avatar">
                <div className="background">
                  <div className="background1" />
                  <div className="overlay" />
                </div>
                <img className="avatar-icon" alt="" src="/avatar@2x.png" />
              </div>
              <img
                className="moon-stars-icon"
                alt=""
                src="/moonstars2@2x.png"
              />
              <img
                className="moon-stars-icon"
                alt=""
                src="/layoutgridadd2@2x.png"
              />
              <div className="notification">
                <img
                  className="bell-icon"
                  loading="lazy"
                  alt=""
                  src="/bell1.svg"
                />
                <div className="dot">
                  <div className="background2" />
                  <div className="dot-label">4</div>
                </div>
              </div>
              <div className="avatar1">
                <div className="avatar2">
                  <div className="background">
                    <div className="background4" />
                    <div className="overlay1" />
                  </div>
                  <img className="avatar-icon" alt="" src="/avatar-1@2x.png" />
                </div>
                <div className="status" />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="header">
            <div className="text">
              <div className="card-title">Reports</div>
              <div className="card-subtitle">Last 7 Days</div>
            </div>
            <img
              className="dots-vertical-icon"
              loading="lazy"
              alt=""
              src="/dotsvertical1.svg"
            />
          </div>
          <div className="body">
            <div className="tabs">
              <div className="tab">
                <b className="paypal">24k</b>
                <div className="paypal1">Customers</div>
              </div>
              <div className="tab1">
                <b className="paypal2">1.5k</b>
                <div className="paypal3">Products</div>
              </div>
              <div className="tab1">
                <b className="paypal4">250k</b>
                <div className="paypal5">Revenue</div>
              </div>
            </div>
            <div className="chart">
              <div className="chart1">
                <div className="text1">
                  <div className="chart-labels">50k</div>
                  <div className="chart-labels1">40k</div>
                  <div className="chart-labels1">30k</div>
                  <div className="chart-labels1">20k</div>
                  <div className="chart-labels4">10k</div>
                  <div className="chart-labels5">0k</div>
                </div>
                <img
                  className="chart-icon"
                  loading="lazy"
                  alt=""
                  src="/chart.svg"
                />
              </div>
              <div className="line">
                <div className="line1" />
              </div>
              <div className="text2">
                <div className="text3">Mon</div>
                <div className="text4">Tue</div>
                <div className="text3">Wed</div>
                <div className="text6">Thu</div>
                <div className="text7">Fri</div>
                <div className="chart-labels4">Sat</div>
                <div className="chart-labels1">Sun</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="header1">
            <div className="text10">
              <div className="card-title">Popular Products</div>
              <div className="card-subtitle">Total 10.4k Visitors</div>
            </div>
            <img
              className="dots-vertical-icon"
              alt=""
              src="/dotsvertical1.svg"
            />
          </div>
          <Body />
        </div>
        <div className="card2">
          <Table />
        </div>
      </main>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Dashboard;
