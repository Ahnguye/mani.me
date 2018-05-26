import React, { Component } from 'react';
import FooterComponent from './footer_component.js';
//import '../../style/about.css';

class AboutComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="row about-profile-height">
        <div className="col-12 col-md-3 no-margin no-overflow">
          <div className="about-profile-img-container">
            <img className="about-profile-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/26239593_1256384884462568_199943898728075355_n.jpg" />
          </div>

        </div>
        <div className="col-12 col-md-3 about-profile-img-text-container text-align-center bg-teal">
          <span className="about-profile-title"><span className="bold">OUR</span></span>
          <br/>
          <span className="about-profile-title">TEAM</span>
          <br/><span className="big-backslash belinda">/</span>
          <br/><div className="about-profile-description">Our team is excited to solve this problem for ourselves and the awesome women in our lives. We hail from Taiwan, Korea, and Spain. Our strength lies in our team's experiences as strategy consultants, nail technicians, 3D printing manufacturing analysts, and entrepreneurs.</div>
        </div>
        <div className="col-12 col-md-3 no-margin no-overflow">
          <div className="about-profile-img-container">
            <img className="about-profile-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/26239593_1256384884462568_199943898728075355_n.jpg" />
          </div>
        </div>
        <div className="col-12 col-md-3 no-margin no-overflow">
          <div className="about-profile-img-container">
            <img className="about-profile-img" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/26239593_1256384884462568_199943898728075355_n.jpg" />
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default AboutComponent;
