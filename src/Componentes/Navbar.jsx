import React from 'react';
import '../Hojas-de-estilo/Navbar.css';
import logo from '../Images/logo-kaijuu8.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo__container">
        <img
          src={logo}
          className="logo"
          alt="Logo_Kaijuu-No-8"
        />
      </div>
      <div className="menu__container">
        <ul className="menu--list">
          <li className="menu--item"><a className="menu--link" href="#manga">Manga</a></li>
          <li className="menu--item"><a className="menu--link" href="#anime">Anime</a></li>
          <li className="menu--item"><a className="menu--link" href="#mangaka">Mangaka</a></li>
        </ul>
      </div>
    </div>
  )
}
