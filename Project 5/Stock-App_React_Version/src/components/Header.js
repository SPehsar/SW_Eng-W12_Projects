import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul className="links">
        
        <Link to="/">
        <li><h1>iStocks</h1></li>
        </Link>

        <Link to="/stocks">
          <li>Stocks</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

      </ul>
    </nav>
  );
}
