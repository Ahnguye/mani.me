import React, { Component } from 'react';
import FooterComponent from './footer_component.js';

export default class SplashPage extends Component {
  render() {
    return (
      <div className="row">

        <div className="banner-wrapper">

          <div className="belinda-heading-wrapper">
            <div className="belinda-heading font-white">
              <div className="belinda-heading-text">Welcome</div>
              <div className="avenir banner-subheading">To your tailor-fitted, hassle-free manicure</div>
            </div>
          </div>

        </div>


        <div className="icons-title avenir"><h1 className="off-grey">Designer nails made for you, delivered to your door</h1></div>
        <div className="icons">
          <div className="row justify-content-center icon-wrapper">
            <div className="col-12 col-md-3 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/manicure.png" />
              <div className="icon-line"></div>
              <div className="icon-text">
                Tailor-fitted, ready-to-wear nails made with cutting edge 3D printing and scanning technologies.
              </div>
            </div>
            <div className="col-12 col-md-3 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/safety.png" />
              <div className="icon-line"></div>
              <div className="icon-text">
                Nail-safe, easy-to-remove adhesives allow you to switch your style as often as you'd like.
              </div>

            </div>
            <div className="col-12 col-md-3 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/view.png" />
              <div className="icon-line"></div>
              <div className="icon-text">
                Ever growing design gallery featuring acclaimed international artists to inspire your style.
              </div>

            </div>
            <div className="col-12 col-md-3 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/nail.png" />
              <div className="icon-line"></div>
              <div className="icon-text">
                Each set is delivered to your door so you can sit back, relax, and be perfectly polished.</div>
              </div>

          </div>
        </div>
        <div className="icons-title-2 avenir"><h1 className="off-grey">Three ways to be <span className="italic">perfectly polished</span></h1></div>

        <div className="plans-items-wrapper">
          <ul className="plans-items-ul">
            <li className="plans-items-li">
              <img className="plans-item-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/shutterstock_514409545.jpg" />
              <div className="plans-item-content">
                <div className="plans-item-content-header text-align-center avenir">TREAT ME</div>
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
                <div className="plans-item-content-header heading text-align-center avenir">PAMPER ME</div>
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
                <div className="plans-item-content-header text-align-center avenir">DAZZLE ME</div>
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


        <div className="splash-image-carousel">
            <img className="splash-image-carousel-img" src="https://d1raprm0ezfai1.cloudfront.net/App+images/Nail+Designs+To+Upload/Color+dots.png" />
            <img className="splash-image-carousel-img" src="https://d1raprm0ezfai1.cloudfront.net/App+images/Nail+Designs+To+Upload/Screen+Shot+2018-04-22+at+10.48.14+AM.png" />
            <img className="splash-image-carousel-img" src="https://d1raprm0ezfai1.cloudfront.net/App+images/Nail+Designs+To+Upload/Screen+Shot+2018-04-22+at+10.57.38+AM.png" />
            <img className="splash-image-carousel-img" src="https://d1raprm0ezfai1.cloudfront.net/App+images/Nail+Designs+To+Upload/Screen+Shot+2018-04-22+at+10.57.47+AM.png" />
            <img className="splash-image-carousel-img" src="https://d1raprm0ezfai1.cloudfront.net/App+images/Nail+Designs+To+Upload/Screen+Shot+2018-04-22+at+10.58.12+AM.png" />
            <img className="splash-image-carousel-img" src="https://d1raprm0ezfai1.cloudfront.net/App+images/Nail+Designs+To+Upload/Screen+Shot+2018-04-22+at+10.58.16+AM.png" />
            <img className="splash-image-carousel-img" src="https://d1raprm0ezfai1.cloudfront.net/App+images/Nail+Designs+To+Upload/Screen+Shot+2018-04-22+at+10.58.21+AM.png" />
            <img className="splash-image-carousel-img" src="https://d1raprm0ezfai1.cloudfront.net/App+images/Nail+Designs+To+Upload/Screen+Shot+2018-04-22+at+10.58.33+AM.png" />

        </div>

        <div class="custom-container-2">
          <div class="custom-mission">
          <div className="grid-splash-page-item-content-line-white"></div>
          <h1 className="belinda">Our Mission</h1>
          <br/>We want to empower women, everywhere. By creating personalized, hassle-free manicures, Mani.Me supports #ladybosses and #supermoms to spend their time on the things that matter (not rushing to salons to stay polished). Nail artists receive compensation for each purchase of their design, so with every manicure, we are raising each other up.</div>
        </div>





        <div className="splash-grid-button-wrapper">
          <div className="grid-splash-page-item bg-pink">
            <div className="grid-splash-page-item-content">
              <div className="grid-splash-page-item-content-line"></div>
              <h4 className="avenir">GALLERY</h4>
              <br/>
              <div className="grid-splash-page-item-content-button">VISIT NOW ></div>

            </div>
          </div>
          <div className="grid-splash-page-item">
            <div className="grid-splash-page-item-content">
              <img className="grid-splash-page-item-content-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/gridimages/592407316.png" />
            </div>
          </div>
          <div className="grid-splash-page-item bg-white">
            <div className="grid-splash-page-item-content">
              <div className="grid-splash-page-item-content-line"></div>
              <h4 className="avenir">MEDIA & PRESS</h4>
              <br/>
              <div className="grid-splash-page-item-content-button">READ MORE ></div>
            </div>
          </div>
          <div className="grid-splash-page-item">
            <div className="grid-splash-page-item-content">
              <img className="grid-splash-page-item-content-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/gridimages/Black.png" />
            </div>
          </div>
          <div className="grid-splash-page-item">
            <div className="grid-splash-page-item-content">
              <img className="grid-splash-page-item-content-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/gridimages/Macaroon.png" />
            </div>
          </div>
          <div className="grid-splash-page-item bg-black">
            <div className="grid-splash-page-item-content font-white">
              <div className="grid-splash-page-item-content-line-white"></div>
              <h4 className="avenir">SHOP</h4>
              <br/>
              <div className="grid-splash-page-item-content-button">BUY NOW ></div>
            </div>
          </div>
          <div className="grid-splash-page-item">
            <div className="grid-splash-page-item-content">
              <img className="grid-splash-page-item-content-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/gridimages/shutterstock_580659442.jpg" />
            </div>
          </div>
          <div className="grid-splash-page-item bg-pink">
            <div className="grid-splash-page-item-content">
              <div className="grid-splash-page-item-content-line"></div>
              <h4 className="avenir">TECHNOLOGY</h4>
              <br/>
              <div className="grid-splash-page-item-content-button">LEARN MORE ></div>
            </div>
          </div>
        </div>

        <div className="testimonials-wrapper-block">
        <div className="row justify-content-center testimonials-wrapper">
          <div className="col-12">
            <div className="testimonials-heading belinda">
              <h1>What others are saying</h1>
            </div>
          </div>
          <div className="col-12 col-md-4 text-align-center avenir">
            <span className="big-quotes avenir">“</span>
            <br/>I can't believe you can print my nails exactly. It's not just your drug store press on nail, it actually looks like your own nails! Just amazing.
            <br/><br/><span className="bold">Maria</span>, Full-time Mom
          </div>
          <div className="col-12 col-md-4 text-align-center avenir">
            <span className="big-quotes avenir">“</span>
            <br/>It also feels great to know I'm supporting other female artists while getting my polish done in literally minutes without leaving my house!
            <br/><br/><span className="bold">Katy</span>, Art Teacher
          </div>
          <div className="col-12 col-md-4 text-align-center">
            <span className="big-quotes avenir">“</span>
            <br/>I travel for work and never know where to get my nails done. Mani.Me gives me peace of mind & makes me feel like I can take on anything!
            <br/><br/><span className="bold">Joy</span>, Consultant
          </div>
        </div>
        </div>

        <div className="custom-container-3">
          <div className="custom-mission">
          <div className="grid-splash-page-item-content-line-white"></div>
          <h2 className="belinda">Get in Touch</h2>
          <div>
            Still have questions? Let us know how we can help.
          </div>
          <input className="contact-input-form" placeholder="Name *"></input>
          <input className="contact-input-form" placeholder="Email *"></input>
          <input className="contact-input-form" placeholder="Phone"></input>
          <input className="contact-input-form" placeholder="Message"></input>
          <br/>
          <button className="contact-input-form-button">Send</button>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
