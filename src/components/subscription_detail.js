import React, { Component } from 'react';
import FooterComponent from './footer_component.js';

class SubscriptionDetailComponent extends Component {
  constructor(props){
    super(props);

    console.log(this.props.subscriptionType);

    if(this.props.subscriptionType == 1) {
      this.state = {
        banner_img: { backgroundImage: 'url(https://d1raprm0ezfai1.cloudfront.net/Website+images+used/subscriptions/subscription1.jpg)'},
        heading: "TREAT.ME",
        icon1_url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/view.png",
        icon1_body: "Pick a design you love from our artist gallery for your special treat",
        icon2_url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/safety.png",
        icon2_body: "Customize the length, shape, and colors to fit your style",
        icon3_url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/manicure.png",
        icon3_body: "Send us 4 photos of your hands so we can print your perfect manicure",
        icon4_url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/nail.png",
        icon_class: 'icon',
        icon4_body: "Receive your perfectly fitted manicures and refresh your nails in minutes",
        button_text: "Try Treat.Me"
      };
    } else if (this.props.subscriptionType == 2) {
      this.state = {
        banner_img: { backgroundImage: 'url(https://d1raprm0ezfai1.cloudfront.net/Website+images+used/subscriptions/subscription2.jpg)'},
        heading: "PAMPER.ME",
        icon1_url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/view.png",
        icon1_body: "Browse and save designs you love from nail artists around the world",
        icon2_url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/safety.png",
        icon2_body: "Choose the nails you want for each box the week you'll receive it",
        icon3_url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/nail.png",
        icon3_body: "Receive 2 sets of nails each month to refresh your nails at home",
        icon4_url: "https://s3-us-west-2.amazonaws.com/mani.me/Website+images+used/Photo+Fillers/baseline-autorenew-24px.svg",
        icon_class: 'svg-icon',
        icon4_body: "Select your next set to stay perfectly polished",
        button_text: "Try Pamper.Me"
      };
    } else {
      this.state = {
        banner_img: { backgroundImage: 'url(https://d1raprm0ezfai1.cloudfront.net/Website+images+used/subscriptions/subscriptions3.jpg)'},
        heading: "DAZZLE.ME",
        icon1_url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/view.png",
        icon1_body: "Browse and save designs you love from artists around the world",
        icon2_url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/safety.png",
        icon2_body: "Choose the nails you want for each box the week you'll receive it",
        icon3_url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/Photo+Fillers/nail.png",
        icon3_body: "Receive 3 sets of nails each month to refresh your nails at home",
        icon4_url: "https://s3-us-west-2.amazonaws.com/mani.me/Website+images+used/Photo+Fillers/baseline-autorenew-24px.svg",
        icon_class: 'svg-icon',
        icon4_body: "Select your next set to stay perfectly polished",
        button_text: "Try Dazzle.Me"
      };
    }

  }


  render() {
    return (
      <div className="">
        <div className="subscription-banner-wrapper" style={this.state.banner_img}>
          <img className="subscription-banner-picture" />
          <div className="subscription-banner-title font-white avenir-book">{this.state.heading}</div>
        </div>
        <div className="icons-title avenir"><h1 className="">How It Works</h1></div>
        <div className="subscription-gold-line"></div>
        <div className="icons no-margin-vertical">
          <div className="row justify-content-center subscription-icon-container">
            <div className="col-12 col-md-3 icon-container">
              <img className="icon" src={this.state.icon1_url} />
              <div className="icon-line"></div>
              <div className="subscription-icon-text">
                {this.state.icon1_body}
              </div>
            </div>
            <div className="col-12 col-md-3 icon-container">
              <img className="icon" src={this.state.icon2_url} />
              <div className="icon-line"></div>
              <div className="subscription-icon-text">
                {this.state.icon2_body}
              </div>
            </div>
            <div className="col-12 col-md-3 icon-container">
              <img className="icon" src={this.state.icon3_url} />
              <div className="icon-line"></div>
              <div className="subscription-icon-text">
                {this.state.icon3_body}
              </div>
            </div>
            <div className="col-12 col-md-3 icon-container">
              <img className={this.state.icon_class} src={this.state.icon4_url} />
              <div className="icon-line"></div>
              <div className="subscription-icon-text">
                {this.state.icon4_body}
              </div>
            </div>
            <div className="col-12 text-align-center">
              <a href="/shop">
                <button className="detail-add-cart subscription-button">{this.state.button_text}</button>
              </a>
            </div>

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
        <FooterComponent />
      </div>
    );
  }
}

export default SubscriptionDetailComponent;
