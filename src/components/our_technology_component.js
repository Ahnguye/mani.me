import React, { Component } from 'react';

class OurTechnologyComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row about-tech-container no-overflow">
          <div className="col-12 col-md-5 about-tech-img-text-container bg-black font-white">
            <span className="about-profile-title"><span className="bold">OUR</span></span>
            <br/>
            <span className="about-profile-title">TECHNOLOGY</span>
            <br/><span className="big-backslash belinda">/</span>
            <br/><br/><div className="">We're bringing technology to our art so you can be perfectly polished, hassle-free</div>
          </div>

          <div className="col-12 col-md-7 no-margin no-overflow">
            <div className="about-profile-img-container">
              <img className="about-technology-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/26239593_1256384884462568_199943898728075355_n.jpg" />
            </div>
          </div>
        </div>
        <div className="row text-align-center">
          <div className="col-12 col-md-3 no-margin no-overflow bg-grey about-tech-item-container">
            <div className="tech-item-title avenir font-white">PHOTOGRAMMETRY</div>
            <br /><div className="tech-item-description font-white">Our photogrammetry algorithm helps us measure your nails to get your tailor-fitted</div>
          </div>
          <div className="col-12 col-md-3 no-margin no-overflow bg-yellow about-item-tech-container">
            <div className="tech-item-title avenir font-white">3D PRINTING</div>
            <br /><div className="tech-item-description font-white">We use additive manufacturing to custom print your perfect fit nails</div>
          </div>
          <div className="col-12 col-md-3 no-margin no-overflow bg-purple about-item-tech-container">
            <div className="tech-item-title avenir font-white">SEMI-CURED GELS</div>
            <br /><div className="tech-item-description font-white">Our semi-cured technology ensures the nails are flexible and durable</div>

          </div>
          <div className="col-12 col-md-3 no-margin no-overflow bg-tan about-item-tech-container">
            <div className="tech-item-title avenir font-white">MACHINE LEARNING</div>
            <br /><div className="tech-item-description font-white">We use machine learning to learn your style so we're always showing you new trends that inspire you</div>

          </div>
        </div>
      </div>

    );
  }
}

export default OurTechnologyComponent;
