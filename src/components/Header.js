import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

function Header() {
  return (
    <div className="header-container blobBody">
      <div className="blob">
        <div className="circle"></div>
      </div>
      <div className="container-title">
        <Link to="/">
          <h1>messages app</h1>
        </Link>
        <h3>by jennifer bunner</h3>
      </div>
    </div>
  );
}

export default Header;
