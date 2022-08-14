import React from "react";
import useFetch from "../hooks/useFetch";
import "./Featured.css";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://guesthomesapi.azurewebsites.net/api/hotels/countByCity?cities=Arusha,Dodoma,Mwanza,Dar-es-salaam"
  );
  console.log(data);
  //const url = "http://localhost:5000/api/hotels/countByCity?cities=Arusha,Dodoma,Mwanza,Dar-es-salaam"
  //fetchurl(
  //"http://localhost:5000/api/hotels/countByCity?cities=Arusha,Dodoma,Mwanza,Dar-es-salaam"
  //);
  return (
    <div className="Featured">
      {loading ? (
        "Please wait..!"
      ) : (
        <>
          <div className="Featured__Item">
            <img
              src="https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60"
              alt=""
              className="Featured__Item-img"
            />
            <div className="Featured__Item-Title">
              <h1>Arusha </h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="Featured__Item">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60"
              alt=""
              className="Featured__Item-img"
            />
            <div className="Featured__Item-Title">
              <h1>Dodoma</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>

          <div className="Featured__Item">
            <img
              src="https://images.unsplash.com/photo-1518593929011-2b5ef6be57c7?auto=format&fit=crop&w=400&h=250&q=60"
              alt=""
              className="Featured__Item-img"
            />
            <div className="Featured__Item-Title">
              <h1>Mwanza</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="Featured__Item">
            <img
              src="https://images.unsplash.com/photo-1476209446441-5ad72f223207?auto=format&fit=crop&w=400&h=250&q=60"
              alt=""
              className="Featured__Item-img"
            />
            <div className="Featured__Item-Title">
              <h1>Dar-es-salaam</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
