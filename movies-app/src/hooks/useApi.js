import { useState, useEffect } from "react";

const baseUrl = "https://movies-app-siit.herokuapp.com";

export default function useApi(endpoint, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${baseUrl}/${endpoint}`, options);

        if (!response.ok) {
          throw new Error(`${response.status}/${response.statusText}`);
        }

        const data = await response.json();
        setError(null);
        setData(data);
      } catch (e) {
        setError(
          `There was an error with the API: "${e.message}" the endpoint was: "${endpoint}"`
        );
      }
    }

    getData();
  }, [endpoint, options]);

  return [data, error];
}
