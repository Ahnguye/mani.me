import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export const urls =
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

class ShoppingItems extends Component {

  render() {
    const shoppingItemsArray = urls.map((item) => {
      const link = '/shop/item/' + item.name;
      return (
        <Link to={link} className="shopping-item col-12 col-sm-6 col-md-3 col-lg-2">
          <img className="shopping-item-picture" src={item.url}/>
          <div className="shopping-item-info">
            <div className="shopping-item-title">Title</div>
            <div className="shopping-item-title">Nail {item.name}</div>
            <div className="shopping-item-price">Description</div>
          </div>
        </Link>
      );
    });




    return (
      <div>
        <div className="row-eq-height test">
          {shoppingItemsArray}
        </div>
      </div>

    );
  }
}

export default ShoppingItems;
