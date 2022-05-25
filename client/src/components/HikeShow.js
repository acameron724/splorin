import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HikeShow = (props) => {
  const { id } = useParams();
  const [hike, setHike] = useState({
    name: "",
    location: "",
    difficulty: "",
    routeType: "",
    description: "",
    length: "",
    elevationChange: "",
    image: {},
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

  const handleCompletedChange = (event) => {
    // if completed changes to 'true'
    // then change completed value to 'true' for currentUser
  }

  const handleWishListChange = (event) => {
    // if wishList changes to 'true'
    // then change wishList value to 'true' for currentUser
  }

  return (
    <div>
      <h1>{hike.name}</h1>
      <h3>{hike.location}</h3>
      <p>{hike.description}</p>
      <p>Hike Difficulty: {hike.difficulty}</p>
      <p>Route Type: {hike.routeType}</p>
      <p>Length: {hike.length}</p>
      <p>Elevation Change: {hike.elevationChange}</p>
      <br />
      <img src={hike.image} />
      <div>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          // value={hike.completed}
          // onChange={handleCompletedChange}
        />
        <label htmlFor="status">I have already completed this hike!</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="wishList"
          id="wishList"
          // value={hike.wishList}
          // onChange={handleWishListChange}
        />
        <label htmlFor="status">Add this hike to my Wish List!</label>
      </div>
    </div>
  );
};

export default HikeShow;
