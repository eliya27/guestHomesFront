import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faMountainSun,
  faTaxi,
  faDoorOpen,
  faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <a href="http://localhost:3000/">GuestHomes🌴</a>
        </span>
        {user ? (
          <div className="navContainer-user">
            <Link to="/login">{user.username}</Link>
          </div>
        ) : (
          <div className="navContainer__navItems">
            <button className="navContainer__navItems-navButton">
              Register
            </button>
            <Link to="/login">
              <button className="navContainer__navItems-navButton">
                Login
              </button>
            </Link>
          </div>
        )}
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <FontAwesomeIcon
              icon={faDoorOpen}
              onClick={() => setToggleMenu(false)}
              className="gpt3__navbar-menu_doorIcon"
            />
          ) : (
            <FontAwesomeIcon
              icon={faDoorClosed}
              onClick={() => setToggleMenu(true)}
              className="gpt3__navbar-menu_doorIcon"
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container swing-left-fwd">
              {user ? (
                <div className="gpt3__navbar-menu_container-user">
                  <span>{user.username}</span>
                </div>
              ) : (
                <div className="gpt3__navbar-menu_container-auth">
                  <Link to="/register">
                    <button>Register</button>
                  </Link>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </div>
              )}
              <div className="gpt3__navbar-menu_container-navbarItems">
                <div className="gpt3__navbar-menu_container-navbarItems_item active">
                  <FontAwesomeIcon icon={faBed} />
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </div>
                <div className="gpt3__navbar-menu_container-navbarItems_item">
                  <FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>
                </div>
                <div className="gpt3__navbar-menu_container-navbarItems_item">
                  <FontAwesomeIcon icon={faCar} />
                  <span>Car Rentals</span>
                </div>
                <div className="gpt3__navbar-menu_container-navbarItems_item">
                  <FontAwesomeIcon icon={faMountainSun} />
                  <span>Attractions</span>
                </div>
                <div className="gpt3__navbar-menu_container-navbarItems_item">
                  <FontAwesomeIcon icon={faTaxi} />
                  <span>Airport Taxi</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*Tomorrow complete deployment of frontEnd 
  Then focus on Node Js endpoints of Kodisha systems */
