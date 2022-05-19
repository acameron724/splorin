import React, { useState, useEffect } from "react";
import HikeTile from "./HikeTile.js";

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
    getHikes()
  }, [])

  const completedHikeTileComponents = hikes.map((hikeObject) => {
    if (hikeObject.status) {
      return <HikeTile key={hikeObject.id} {...hikeObject} />
    }
  })

  const incompleteHikeTileComponents = hikes.map((hikeObject) => {
    if (!hikeObject.status) {
      return <HikeTile key={hikeObject.id} {...hikeObject} />
    }
  })

  return (
    <div>
      <h1>Check out my hikes!!</h1>
      <br />
      <h2>Not Hiked</h2>
      <h4>{incompleteHikeTileComponents}</h4>
      <br />
      <h2>Hiked</h2>
      <h4>{completedHikeTileComponents}</h4>
    </div>
  );
};

export default HikesList;
