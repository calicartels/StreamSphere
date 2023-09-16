import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import logo from "../../imgs/logo.jpg";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img color="black" src={logo} alt="" />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New</span>
          <span>My List</span>
        </div>
        <div className="right">
          <img src="https://thispersondoesnotexist.com/image" alt="" />
          <div className="profile">
            <span onClick={() => dispatch(logout())}>
              <MeetingRoomIcon className="icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
