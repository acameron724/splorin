import React, { useState, useEffect } from "react";
import HikeTile from "./HikeTile";

const HikesList = (props) => {
  const [hikes, setHikes] = useState([]);

  const getHikes = async () => {
    try {
      const response = await fetch("/api/v1/hikes");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const parsedResponse = await response.json();
      setHikes(parsedResponse.hikes);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getHikes();
  }, []);

  const hikeTileComponents = hikes.map((hikeObject) => {
    return <HikeTile key={`hikeTile-${hikeObject.id}`} {...hikeObject} />
  })

  return (
    <div>
      <h1>Find your next hike!</h1>
      <h3>Search for a hike:</h3>
      <p> // insert hike search form here // </p>
      <h3>Splorin Hike Database:</h3>
      {hikeTileComponents}
    </div>
  );
};

export default HikesList;
