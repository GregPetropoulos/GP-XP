import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/nav"></Link>
    </nav>
  );
}
export default Header;
