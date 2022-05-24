import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ];

  const rightAuthenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  const leftAuthenticatedListItems = [
    <li key="home">
      <Link to="/home">Home</Link>
    </li>,
    <li key="my-hikes">
      <Link to="/my-hikes">My Hikes</Link>
    </li>,
    <li key="add-a-hike">
      <Link to="/add-a-hike">Add a Hike</Link>
    </li>,
    <li key="find-a-hike">
      <Link to="/hikes">Find a Hike</Link>
    </li>,
  ];

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <h3 className="menu-text">Splorin'</h3>
          {user ? leftAuthenticatedListItems : null}
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">{user ? rightAuthenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
