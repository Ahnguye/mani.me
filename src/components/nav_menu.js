import React, { Component } from 'react';


export default class NavMenu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-middle">
            <a className="logo-icon-container" href="/#">
              <img className="logo" src="https://d1raprm0ezfai1.cloudfront.net/Logo/Manime+logo.png" />
            </a>
            <div className="nav-menu-mobile-menu-items">
              <img className="menu-icon" src="https://d1raprm0ezfai1.cloudfront.net/websiteicons/baseline-menu-24px.svg" />
            </div>
            <div className="nav-menu-items-wrapper">
              <div className="nav-menu-menu-items">
                <div className="dropdown">
                  <a href="/#">
                    <button className="dropbtn">HOME</button>
                  </a>
                </div>
                <div className="dropdown">
                  <button className="dropbtn">ABOUT US</button>
                  <div className="dropdown-content">
                    <a href="/about">OUR TEAM</a>
                    <a href="/tech">OUR TECHNOLOGY</a>
                    <a href="/press">IN THE PRESS</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="dropbtn">HOW IT WORKS</button>
                  <div className="dropdown-content">
                    <a href="/subscription">TREAT.ME</a>
                    <a href="/subscription">PAMPER.ME</a>
                    <a href="/subscription">DAZZLE.ME</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="dropbtn">SHOP</button>
                  <div className="dropdown-content">
                    <a href="/shop">ARTIST GALLERY</a>
                    <a href="/shop">USER CREATIONS</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </nav>
      </div>
    );
  }
}
