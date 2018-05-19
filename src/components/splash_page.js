import React, { Component } from 'react';


export default class SplashPage extends Component {
  render() {
    return (
      <div className="row">
        <img className="banner" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/_shutterstock_6583532773.jpg" />
        <div className="icons-title">Designer nails made for you, delivered to your door</div>
        <div className="icons">
          <div className="row justify-content-center">
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/manicure.png" />
              Tailor-fitted, ready-to-wear nails made with cutting edge 3D printing and scanning technologies.
            </div>
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/safety.png" />
              Nail-safe, easy-to-remove adhesives allow you to switch your style as often as you'd like.
            </div>
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/view.png" />
              Ever growing design gallery featuring acclaimed international artists to inspire your style.
            </div>
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/nail.png" />
              Each set is delivered to your door so you can sit back, relax, and be perfectly polished.</div>
          </div>
        </div>
        <div className="icons-title">Three ways to be perfectly polished</div>

        <div className="row icons stagger-grid-container">
          <div className="col-12 col-md-4 icon-container-2">
            <img className="stagger-grid-image" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/shutterstock_514409545.jpg" />
            <div className="white-box">
              <span className="stagger-grid-title"><h4>TREAT ME</h4></span><br></br>
              $30/ set
              Tailor-fitted, ready-to-wear nail sets for your special occasion
              2 day delivery
            </div>
          </div>
          <div className="col-12 col-md-4 icon-container-2">
            <img className="stagger-grid-image" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/brigitte-tohm-388989.jpg" />
            <div className="white-box">
              <span className="stagger-grid-title"><h4>TREAT ME</h4></span><br></br>
              $30/ set
              Tailor-fitted, ready-to-wear nail sets for your special occasion
              2 day delivery
            </div>
          </div>
          <div className="col-12 col-md-4 icon-container-2">
            <img className="stagger-grid-image" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/_shutterstock_735672685.jpg" />
            <div className="white-box">
              <span className="stagger-grid-title"><h4>TREAT ME</h4></span><br></br>
              $30/ set
              Tailor-fitted, ready-to-wear nail sets for your special occasion
              2 day delivery
            </div>
          </div>
        </div>


      </div>
    );
  }
}
