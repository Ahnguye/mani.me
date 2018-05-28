import React, { Component } from 'react';
import FooterComponent from './footer_component.js';
//import '../../style/about.css';

class AboutComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row about-us-profile-container">
          <div className="col-6 col-md-3 about-us-profile-section-container ">
            <div className="about-us-profile-section-img-container about-profile-img-1">
            </div>
          </div>
          <div className="col-6 col-md-3 about-us-profile-section-container">
            <div className="about-us-profile-section-text">
              <span className="about-profile-title"><span className="bold">OUR</span><br />TEAM<br/></span>
              <span className="big-backslash belinda">/</span>
              <div className="about-profile-description">Our team is excited to solve this problem for ourselves and the awesome women in our lives. We hail from Taiwan, Korea, and Spain. Our strength lies in our team's experiences as strategy consultants, nail technicians, 3D printing manufacturing analysts, and entrepreneurs.</div>
            </div>


          </div>
          <div className="col-6 col-md-3 about-us-profile-section-container">
            <div className="about-us-profile-section-img-container about-profile-img-2">
            </div>
          </div>
          <div className="col-6 col-md-3 about-us-profile-section-container">
            <div className="about-us-profile-section-img-container about-profile-img-3">
            </div>

          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default AboutComponent;
/*
<div className="row about-profile-height no-overflow">
  <div className="col-12 col-md-3 no-margin max-height">
    <div className="about-profile-img-container">

    </div>

  </div>
  <div className="col-12 col-md-3 about-profile-img-text-container text-align-center bg-teal max-height">
    <span className="about-profile-title"><span className="bold">OUR</span></span>
    <br/>
    <span className="about-profile-title">TEAM</span>
    <br/><span className="big-backslash belinda">/</span>
    <br/><div className="about-profile-description">Our team is excited to solve this problem for ourselves and the awesome women in our lives. We hail from Taiwan, Korea, and Spain. Our strength lies in our team's experiences as strategy consultants, nail technicians, 3D printing manufacturing analysts, and entrepreneurs.</div>
  </div>
  <div className="col-12 col-md-3 no-margin no-overflow max-height">
    <div className="about-profile-img-container">
      <div className="about-profile-img-container about-profile-img-2" />
    </div>
  </div>
  <div className="col-12 col-md-3 no-margin no-overflow max-height">
    <div className="about-profile-img-container">
      <div className="about-profile-img-container about-profile-img-3" />
    </div>
  </div>
</div>
*/
