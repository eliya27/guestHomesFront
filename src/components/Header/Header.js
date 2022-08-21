import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faMountainSun,
  faTaxi,
  faCalendarDays,
  faPerson,
  faSearch,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
//Date Imports
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
//Context Data
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const { dispatch } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [openDateMobile, setOpenDateMobile] = useState(false);
  const [openOptionsMobile, setOpenOptionsMobile] = useState(false);

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();
  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, date, options } });
    navigate("/hotels", { state: { destination, date, options } });
  };

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header section__padding">
      <div
        className={
          type === "list"
            ? "header__headerContainer listMode"
            : "header__headerContainer"
        }
      >
        <div className="header__headerContainer-headerList">
          <div className="header__headerContainer-headerList_item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header__headerContainer-headerList_item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header__headerContainer-headerList_item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="header__headerContainer-headerList_item">
            <FontAwesomeIcon icon={faMountainSun} />
            <span>Attractions</span>
          </div>
          <div className="header__headerContainer-headerList_item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header__headerContainer-headerTitle">
              We got you covered, everywhere
            </h1>
            <p className="header__headerContainer-headerDesc">
              Find your next home with us, all over the country choose city to
              explore
            </p>
            {!user && (
              <button className="header__headerContainer-headerBtn">
                <Link to="/login">Sign In/Register</Link>
              </button>
            )}

            <div className="header__headerContainer-headerSearch section__padding">
              <div className="header__headerContainer-headerSearch_item">
                <FontAwesomeIcon
                  icon={faBed}
                  className="headerSearch_item-icon"
                />
                |
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearch_item-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header__headerContainer-headerSearch_item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="headerSearch_item-icon"
                />
                |
                <span
                  className="header__headerContainer-headerSearch_item-searchText"
                  onClick={() => {
                    setOpenDate(!openDate);
                    setOpenOptions(false);
                  }}
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")}`} to{" "}
                  {`${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="header__headerContainer-headerSearch_item">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="headerSearch_item-icon"
                />
                |
                <span
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    setOpenDate(false);
                  }}
                  className="header__headerContainer-headerSearch_item-searchText people"
                >
                  {`${options.adult} adults .${options.children} children .${options.room} rooms`}
                </span>
                {openOptions && (
                  <div className="familyOptions">
                    <div className="familyOptionsMobile__adults">
                      <div className="familyOptionsMobile-sub">
                        <p>Adults</p>
                        <div className="familyOptionsMobile-sub-options">
                          <button
                            disabled={options.adult <= 1}
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button onClick={() => handleOption("adult", "i")}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="familyOptionsMobile__childrens">
                      <div className="familyOptionsMobile-sub">
                        <p>Childrens</p>
                        <div className="familyOptionsMobile-sub-options">
                          <button
                            disabled={options.children <= 0}
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button onClick={() => handleOption("children", "i")}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="familyOptionsMobile__rooms">
                      <div className="familyOptionsMobile-sub">
                        <p>Rooms</p>
                        <div className="familyOptionsMobile-sub-options">
                          <button
                            disabled={options.room <= 1}
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button onClick={() => handleOption("room", "i")}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header__headerContainer-headerSearch_item">
                <button
                  className="header__headerContainer-headerBtn searchBtn"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="mobile__searchBar">
              <input
                type="text"
                placeholder="Destination ?"
                onChange={(e) => setDestination(e.target.value)}
              />
              <button
                onClick={() => {
                  setOpenOptionsMobile(!openOptionsMobile);
                  setOpenDateMobile(false);
                }}
              >
                <FontAwesomeIcon icon={faPeopleGroup} />
              </button>
              <button
                onClick={() => {
                  setOpenDateMobile(!openDateMobile);
                  setOpenOptionsMobile(false);
                }}
              >
                <FontAwesomeIcon icon={faCalendarDays} />
              </button>
              <button onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            {openDateMobile && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="dateMobile"
              />
            )}
            {openOptionsMobile && (
              <div className="familyOptionsMobile">
                <div className="familyOptionsMobile__adults">
                  <div className="familyOptionsMobile-sub">
                    <p>Adults</p>
                    <div className="familyOptionsMobile-sub-options">
                      <button
                        disabled={options.adult <= 1}
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button onClick={() => handleOption("adult", "i")}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="familyOptionsMobile__childrens">
                  <div className="familyOptionsMobile-sub">
                    <p>Childrens</p>
                    <div className="familyOptionsMobile-sub-options">
                      <button
                        disabled={options.children <= 0}
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button onClick={() => handleOption("children", "i")}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="familyOptionsMobile__rooms">
                  <div className="familyOptionsMobile-sub">
                    <p>Rooms</p>
                    <div className="familyOptionsMobile-sub-options">
                      <button
                        disabled={options.room <= 1}
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button onClick={() => handleOption("room", "i")}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
