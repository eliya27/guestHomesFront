import React from "react";
import "./SearchItems.css";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTaxi, faRoad } from "@fortawesome/free-solid-svg-icons";
//

import { Link } from "react-router-dom";

const SearchItems = ({ item }) => {
  return (
    <div className="SearchItems" key={item._id}>
      <div className="SearchItems__img">
        <img src={item.photos[0]} alt="" />
      </div>
      <div className="SearchItems__desc">
        <div className="SearchItems__desc-hotelName">
          <h2>
            {item.name}
            <small>({item.city})</small>
          </h2>

          <p>
            <FontAwesomeIcon icon={faRoad} />
            {item.distance}
          </p>
        </div>

        <div className="SearchItems__desc-hotelOffer">
          <button>
            <FontAwesomeIcon icon={faTaxi} /> Free Transport
          </button>
        </div>
        <div className="SearchItems__desc-hotelFeatures">
          <h3>Studio Appartment with Air Conditioning</h3>
          <p>1 room . 2 bathroom . 3 sitting Room</p>
        </div>
        <div className="SearchItems__desc-hotelOption">
          <h3>Free Cancelation</h3>
          <p>You can cancel anytime</p>
        </div>
      </div>
      <div className="SearchItems__metrics">
        {item.rating && (
          <div className="SearchItems__metrics-condition">
            <p>{item.desc} </p>
            <button className="SearchItems__metrics-condition_rating">
              {item.rating}
            </button>
          </div>
        )}
        <div className="SearchItems__metrics-price">
          <p className="SearchItems__metrics-price_number">
            Tsh.{item.cheapestPrice} /=
          </p>
          <p>Including Tax and VAT</p>
          <Link to={`/hotel/${item._id}`}>
            <button>See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
