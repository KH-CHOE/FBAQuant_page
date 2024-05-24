import Navbar from "../components/navbar";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import "./dashboard1.css";

const Dashboard1 = () => {
  return (
    <div className="dashboard2">
      <Navbar
        search="/search.svg"
        watchlist="Dashboard"
        moonStars="/moonstars1@2x.png"
        layoutGridAdd="/layoutgridadd1@2x.png"
        user1="/user@2x.png"
        propFlex="unset"
        propAlignSelf="unset"
        navbarMarginTop="-98px"
        navbarWidth="1126px"
      />
      <section className="my-stock-parent">
        <h3 className="my-stock">My Stock</h3>
        <FrameComponent3 />
      </section>
      <section className="dashboard-inner">
        <FrameComponent2 />
      </section>
      <section className="image-recognizer-wrapper">
        <div className="image-recognizer">
          <div className="card3">
            <div className="header2">
              <div className="text17">
                <h3 className="error-handler">Trades History</h3>
              </div>
              <img
                className="dots-vertical-icon8"
                loading="lazy"
                alt=""
                src="/dotsvertical.svg"
              />
            </div>
            <div className="body1">
              <div className="deta-table-row1">
                <div className="deta-table-cell5">
                  <div className="type">ID</div>
                  <div className="arrow4">
                    <img
                      className="fichevron-up-icon4"
                      alt=""
                      src="/fichevronup.svg"
                    />
                    <img
                      className="chevron-down-icon5"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <div className="deta-table-cell6">
                  <div className="type">TICKER</div>
                  <div className="arrow4">
                    <img
                      className="fichevron-up-icon4"
                      alt=""
                      src="/fichevronup-1.svg"
                    />
                    <img
                      className="chevron-down-icon5"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <div className="deta-table-cell5">
                  <div className="type">type</div>
                  <div className="arrow4">
                    <img
                      className="fichevron-up-icon4"
                      alt=""
                      src="/fichevronup-1.svg"
                    />
                    <img
                      className="chevron-down-icon5"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <div className="deta-table-cell8">
                  <div className="type">AMOUNT</div>
                </div>
              </div>
              <div className="list1">
                <div className="list-item">#6552</div>
                <div className="list-item1">AAPL</div>
                <div className="list-item2">
                  <div className="list-item3">Buy</div>
                </div>
                <div className="list-item4">$999.29</div>
              </div>
              <div className="list1">
                <div className="list-item">#6551</div>
                <div className="list-item1">AMZN</div>
                <div className="ellipse-parent">
                  <div className="frame-child" />
                  <div className="list-item3">Sell</div>
                </div>
                <div className="list-item4">$72.40</div>
              </div>
              <div className="list1">
                <div className="list-item">#6550</div>
                <div className="list-item1">TWTR</div>
                <div className="ellipse-group">
                  <div className="frame-child" />
                  <div className="list-item3">Buy</div>
                </div>
                <div className="list-item4">$99.90</div>
              </div>
              <div className="list1">
                <div className="list-item">#6549</div>
                <div className="list-item1">AMZN</div>
                <div className="ellipse-group">
                  <div className="frame-inner" />
                  <div className="list-item3">Buy</div>
                </div>
                <div className="list-item4">$249.99</div>
              </div>
              <div className="list1">
                <div className="list-item">#6548</div>
                <div className="list-item1">MSFT</div>
                <div className="ellipse-parent">
                  <div className="frame-child" />
                  <div className="list-item3">Sell</div>
                </div>
                <div className="list-item4">$79.40</div>
              </div>
            </div>
          </div>
          <FrameComponent1 />
        </div>
      </section>
    </div>
  );
};

export default Dashboard1;
