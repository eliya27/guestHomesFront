import useFetch from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Reserve.css";
import { SearchContext } from "../../context/SearchContext";
import { format } from "date-fns";
const Reserve = ({ setOpenModal, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  console.log(`Hotel id: ${hotelId}`);
  const { data } = useFetch(
    `https://guesthomesapi.azurewebsites.net/api/hotels/room/find/${hotelId}`
  );
  console.log(`My Room data: ${data}`);

  const { date } = useContext(SearchContext);
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    let dates = [];

    while (date <= end) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };
  const allDates = getDatesInRange(date[0].startDate, date[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          fetch(`http://localhost:5000/api/rooms/availability/${roomId}`, {
            method: "PUT",
            body: JSON.stringify({
              dates: allDates,
            }),

            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
        })
      );
      console.log("Data sent");
      navigate("/");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="reserve">
      <div className="reserve__container">
        <FontAwesomeIcon
          icon={faCircleXmark}
          onClick={() => setOpenModal(false)}
          className="close"
        />
        <span>Select your room:</span>
        {data.map((item) => (
          <div className="reserve__container-Item">
            <div className="reserve__container-Item_info">
              <div className="reserve__container-Item_info-Title">
                Room: <b>{item.title}</b>
              </div>
              <div className="reserve__container-Item_info-Desc">
                {item.desc}
              </div>
              <div className="reserve__container-Item_info-Max">
                Max People: <b>{item.maxPeople}</b>
              </div>
              <div className="reserve__container-Item_info-Price">
                Price: Tsh. {item.price}/=
              </div>
              <div className="reserve__container-RoomNumber">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="room">
                    <label>Room No: {roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
                <button onClick={handleClick} className="reserve__button">
                  Reserve Now!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reserve;
