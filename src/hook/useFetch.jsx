import { useEffect } from "react";
import { useState } from "react";

const useFetch = (key, fetchFn) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetchFn();
      setData(res);
      localStorage.setItem(key, JSON.stringify(res));
    };
    if (localStorage.getItem(key)) {
      setData(JSON.parse(localStorage.getItem(key)));
    } else {
      fetchApi();
    }
  }, [key]);
  return data;
};

export default useFetch;
