import React from "react";
import "./PropertyList.css";
import useFetch from "../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    "https://guesthomesapi.azurewebsites.net/api/hotels/countByType"
  );
  console.log(data);
  const ImageArray = [
    {
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1640613111073-94a7ed36eb65?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?auto=format&fit=crop&w=400&h=250&q=80",
    },
  ];
  return (
    <div className="pList ">
      {loading ? (
        "Loading.."
      ) : (
        <>
          {data &&
            ImageArray.map((image, index) => (
              <div className="pList__Item" key={index}>
                <div className="pList__Item-imgContainer">
                  <img src={image.src} alt="" className="pList__Item-Img" />
                </div>
                <div className="pList__Item-Titles">
                  <h3>{`${data[index]?.type}s`}</h3>
                  <p>
                    {data[index]?.count} | {`${data[index]?.type}s`}
                  </p>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
export default PropertyList;
