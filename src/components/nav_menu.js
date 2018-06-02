import React, { Component } from 'react';


export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  menuToggle = () => {
    let mobileMenu = document.querySelector('.nav-menu-mobile-menu');
    if (this.state.menu == false) {
      mobileMenu.style.display = 'block';
      this.setState({ menu: true });
    } else {
      mobileMenu.style.display = 'none';
      this.setState({ menu: false });
    }
  }

  render() {



    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-middle">
            <a className="logo-icon-container" href="/#">
              <img className="logo" src="https://d1raprm0ezfai1.cloudfront.net/Logo/Logo_Final-Assets-3.png" />
            </a>
            <div onClick={this.menuToggle} className="nav-menu-mobile-menu-items">
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
                  </div>
                </div>
                <div className="dropdown">
                  <button className="dropbtn">HOW IT WORKS</button>
                  <div className="dropdown-content">
                    <a href="/treatme">TREAT.ME</a>
                    <a href="/pamperme">PAMPER.ME</a>
                    <a href="/dazzleme">DAZZLE.ME</a>
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
        <div className="nav-menu-mobile-menu">
          <div className="nav-menu-mobile-menu-item">
            <a href="/about">OUR TEAM</a>
          </div>
          <div className="nav-menu-mobile-menu-item">
            <a href="/tech">OUR TECHNOLOGY</a>
          </div>
          <div className="nav-menu-mobile-menu-item">
            <a href="/treatme">TREAT.ME</a>
          </div>
          <div className="nav-menu-mobile-menu-item">
            <a href="/pamperme">PAMPER.ME</a>
          </div>
          <div className="nav-menu-mobile-menu-item">
            <a href="/dazzleme">DAZZLE.ME</a>
          </div>
          <div className="nav-menu-mobile-menu-item">
            <a href="/shop">ARTIST GALLERY</a>
          </div>
          <div className="nav-menu-mobile-menu-item">
            <a href="/shop">USER CREATIONS</a>
          </div>
        </div>
      </div>
    );
  }
}
