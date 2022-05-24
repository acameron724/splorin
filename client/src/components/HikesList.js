import React, { useState, useEffect } from "react";
// import AddHikeForm from "./AddHikeForm";

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

  const addNewHike = (hike) => {
    setHikes([...hikes, hike]);
  };

  useEffect(() => {
    getHikes();
  }, []);

  // const hikeForm = (
  //   <AddHikeForm addNewHike={addNewHike} />
  // )

  return (
    <div>
      <h1>This will be the list of all hikes in the DB</h1>
    </div>
  );
};

export default HikesList;
