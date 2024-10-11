import React, { useEffect, useState } from "react";
import "./layout.css";
import { Link } from "react-router-dom";
import * as IMAGE from "../image";

const Header = () => {
    /* -------------------------------------------------------------------------- */
    /*                           Fixed header on scroll                           */
    /* -------------------------------------------------------------------------- */
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  /* -------------------------------------------------------------------------- */
  /*                         Responsive header function                         */
  /* -------------------------------------------------------------------------- */

  const openSidebarMenu = () => {
    console.log("sidebar open")    
  };

  return (
    <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="custom-container header-container">
        <div className="main-logo">
          <Link to="/">
            <img src={IMAGE.Logo} className="logo" />
          </Link>
        </div>
        <ul className="header-menu">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/">Products</Link>
        </li>
        <li>
            <Link to="/">Categories</Link>
        </li>
        <li>
            <Link to="/">About</Link>
        </li>
        <li>
            <Link to="/">Contact Us</Link>
        </li>
        </ul>
        <div className="menu-icon">
            <img src={IMAGE.Menuicon} alt="menu-icon" onClick={openSidebarMenu}/>
        </div>
        <div className="res-logo">
          <Link to="/">
            <img src={IMAGE.Logo} className="logo" />
          </Link>
        </div>

        <ul className="header-menu-icon">
        <li>
            <Link to="/">
            <img src={IMAGE.Search} alt="search" />
            </Link>
        </li>
        <li>
            <Link to="/">
            <img src={IMAGE.Cart} alt="search" />
            </Link>
        </li>
        <li>
            <Link to="/">
            <img src={IMAGE.Profile} alt="search" />
            </Link>
        </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;