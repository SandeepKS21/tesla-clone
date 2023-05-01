import React, { useState } from "react";

import "./header.css";

function Header() {
  // "sidebarOpen"=> variable.
  // "setSidebarOpen" => function.

  // "useState(false)" =>"sidebarOpen"  default value is false. means side var will not open in first time
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function showMenu(e) {
    // "in react we don't manipulate  DOM insted we manipulate  State"
    e.preventDefault();

    setSidebarOpen(true);
  }

  function hideMenu() {
    setSidebarOpen(false);
  }

  return (
    <>
      <header>
        <img className="logo" src="images/logo.svg" alt="logo" />

        <ul>
          <li>
            <a href="">Model S</a>
          </li>
          <li>
            <a href="">Model 3</a>
          </li>
          <li>
            <a href="">Model x</a>
          </li>
          <li>
            <a href="">Model Y</a>
          </li>
          <li>
            <a href="">Solar Roof</a>
          </li>
          <li>
            <a href="">Solar Panel</a>
          </li>
          <li>
            <a href="">Powerwall</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="">Shop</a>
          </li>

          <li>
            <a href="">Account</a>
          </li>

          <li>
            <a href="#" onClick={showMenu}>
              Menu
            </a>
          </li>
        </ul>
      </header>

      <ul className="sidebar" style={{ right: sidebarOpen ? 0 : "-250px" }}>
        <div onClick={hideMenu}>
          <img src="images/close.svg" alt="" />
        </div>
        <li>
          <a href="">Exesting Inventory</a>
        </li>

        <li>
          <a href="">Used Inventory</a>
        </li>

        <li>
          <a href="">Trade-In</a>
        </li>

        <li>
          <a href="">Demo Driver</a>
        </li>

        <li>
          <a href="">Insurance</a>
        </li>

        <li>
          <a href="">Fleet</a>
        </li>

        <li>
          <a href="">Cybertruck</a>
        </li>

        <li>
          <a href="">Rodster</a>
        </li>

        <li>
          <a href="">Semi</a>
        </li>
        <li>
          <a href="">Charging</a>
        </li>

        <li>
          <a href="">Commercial Energy</a>
        </li>

        <li>
          <a href="">Utilities</a>
        </li>

        <li>
          <a href="">Insurance</a>
        </li>
        <li>
          <a href="">Find Us</a>
        </li>

        <li>
          <a href="">Support</a>
        </li>
      </ul>
    </>
  );
}

export default Header;
