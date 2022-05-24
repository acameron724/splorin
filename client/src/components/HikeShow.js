import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import error list

const HikeShow = (props) => {
  const { id } = useParams();
  const [hike, setHike] = useState({
    name: "",
    location: "",
    difficulty: null,
    routeType: "",
    description: "",
    length: null,
    elevationChange: null,
    status: false,
    image: {}
  });

  const getHike = async () => {
    try {
      const response = await fetch(`/api/v1/hikes/${id}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const hikeData = await response.json();
      setHike(hikeData.hike);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getHike();
  }, []);

  const completionStatus = hike.status ? (
    "Yes"
  ) : "No"

  return (
    <div>
      {hike.name}
      <br />
      {hike.description}
      <br />
      Hike Completed? {completionStatus}
    </div>
  );
};

export default HikeShow;
