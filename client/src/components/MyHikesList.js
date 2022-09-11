import React, { useState, useEffect } from "react";
import HikeTile from "./HikeTile.js";

const MyHikesList = (props) => {
  const [hikes, setHikes] = useState([]);

  const getMyHikes = async () => {
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
    getMyHikes();
  }, []);

  const completedHikeTileComponents = hikes.map((hikeObject) => {
    if (hikeObject.status) {
      return <HikeTile key={hikeObject.id} {...hikeObject} />;
    }
  });

  const incompleteHikeTileComponents = hikes.map((hikeObject) => {
    if (!hikeObject.status) {
      return <HikeTile key={hikeObject.id} {...hikeObject} />;
    }
  });

  return (
    <div>
      <h1 className="text-center">My Hike Database</h1>
      <br />
      <h2>Not Hiked</h2>
      <p>{incompleteHikeTileComponents}</p>
      <br />
      <h2>Hiked</h2>
      <p>{completedHikeTileComponents}</p>
    </div>
  );
};

export default MyHikesList;
