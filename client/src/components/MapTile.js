import React, { useState, useEffect } from "react";

const MapTile = (props) => {
  const [address, setAddress] = useState("");
  
  const getMap = async () => {
    try {
      const lat = props.lat
      const lng = props.lng

      const response = await fetch(
        `/api/v1/maps?lat=${lat}&lng=${lng}`
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const mapData = await response.json();
      const formattedAddress = mapData.results[0].formatted_address;
      setAddress(formattedAddress);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getMap();
  }, []);

  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCUUJoS5eQqLGCFVFxRQEyYcNMFOAoonTY\n&q=${address}`

  return (
    <div>
      <iframe className="map"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}>
      </iframe>
      <p>{address}</p>
    </div>
  );
};

export default MapTile;
