import React from 'react';
import './index.scss'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo_bar">
          <a className="fas fa-brain" id="logo"
            href="/">
          </a>
        </div>
        <div className="nav_bar">
          <li id="element">Learn</li>
          <li id="element">Build</li>
          <li id="element">Help</li>
        </div>
        <div className="login_bar">
          <div className="bag">
            <li className="fas fa-sign-in-alt">
              <p id="tooltip">Sign-In</p>
            </li>
            <li className="fas fa-user-plus">
              <p id="tooltip">Sign-Up</p>
            </li>
            <li className="fas fa-user-secret">
              <p id="tooltip">Guest</p>
            </li>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;