import React, { useState } from "react";
import "./HotelMenuLarge.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const HotelMenuLarge = ({ setMin, setMax, handleClick }) => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [OpenDateRange, setOpenDateRange] = useState(false);

  return (
    <div className="hotelListContainer__Listwrapper-searchLarge">
      <h1 className="hotelListContainer__Listwrapper-search__title">
        Search(Large)
      </h1>
      <div className="hotelListContainer__Listwrapper-search_options">
        <div className="hotelListContainer__Listwrapper-search__bar Destination">
          <label>Destination</label>
          <input
            type="text"
            placeholder={destination}
            className="hotelListContainer__Listwrapper-search__input"
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        <div className="hotelListContainer__Listwrapper-search__bar Date">
          <label>Check-in Date</label>
          <span onClick={() => setOpenDateRange(!OpenDateRange)}>
            {`${format(date[0].startDate, "MM/dd/yyyy")}
                to ${format(date[0].endDate, "MM/dd/yyyy")}`}
          </span>
          {OpenDateRange && (
            <DateRange
              onChange={(item) => setDate([item.selection])}
              ranges={date}
              minDate={new Date()}
              className="datePicker"
            />
          )}
        </div>
        <div className="hotelListContainer__Listwrapper-search__Item">
          <div className="hotelListContainer__Listwrapper-search__Item-title">
            <h3>Options</h3>
          </div>
          <div className="hotelListContainer__Listwrapper-search__Item-options_group">
            <div className="hotelListContainer__Listwrapper-search__Item-options">
              <label>
                Min Price <small>(per night)</small>
              </label>
              <input
                type="number"
                min="1"
                onChange={(e) => setMin(e.target.value)}
              />
            </div>
            <div className="hotelListContainer__Listwrapper-search__Item-options">
              <label>
                Max Price <small>(per night)</small>
              </label>
              <input type="number" onChange={(e) => setMax(e.target.value)} />
            </div>
            <div className="hotelListContainer__Listwrapper-search__Item-options">
              <label>Adult</label>
              <input type="number" placeholder={options.adult} />
            </div>
            <div className="hotelListContainer__Listwrapper-search__Item-options">
              <label>Children</label>
              <input type="number" min={0} placeholder={options.children} />
            </div>
            <div className="hotelListContainer__Listwrapper-search__Item-options">
              <label>Room</label>
              <input type="number" placeholder={options.room} />
            </div>
          </div>
        </div>
        <button
          className="hotelListContainer__Listwrapper-search_btn"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HotelMenuLarge;
