import React, { Component } from 'react';

export default class SplashPage extends Component {
  render() {
    return (
      <div className="row">
        <img className="banner" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/_shutterstock_6583532773.jpg" />
        <div className="icons-title">Welcome</div>
        <div className="icons-title">Designer nails made for you, delivered to your door</div>
        <div className="icons">
          <div className="row justify-content-center">
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/manicure.png" />
              <div className="icon-text">
                Tailor-fitted, ready-to-wear nails made with cutting edge 3D printing and scanning technologies.
              </div>
            </div>
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/safety.png" />
              <div className="icon-text">
                Nail-safe, easy-to-remove adhesives allow you to switch your style as often as you'd like.
              </div>

            </div>
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/view.png" />
              <div className="icon-text">
                Ever growing design gallery featuring acclaimed international artists to inspire your style.
              </div>

            </div>
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/nail.png" />
              <div className="icon-text">
                Each set is delivered to your door so you can sit back, relax, and be perfectly polished.</div>
              </div>

          </div>
        </div>
        <div className="icons-title">Three ways to be perfectly polished</div>

        <div className="plans-items-wrapper">
          <ul className="plans-items-ul">
            <li className="plans-items-li">
              <img className="plans-item-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/shutterstock_514409545.jpg" />
              <div className="plans-item-content">
                <div className="plans-item-content-header">TREAT ME</div>
                <div className="plans-item-content-body">
                  <ul className="show-ul">
                    <li>$30/ set</li>
                    <li>Tailor-fitted, ready-to-wear nail sets for your special occasion</li>
                    <li>2 day delivery</li>
                  </ul>
                </div>
                <div className="plans-item-content-button">Learn More</div>
              </div>
            </li>
            <li className="plans-items-li">
              <img className="plans-item-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/brigitte-tohm-388989.jpg" />
              <div className="plans-item-content">
                <div className="plans-item-content-header">PAMPER ME</div>
                <div className="plans-item-content-body">
                  <ul className="show-ul">
                    <li>$50/ month</li>
                    <li>Two sets of designer nails/ per month with customization options</li>
                    <li>Unlimited replacement for broken nails</li>
                    <li>2 day delivery</li>
                  </ul>

                </div>
                <div className="plans-item-content-button">Learn More</div>
              </div>
            </li>
            <li className="plans-items-li">
              <img className="plans-item-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/_shutterstock_735672685.jpg" />
              <div className="plans-item-content">
                <div className="plans-item-content-header">DAZZLE ME</div>
                <div className="plans-item-content-body">
                  <ul className="show-ul">
                    <li>$70/ month</li>
                    <li>Three sets of designer nails/ per month with customization options</li>
                    <li>Unlimited free replacement for broken nails</li>
                    <li>Next day delivery</li>
                  </ul>

                </div>
                <div className="plans-item-content-button">Learn More</div>
              </div>
            </li>
          </ul>
        </div>

        <div class="custom-container-2">
          <div class="custom-mission">
          <h2>Our Mission</h2>We want to empower women, everywhere. By creating personalized, hassle-free manicures, Mani.Me supports #ladybosses and #supermoms to spend their time on the things that matter (not rushing to salons to stay polished). Nail artists receive compensation for each purchase of their design, so with every manicure, we are raising each other up.</div>
        </div>





        <div className="row-eq-height">
          <div className="col-6 col-sm-3 grid-splash-page-item">
          </div>
          <div className="col-6 col-sm-3 grid-splash-page-item">

          </div>
          <div className="col-6 col-sm-3 grid-splash-page-item">

          </div>
          <div className="col-6 col-sm-3 grid-splash-page-item">

          </div>
        </div>


      </div>
    );
  }
}
