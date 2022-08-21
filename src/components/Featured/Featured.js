import React from "react";
import Loader from "../Loader/Loader";
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
        <Loader />
      ) : (
        <>
          <div className="Featured__Item">
            <img
              /*src="https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60"*/
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="Featured__Item-img"
            />
            <div className="Featured__Item-Title">
              <h1>Dar-es-salaam</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
          <div className="Featured__Item">
            <img
              src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
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
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="Featured__Item-img"
            />
            <div className="Featured__Item-Title">
              <h1>Mwanza</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
