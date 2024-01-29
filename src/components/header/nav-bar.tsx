import React from "react";
import "./nav-bar.css"
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [open, setOpen] = useState(false)
 
    return (
      <nav className="nav-bar">
        <ul className="nav-bar1">
          <a href="/">
            <img className="logo-realme" src="../src/img/logo-realme.svg" alt="" />
          </a>
          <li className="spisok">Smartphone</li>
          <li className="spisok">TV</li>
          <li className="spisok">Laptop</li>
          <li className="spisok">Aksesoris</li>
          <ul className="nav-bar2">
            <ul className="nav-bar2-burg">
              <button onClick={() => setOpen(!open)} className="btnBurg">
                <img src="../src/img/burg-icon.png" alt="" />
              </button>
              <div className="burg_menu">
                <ul className={open === true ? 'burg-menu' : 'burg-menu_hidden'}>
                  <img className="search" src="../src/img/search.svg" alt="" />
                  <Link to="/Basket">
                    <img className="bascet" src="../src/img/bascet.svg" alt="" />
                  </Link>
                  <img className="profile" src="../src/img/profile.svg" alt="" />
                </ul>
              </div>
            </ul>
            <ul className="origin-nav2">
              <img className="search" src="../src/img/search.svg" alt="" />
              <Link to="/Basket">
                <img className="bascet" src="../src/img/bascet.svg" alt="" />
              </Link>
              <img className="profile" src="../src/img/profile.svg" alt="" />
            </ul>
          </ul>
        </ul>
      </nav>
    );
  }