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
      src: "https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1465147264724-326b45c3c59b?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1485067801970-70573e3f77d0?auto=format&fit=crop&w=400&h=250&q=80",
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
                  <h3>
                    {`${data[index]?.type}s`}
                    {/* {`${data[index].type}s`}*/}
                  </h3>
                  <p>
                    {data[index]?.count} {`${data[index]?.type}s`}
                    {/* {data[index].count} {`${data[index].type}s`}*/}
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
