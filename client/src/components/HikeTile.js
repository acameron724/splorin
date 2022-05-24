import React from "react";
import { Link } from "react-router-dom";

const HikeTile = (props) => {
  return (
      <li>
        <Link to={`/hikes/${props.id}`}>
          {" "}
          {props.name} || {props.location}{" "}
        </Link>
      </li>
  );
};

export default HikeTile;
