import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const urls =
  [
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_1.png", name: "1" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_3.png", name: "2" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_4.png", name: "3" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_5.png", name: "4" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_6.png", name: "5" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_7.png", name: "6" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_8.png", name: "7" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_9.png", name: "8" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_11.png", name: "9" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_10.jpg", name: "10" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_12.jpg", name: "11" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Heo_13.jpg", name: "12" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Gems.png", name: "13" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Flag.png", name: "14" },
    { url: "https://d1raprm0ezfai1.cloudfront.net/Website+images+used/shop/Color+dots.png", name: "15" },
  ];

class ShoppingItems extends Component {

  render() {
    const shoppingItemsArray = urls.map((item) => {
      const link = '/shop/item/' + item.name;
      return (
        <Link to={link} className="shopping-item col-md-2">
          <img className="shopping-item-picture" src={item.url}/>
          <div className="shopping-item-info">
            <div className="shopping-item-title">Nail {item.name}</div>
            <div className="shopping-item-price">Description</div>
          </div>
        </Link>
      );
    });




    return (
      <div className=" row-eq-height">
        {shoppingItemsArray}

      </div>
    );
  }
}

export default ShoppingItems;
