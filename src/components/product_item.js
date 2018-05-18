import React, { Component } from 'react';

class ProductItem extends Component {
  constructor(props){
    super(props);
    this.state = {

    };

  }


  render() {
    return (
      <div className="shopping-item-detail-container row-eq-height">
        <div className="shopping-item-detail-left-container col-3 col-md-1">
          <img className="detail-item-grid-picture" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_12.jpg"/>
          <img className="detail-item-grid-picture" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_12.jpg"/>
          <img className="detail-item-grid-picture" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_12.jpg"/>
          <img className="detail-item-grid-picture" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_12.jpg"/>
          <img className="detail-item-grid-picture" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_12.jpg"/>
        </div>
        <div className="shopping-item-detail-middle-container col-9 col-md-5">

          <img className="detail-item-picture" src="https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_12.jpg"/>
        </div>
        <div className="shopping-item-detail-right-container col-12 col-md-4">
          <div className="detail-info">
            <h4>allison paris</h4>
            <h4 className="detail-info-title-description">Cobalt</h4>
            <p>$100 rental</p>
          </div>
          <div className="detail-form">
            <label className="input-zipcode">ZIP CODE</label>
            <br></br>
            <input></input>
            <br></br>
            <br></br>

            <select className="select-detail">
              <option label="Select"></option>
              <option label="XS"></option>
              <option label="S"></option>
              <option label="M"></option>
            </select>
            <select className="select-detail">
              <option label="Select"></option>
              <option label="Single Purchase"></option>
              <option label="Monthly Subscription"></option>
              <option label="Premium Subscription"></option>
            </select>
            <br></br>
            <br></br>


          </div>
          <div className="detail-button">
            <button className="detail-add-cart">
              ADD TO BAG
            </button>
          </div>



        </div>
      </div>

    );
  }

}

export default ProductItem;
