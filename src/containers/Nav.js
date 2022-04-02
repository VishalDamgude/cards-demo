import logo from '../logo.svg';
import React from 'react'

function Nav () {
    return(
      <div className="nav">
        <img className="logo" src={logo} alt="applogo"/>
        <h2> Flash Cards App</h2>
      </div>
    )
}

export default Nav;