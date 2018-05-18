import React, { Component } from 'react';


export default class NavMenu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-middle">
            <a href="/#">
              <img className="logo" src="https://d1raprm0ezfai1.cloudfront.net/Logo/Manime+logo.png" />
            </a>
            <div className="dropdown">
              <a href="/#">
                <button className="dropbtn">HOME</button>
              </a>
            </div>
            <div className="dropdown">
              <button className="dropbtn">ABOUT US</button>
              <div className="dropdown-content">
                <a href="/about">OUR TEAM</a>
                <a href="/#">OUR TECHNOLOGY</a>
                <a href="/#">IN THE PRESS</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">HOW IT WORKS</button>
              <div className="dropdown-content">
                <a href="/#">TREAT.ME</a>
                <a href="/#">PAMPER.ME</a>
                <a href="/#">DAZZLE.ME</a>
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
        </nav>
      </div>
    );
  }
}
