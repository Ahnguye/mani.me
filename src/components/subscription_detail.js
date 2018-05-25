import React, { Component } from 'react';

class SubscriptionDetailComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="">
        <div className="subscription-banner-wrapper">
          <img className="subscription-banner-picture" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/subscriptions/subscription1.jpg" />
          <div className="subscription-banner-title font-white avenir-book">TREAT.ME</div>
        </div>
        <div className="icons-title avenir"><h1 className="">How It Works</h1></div>
        <div className="subscription-gold-line"></div>
        <div className="icons">
          <div className="row justify-content-center">
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/view.png" />
              <div className="icon-line"></div>
              <div className="icon-text">
                Pick a design you love from our artist gallery for your special treat
              </div>
            </div>
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/safety.png" />
              <div className="icon-line"></div>
              <div className="icon-text">
                Customize the length, shape, and colors to fit your style
              </div>
            </div>
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/manicure.png" />
              <div className="icon-line"></div>
              <div className="icon-text">
                Send us 4 photos of your hands so we can print your perfect manicure
              </div>
            </div>
            <div className="col-12 col-md-2 icon-container">
              <img className="icon" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/nail.png" />
              <div className="icon-line"></div>
              <div className="icon-text">
                Receive your perfectly fitted manicures and refresh your nails in minutes</div>
              </div>
            <div className="col-12 text-align-center"><button className="detail-add-cart subscription-button">Try Pamper.Me</button></div>

            <div className="col-10 bg-tan video-panel">
              <div className="video-caption">
                <div className="video-caption-text avenir-book">
                  INSPIRE ME
                  <br/><span className="video-caption-subheading">Check out designs from nail artists around the world to get started</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscriptionDetailComponent;
