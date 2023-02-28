import React from "react";
import basketball from "../assets/basketballlogo.svg"

import './Header.css'

const Header = () => {
  return(
    <div className="Header">
      <img src={basketball} className="logo"/>
      <h1 className="headerText">BASKETBALL TEAMS</h1>
    </div>
  )
}

export default Header;