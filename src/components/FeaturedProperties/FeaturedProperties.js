import React from "react";
import "./FeaturedProperties.css";
import useFetch from "../hooks/useFetch";
const FeaturedProperties = () => {
  const { loading, data, error } = useFetch(
    "https://guesthomesapi.azurewebsites.net/api/hotels?featured=true&limit=5"
  );
  return (
    <div className="featuredProperties ">
      {loading ? (
        "Data Loading..."
      ) : (
        <>
          {data.map((featuredData) => (
            <div className="featuredProperties-Item" key={featuredData._id}>
              <img
                src={featuredData?.photos}
                alt=""
                className="featuredProperties-Item_Img"
              />
              <span className="featuredProperties__Name">
                {featuredData?.name}
              </span>
              <span className="featuredProperties__City">
                {featuredData?.city}
              </span>
              <span className="featuredProperties__Price">
                <p>Starting from</p>{" "}
                <h3>
                  <small>Tsh: </small>
                  {featuredData?.cheapestPrice}/=
                </h3>
              </span>
              {featuredData?.rating && featuredData.desc && (
                <div className="featuredProperties__Rating">
                  <div className="featuredProperties__Rating-btn">
                    <button>{featuredData?.rating}</button>
                  </div>

                  <span>{featuredData?.desc}</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default FeaturedProperties;
