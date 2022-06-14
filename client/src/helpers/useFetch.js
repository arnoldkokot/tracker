import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status) throw data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [url]);

  return { data, error };
}
