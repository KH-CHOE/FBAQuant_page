import { useMemo } from "react";
import "./navbar.css";

const Navbar = ({
  search,
  watchlist,
  moonStars,
  layoutGridAdd,
  user1,
  propFlex,
  propAlignSelf,
  navbarMarginTop,
  navbarWidth,
}) => {
  const navbarStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      marginTop: navbarMarginTop,
      width: navbarWidth,
    };
  }, [propFlex, propAlignSelf, navbarMarginTop, navbarWidth]);

  return (
    <div className="navbar2" style={navbarStyle}>
      <div className="navbar3">
        <div className="search2">
          <img className="search-icon1" alt="" src={search} />
          <h2 className="watchlist">{watchlist}</h2>
        </div>
        <div className="action1">
          <div className="avatar3">
            <div className="background5">
              <div className="background6" />
              <div className="overlay2" />
            </div>
            <img className="avatar-icon2" alt="" src="/avatar1@2x.png" />
          </div>
          <img className="moon-stars-icon1" alt="" src={moonStars} />
          <img className="moon-stars-icon1" alt="" src={layoutGridAdd} />
          <div className="span">
            <div className="user-parent">
              <div className="user" />
              <img className="user-icon" loading="lazy" alt="" src={user1} />
            </div>
            <div className="john-doe">John Doe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
