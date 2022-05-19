import React from "react";
import { Link } from "react-router-dom"

const HikeTile = (props) => {
  return (
    <div>
      <li>
      <Link to={`/my-hikes/${props.id}`}> {props.name} || {props.location} </Link>
      </li>
    </div>
  );
};

export default HikeTile;
