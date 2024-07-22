import React, { useState } from "react";
import { Link, Navigate  } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../../assets/white_logo.png';
import { Avatar } from "@mui/material";

import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const LoginClickHandler = () => {
    return <Navigate to={'/login'}/>
  };

  const LogoClickHandler = () => {
    return <Navigate to={'/'}/>
  };

  return (
    <div className="header" onClick={LogoClickHandler}>
      <img src={logo} className="header_logo" alt="logo" />

      <div className="header_center">
        <p>Places to Stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>
      <div className="header_right">
        <Link to={'/login'}><p className="host">Become a host</p></Link> 
        <LanguageIcon />
        <div className="header_dropdowns">
          <MenuIcon />
          <div className="dropdown">
            <Avatar onClick={toggleDropdown} />
            {dropdownOpen && (
              <Link to={'/login'} className="dropdown-content">
                <span onClick={LoginClickHandler}>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
