import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Style.css";
import "../Styles/Queries.css";
// import { IonIcon } from '@ionic/react';
// import { logoIonic } from 'ionicons/icons';

function NavBar() {
  const [selectedNav, setSelectedNav] = useState(null); 
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen); 
  };

  const handleNavClick = (item) => {
    setSelectedNav(item);
  };

  const NavItems = [`HOME`, `DESTINATION`, `CREW`, `TECHNOLOGY`];

  return (
    <header className={`header ${isNavbarOpen ? "nav-open" : ""}`}>
      <a href="/">
        <img className="logo" src="./Assets/shared/logo.svg" />
      </a>
      <div className="line"></div>
      <nav className="navbox">
        <ul className="main-nav-list">
          {NavItems.map((item) => (
            <li key={item}>
              <Link
                className={`main-nav-link ${
                  selectedNav === item ? "active-nav" : ""
                }`}
                to={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                onClick={() => handleNavClick(item)}
              >
                <strong>00</strong> {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={`btn-mobile-nav ${isNavbarOpen ? "close" : "open"}`}
        onClick={toggleNavbar}>
        {/* <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon> */}
       {isNavbarOpen ? (
          <div className="close"></div>
        ) : (
          <div className="menu"></div>
        )}
      </button>
    </header>
  );
}

export default NavBar;
