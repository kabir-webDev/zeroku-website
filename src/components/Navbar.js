import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import "./css/utilities.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">Zeroku</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/docs">Docs</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
