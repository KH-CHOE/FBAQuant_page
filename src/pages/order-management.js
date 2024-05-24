import Menu1 from "../components/menu1";
import Navbar from "../components/navbar";
import FrameComponent from "../components/frame-component4";
import TableRow2 from "../components/table-row2";
import TableRow1 from "../components/table-row1";
import "./order-management.css";

const OrderManagement = () => {
  return (
    <div className="order-management">
      <div className="menu1">
        <Menu1 />
      </div>
      <main className="order-management-inner">
        <section className="frame-group">
          <div className="navbar-wrapper">
            <Navbar
              search="/search1.svg"
              watchlist="Watchlist"
              moonStars="/moonstars@2x.png"
              layoutGridAdd="/layoutgridadd@2x.png"
              user1="/user1@2x.png"
            />
          </div>
          <FrameComponent />
          <div className="total-sales-cost-wrapper">
            <div className="total-sales-cost1">
              <div className="rectangle-div" />
              <div className="data-table">
                <div className="deta-table-row">
                  <div className="deta-table-cell">
                    <div className="id">ID</div>
                    <div className="arrow">
                      <img
                        className="fichevron-up-icon"
                        alt=""
                        src="/fichevronup1.svg"
                      />
                      <img
                        className="chevron-down-icon"
                        alt=""
                        src="/chevrondown-4.svg"
                      />
                    </div>
                  </div>
                  <div className="deta-table-cell1">
                    <img
                      className="trending-up-icon"
                      alt=""
                      src="/trendingup.svg"
                    />
                    <div className="arrow1">
                      <img
                        className="fichevron-up-icon"
                        alt=""
                        src="/fichevronup-11.svg"
                      />
                      <img
                        className="chevron-down-icon"
                        alt=""
                        src="/chevrondown-4.svg"
                      />
                    </div>
                  </div>
                  <div className="deta-table-cell2">
                    <div className="id">Issued Date</div>
                    <div className="arrow">
                      <img
                        className="fichevron-up-icon"
                        alt=""
                        src="/fichevronup-11.svg"
                      />
                      <img
                        className="chevron-down-icon"
                        alt=""
                        src="/chevrondown-4.svg"
                      />
                    </div>
                  </div>
                  <div className="deta-table-cell">
                    <div className="id">Total</div>
                    <div className="arrow">
                      <img
                        className="fichevron-up-icon"
                        alt=""
                        src="/fichevronup-11.svg"
                      />
                      <img
                        className="chevron-down-icon"
                        alt=""
                        src="/chevrondown-4.svg"
                      />
                    </div>
                  </div>
                  <div className="deta-table-cell4">
                    <div className="actions">ACTIONS</div>
                  </div>
                </div>
                <div className="data-table-row">
                  <div className="data-table-cell">
                    <div className="div">#5089</div>
                  </div>
                  <div className="data-table-cell1">
                    <div className="badge">
                      <img
                        className="circle-check-icon"
                        alt=""
                        src="/circlecheck.svg"
                      />
                    </div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="march-2023">31 March 2023</div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="div1">$1200</div>
                  </div>
                  <div className="data-table-cell4">
                    <div className="view-detail">View Detail</div>
                    <img className="mail-icon" alt="" src="/mail.svg" />
                    <img className="mail-icon" alt="" src="/eye.svg" />
                    <img
                      className="mail-icon"
                      alt=""
                      src="/dotsvertical2.svg"
                    />
                  </div>
                </div>
                <div className="data-table-row">
                  <div className="data-table-cell">
                    <div className="div">#5089</div>
                  </div>
                  <div className="data-table-cell1">
                    <div className="badge">
                      <img
                        className="circle-check-icon"
                        alt=""
                        src="/circlecheck.svg"
                      />
                    </div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="march-2023">31 March 2023</div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="div1">$1200</div>
                  </div>
                  <div className="data-table-cell4">
                    <div className="view-detail">View Detail</div>
                    <img className="mail-icon" alt="" src="/mail.svg" />
                    <img className="mail-icon" alt="" src="/eye.svg" />
                    <img
                      className="mail-icon"
                      alt=""
                      src="/dotsvertical2.svg"
                    />
                  </div>
                </div>
                <div className="data-table-row">
                  <div className="data-table-cell">
                    <div className="div">#5089</div>
                  </div>
                  <div className="data-table-cell1">
                    <div className="badge">
                      <img
                        className="circle-check-icon"
                        alt=""
                        src="/circlecheck.svg"
                      />
                    </div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="march-2023">31 March 2023</div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="div1">$1200</div>
                  </div>
                  <div className="data-table-cell4">
                    <div className="view-detail">View Detail</div>
                    <img className="mail-icon" alt="" src="/mail.svg" />
                    <img className="mail-icon" alt="" src="/eye.svg" />
                    <img
                      className="mail-icon"
                      alt=""
                      src="/dotsvertical2.svg"
                    />
                  </div>
                </div>
                <div className="data-table-row">
                  <div className="data-table-cell">
                    <div className="div">#5089</div>
                  </div>
                  <div className="data-table-cell1">
                    <div className="badge">
                      <img
                        className="circle-check-icon"
                        alt=""
                        src="/circlecheck.svg"
                      />
                    </div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="march-2023">31 March 2023</div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="div1">$1200</div>
                  </div>
                  <div className="data-table-cell4">
                    <div className="view-detail">View Detail</div>
                    <img className="mail-icon" alt="" src="/mail.svg" />
                    <img className="mail-icon" alt="" src="/eye.svg" />
                    <img
                      className="mail-icon"
                      alt=""
                      src="/dotsvertical2.svg"
                    />
                  </div>
                </div>
                <div className="data-table-row">
                  <div className="data-table-cell">
                    <div className="div">#5089</div>
                  </div>
                  <div className="data-table-cell1">
                    <div className="badge">
                      <img
                        className="circle-check-icon"
                        alt=""
                        src="/circlecheck.svg"
                      />
                    </div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="march-2023">31 March 2023</div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="div1">$1200</div>
                  </div>
                  <div className="data-table-cell4">
                    <div className="view-detail">View Detail</div>
                    <img className="mail-icon" alt="" src="/mail.svg" />
                    <img className="mail-icon" alt="" src="/eye.svg" />
                    <img
                      className="mail-icon"
                      alt=""
                      src="/dotsvertical2.svg"
                    />
                  </div>
                </div>
                <div className="data-table-row">
                  <div className="data-table-cell">
                    <div className="div">#5089</div>
                  </div>
                  <div className="data-table-cell1">
                    <div className="badge">
                      <img
                        className="circle-check-icon"
                        alt=""
                        src="/circlecheck.svg"
                      />
                    </div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="march-2023">31 March 2023</div>
                  </div>
                  <div className="data-table-cell2">
                    <div className="div1">$1200</div>
                  </div>
                  <div className="data-table-cell4">
                    <div className="view-detail">View Detail</div>
                    <img className="mail-icon" alt="" src="/mail.svg" />
                    <img className="mail-icon" alt="" src="/eye.svg" />
                    <img
                      className="mail-icon"
                      alt=""
                      src="/dotsvertical2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="table">
                <div className="table-header-row">
                  <div className="table-cell">
                    <div className="ticker">ticker</div>
                  </div>
                  <div className="table-cell1">
                    <div className="last-price">lAST PRICE</div>
                  </div>
                  <div className="table-cell1">
                    <div className="change">change</div>
                  </div>
                  <div className="table-cell3">
                    <div className="last-price">VOLUME(m)</div>
                  </div>
                  <div className="table-cell1">
                    <div className="high">high</div>
                  </div>
                  <div className="table-cell1">
                    <div className="low">low</div>
                  </div>
                  <div className="table-cell6">
                    <img className="trash-icon" alt="" src="/trash.svg" />
                  </div>
                </div>
                <TableRow2
                  trash="/trash1.svg"
                  materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
                />
                <TableRow1
                  trash="/trash1.svg"
                  materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
                />
                <TableRow1
                  trash="/trash1.svg"
                  materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
                  propWidth="1128px"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propRowGap="unset"
                  propMinWidth="unset"
                  propMinWidth1="unset"
                  propMinWidth2="unset"
                  propMinWidth3="unset"
                />
                <TableRow1
                  trash="/trash1.svg"
                  materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
                  propWidth="1128px"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propRowGap="unset"
                  propMinWidth="unset"
                  propMinWidth1="unset"
                  propMinWidth2="unset"
                  propMinWidth3="unset"
                />
                <TableRow1
                  trash="/trash1.svg"
                  materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
                  propWidth="1128px"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propRowGap="unset"
                  propMinWidth="unset"
                  propMinWidth1="unset"
                  propMinWidth2="unset"
                  propMinWidth3="unset"
                />
                <TableRow2
                  trash="/trash1.svg"
                  materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
                  propWidth="1128px"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propRowGap="unset"
                  propMinWidth="unset"
                  propMinWidth1="unset"
                  propMinWidth2="unset"
                  propMinWidth3="unset"
                />
                <TableRow2
                  trash="/trash1.svg"
                  materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
                  propWidth="1128px"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propRowGap="unset"
                  propMinWidth="unset"
                  propMinWidth1="unset"
                  propMinWidth2="unset"
                  propMinWidth3="unset"
                />
                <TableRow1
                  trash="/trash1.svg"
                  materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
                  propWidth="1128px"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propRowGap="unset"
                  propMinWidth="unset"
                  propMinWidth1="unset"
                  propMinWidth2="unset"
                  propMinWidth3="unset"
                />
                <TableRow2
                  trash="/trash1.svg"
                  materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
                  propWidth="1128px"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propRowGap="unset"
                  propMinWidth="unset"
                  propMinWidth1="unset"
                  propMinWidth2="unset"
                  propMinWidth3="unset"
                />
                <TableRow2
                  trash="/trash1.svg"
                  materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
                  propWidth="1128px"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propRowGap="unset"
                  propMinWidth="unset"
                  propMinWidth1="unset"
                  propMinWidth2="unset"
                  propMinWidth3="unset"
                />
                <div className="table-row">
                  <div className="showing-parent">
                    <div className="showing">Showing</div>
                    <div className="dropdown">
                      <div className="dropdown1">
                        <div className="text11">10</div>
                        <img
                          className="chevron-left-icon"
                          alt=""
                          src="/chevrondown-41.svg"
                        />
                      </div>
                    </div>
                    <div className="of-50">of 50</div>
                  </div>
                  <div className="pagination">
                    <div className="pagination-text">
                      <img
                        className="chevron-left-icon"
                        loading="lazy"
                        alt=""
                        src="/chevronleft.svg"
                      />
                    </div>
                    <div className="pagination-text1">
                      <div className="text12">1</div>
                    </div>
                    <div className="pagination-text2">
                      <div className="text13">2</div>
                    </div>
                    <div className="pagination-text3">
                      <div className="text14">3</div>
                    </div>
                    <div className="pagination-text3">
                      <div className="text14">4</div>
                    </div>
                    <div className="pagination-text3">
                      <div className="text14">5</div>
                    </div>
                    <div className="pagination-text6">
                      <img
                        className="chevron-left-icon"
                        loading="lazy"
                        alt=""
                        src="/chevronright1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OrderManagement;
