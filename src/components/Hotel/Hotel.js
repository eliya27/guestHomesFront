import React, { useState, useContext } from "react";
import "./Hotel.css";
import Navbar from "../navbar/Navbar";
import Header from "../Header/Header";
import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import useFetch from "../hooks/useFetch";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { DateRange } from "react-date-range";
import Reserve from "../Reserve/Reserve";
const Hotel = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  const { date } = useContext(SearchContext);
  console.log(date);
  const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
  const Number_of_Nights = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const DiffDays = Math.ceil(timeDiff / DAY_IN_MILLISECONDS);
    return DiffDays;
  };
  const days = Number_of_Nights(date[0].endDate, date[0].startDate);
  console.log(days);

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(location);
  const { data, loading, error } = useFetch(
    `https://guesthomesapi.azurewebsites.net/api/hotels/find/${path}`
  );
  const Total_price = Math.ceil(data.cheapestPrice * days);
  const ImageData = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1485067801970-70573e3f77d0?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1504567961542-e24d9439a724?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];
  const [sliderNumber, setSliderNumber] = useState(4);
  const [sliderOpen, setSliderOpen] = useState(false);

  const handleOpen = (id) => {
    setSliderOpen(true);
    setSliderNumber(id);
    console.log(id);
  };

  const handleSlider = (direction) => {
    let NewSliderNumber;
    if (direction === "l") {
      NewSliderNumber = sliderNumber === 0 ? 8 : sliderNumber - 1;
    } else {
      NewSliderNumber = sliderNumber === 8 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(NewSliderNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer section__padding">
        {loading ? (
          "Hotel Data Loading.."
        ) : (
          <>
            {sliderOpen && (
              <div className="slider">
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  onClick={() => handleSlider("l")}
                  className="arrow"
                />
                <div className="sliderWrapper">
                  <img src={ImageData[sliderNumber].url} alt="" />
                </div>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  onClick={() => handleSlider("r")}
                  className="arrow"
                />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  onClick={() => setSliderOpen(false)}
                  className="close"
                />
              </div>
            )}
            <div className="hotelContainer__desc">
              <div className="hotelContainer__desc-details">
                <h1>{data.name}</h1>
                <div className="hotelAddress">
                  <FontAwesomeIcon icon={faLocationDot} />

                  <span className="hotel-location">
                    Excellent location {data.address} from center
                  </span>
                </div>

                <span className="address-desc">{data.desc}</span>
                <span className="offer"></span>
              </div>
            </div>
            <div className="hotelContainer__img">
              {ImageData.map((item, id) => (
                <img src={item.url} alt="" onClick={() => handleOpen(id)} />
              ))}
            </div>
            <div className="hotelContainer__literature">
              <div className="hotelContainer__literature-main">
                <h1>{data.name}</h1>
                <p>
                  LoremSit et do laborum non duis magna sunt minim laboris
                  reprehenderit commodo do occaecat Consequat exercitation Lorem
                  reprehenderit occaecat esse occaecat irure ea consectetur
                  exercitation elit ad..
                </p>
              </div>
              <div className="hotelContainer__literature-sidecard">
                <h3>Perfect for a {days}-night stay</h3>
                <p>
                  Located in the heart of Temeke this place is very nice with
                  <span>{data.rating}</span> rating
                </p>
                <span>
                  <span className="price-tag">Tsh {Total_price}/=</span> ({}
                  {days} days)
                </span>
                <button onClick={handleClick}>Reserve or Book Now</button>
              </div>
            </div>
          </>
        )}
      </div>
      <CTA />
      <Footer />
      {openModal && (
        <div className="modal">
          <Reserve setOpenModal={setOpenModal} hotelId={path} />
        </div>
      )}
    </div>
  );
};

export default Hotel;
