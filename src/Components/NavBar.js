import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Style.css";
import "../Styles/Queries.css";
// import { IonIcon } from '@ionic/react';
// import { logoIonic } from 'ionicons/icons';

function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleNavClick = (item) => {
    setSelectedNav(item);
  };

  const NavItems = [`HOME`, `DESTINATION`, `CREW`, `TECHNOLOGY`];

  useEffect(() => {
    const path = location.pathname.toLowerCase().replace("/", "");
    setSelectedNav(path || "home"); 
  }, [location]);
  const [selectedNav, setSelectedNav] = useState(location.pathname.toLowerCase().replace("/", "") || "home");

  return (
    <header className={`header ${isNavbarOpen ? "nav-open" : ""}`}>
      <a href="/">
        <img className="logo" src="./Assets/shared/logo.svg" />
      </a>
      <div className="line"></div>
      <nav className="navbox">
        <ul className="main-nav-list">
          {NavItems.map((item, index) => (
            <li key={item}>
              <Link
                className={`main-nav-link ${
                  selectedNav === item.toLowerCase()? "active-nav" : ""
                }`}
                to={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                onClick={() => handleNavClick(item)}
              >
                <strong>{`0${index}`}</strong> {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={`btn-mobile-nav ${isNavbarOpen ? "close" : "open"}`}
        onClick={toggleNavbar}
      >
        {/* <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
       
         */}
        {isNavbarOpen ? (
         <ion-icon className="iconm" size="large" name="close-outline"></ion-icon>
        ) : (
           <ion-icon className="iconm" size="large" name="menu-outline"></ion-icon>
        )}
      </button>
    </header>
  );
}

export default NavBar;
