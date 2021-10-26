import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

function Header() {
  return (
    <div className="container">
      <Link to="/">
        <h1>messages</h1>
      </Link>
    </div>
  );
}

export default Header;
