import { useEffect, useState } from "react";

const useProperty = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      const url = "http://localhost:5000/api/hotels/countByType";
      try {
        setLoading(true);
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => setData(data));
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  const reFetch = async () => {
    setLoading(true);
    try {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => setData(data));
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  return { data, loading, error, reFetch };
};
export default useProperty;
