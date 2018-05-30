import React, { Component } from 'react';

const urls =
  [
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_1.png", name: "1", category: 1, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_3.png", name: "2", category: 2, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_4.png", name: "3", category: 3, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_5.png", name: "4", category: 4, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_6.png", name: "5", category: 2, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_7.png", name: "6", category: 3, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_8.png", name: "7", category: 1, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_9.png", name: "8", category: 4, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_11.png", name: "9", category: 2, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_10.jpg", name: "10", category: 3, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_12.jpg", name: "11", category: 4, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_13.jpg", name: "12", category: 1, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Gems.png", name: "13", category: 1, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Flag.png", name: "14", category: 2, price: 30.00 },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Color+dots.png", name: "15", category: 2, price: 30.00 },
  ];

class ProductItem extends Component {
  constructor(props){
    super(props);

    if(this.props.id < urls.length && this.props.id >= 0) {
      //console.log(urls[this.props.id]);
      this.state = {
        item: urls[this.props.id-1]
      };
    } else {
      this.state = {
        item: -1
      };
    }
  }

  addToCart = (event) => {
    //console.log(event);
  }

  render() {
    return (
      <div className="row shopping-item-detail-container row-eq-height">
        <div className="shopping-item-detail-left-container col-5 col-md-1">
          <img className="detail-item-grid-picture" src={this.state.item.url}/>
          <img className="detail-item-grid-picture" src={this.state.item.url}/>
          <img className="detail-item-grid-picture" src={this.state.item.url}/>
          <img className="detail-item-grid-picture" src={this.state.item.url}/>
          <img className="detail-item-grid-picture" src={this.state.item.url}/>
        </div>
        <div className="shopping-item-detail-middle-container col-9 col-md-5">

          <img className="detail-item-picture" src={this.state.item.url}/>
        </div>
        <div className="shopping-item-detail-right-container col-12 col-md-4">
          <div className="detail-info">
            <h4>allison paris</h4>
            <h4 className="detail-info-title-description">Cobalt</h4>
            <p>{this.state.item.price}$ for one-time purchase</p>
          </div>
          <div className="detail-form">

            <img className="shopping-item-icon-img" src='https://d1raprm0ezfai1.cloudfront.net/Required+graphics/01.png'/>
            <img className="shopping-item-icon-img" src='https://d1raprm0ezfai1.cloudfront.net/Required+graphics/02.png'/>
            <img className="shopping-item-icon-img" src='https://d1raprm0ezfai1.cloudfront.net/Required+graphics/03.png'/>
            <img className="shopping-item-icon-img" src='https://d1raprm0ezfai1.cloudfront.net/Required+graphics/04.png'/>
            <img className="shopping-item-icon-img" src='https://d1raprm0ezfai1.cloudfront.net/Required+graphics/05.png'/>
            <img className="shopping-item-icon-img" src='https://d1raprm0ezfai1.cloudfront.net/Required+graphics/06.png'/>
            <img className="shopping-item-icon-img" src='https://d1raprm0ezfai1.cloudfront.net/Required+graphics/07.png'/>
            <img className="shopping-item-icon-img" src='https://d1raprm0ezfai1.cloudfront.net/Required+graphics/08.png'/>
            <img className="shopping-item-icon-img" src='https://d1raprm0ezfai1.cloudfront.net/Required+graphics/09.png'/>
            <img className="shopping-item-icon-img" src='https://d1raprm0ezfai1.cloudfront.net/Required+graphics/10.png'/>
            <img className="shopping-item-icon-img" src='https://d1raprm0ezfai1.cloudfront.net/Required+graphics/11.png'/>

            <br></br>
            <br></br>
            <label className="input-zipcode">SUBSCRIPTION</label>
            <br></br>

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
            <a href="/cart">
              <button onClick={() => this.props.addProduct(this.state.item)} className="detail-add-cart">
                ADD TO BAG
              </button>
            </a>

          </div>



        </div>
      </div>

    );
  }

}

export default ProductItem;
/*
<label className="input-zipcode">SIZES</label>
<br></br>
<select className="select-detail">
  <option label="Select"></option>
  <option label="XS"></option>
  <option label="S"></option>
  <option label="M"></option>
</select>
*/
