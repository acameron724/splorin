import React from "react";
import { Link } from "react-router-dom";

const HikeTile = (props) => {
  return (
    <ul className="holy-grail-middle hike-list">
      <li className="hike-list">
        <Link to={`/hikes/${props.id}`}>
          {" "}
          {props.name}
        </Link>
      </li>
        
    </ul>
  );
};

export default HikeTile;
