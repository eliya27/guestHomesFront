import React, { useState } from "react";
import "./Hotels.css";
//Components
import Header from "../../components/Header/Header";
import SearchItems from "../../components/SearchItems/SearchItems";
import HotelMenu from "../../components/HotelMenu/HotelMenu";
import Navbar from "../../components/navbar/Navbar";
import HotelMenuLarge from "../../components/HotelMenu/HotelMenuLarge";

import useFetch from "../../components/hooks/useFetch";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [min, setMin] = useState(5000);
  const [max, setMax] = useState(200000);
  const { loading, data, reFetch } = useFetch(
    `https://guesthomesapi.azurewebsites.net/api/hotels?city=${destination}&min=${min}&max=${max}`
  );
  const handleClick = () => {
    reFetch();
  };
  const [searchBar, setSearchBar] = useState(false);
  return (
    <div className="hotel">
      <Navbar />
      <Header type="list" />
      <div className="hotelListContainer section__padding">
        <div className="hotelListContainer__Listwrapper">
          <div className="HotelMenuLarge">
            <HotelMenuLarge
              setMin={setMin}
              setMax={setMax}
              handleClick={handleClick}
            />
          </div>
        </div>

        <div className="hotelListContainer__Listwrapper-results">
          {loading ? (
            "Loading.."
          ) : (
            <>
              {data.map((item) => (
                <SearchItems item={item} key={item._id} />
              ))}
            </>
          )}
        </div>
        <div className="HotelMenuMobile">
          {searchBar && (
            <HotelMenu
              setMin={setMin}
              setMax={setMax}
              handleClick={handleClick}
            />
          )}
        </div>
        <div className="hotel__bottomButton">
          <FontAwesomeIcon
            icon={faSearch}
            onClick={() => setSearchBar(!searchBar)}
            className="searchBarButton"
          />
        </div>
      </div>
    </div>
  );
};

export default Hotels;
