import React from "react";
import Navigation from "../Navigation";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <span className="header--title">Johannah Lear</span>
      <Navigation />
    </div>
  );
};

export default Header;