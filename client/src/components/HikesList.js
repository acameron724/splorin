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
    <div className="hike-list">
      <h1 className="text-center">Find Your Next Adventure</h1>
      <br/>
      <h3 className="text-center">Search for a Hike (Coming Soon!)</h3>
      <form className="holy-grail-form">
          <input
            type="text"
            name="name"
            placeholder="Search for a hike name"
            // onChange={handleInputChange}
            // value={newHike.name}
          />
          <input
            type="text"
            name="location"
            placeholder="Search for a hike location"
            // onChange={handleInputChange}
            // value={newHike.location}
          />
        </form>
      <br/>
      <h3 className="text-center">Splorin Hike Database</h3>
      {hikeTileComponents}
    </div>
  );
};

export default HikesList;
