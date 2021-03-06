import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import SplashPage from './splash_page';
import NavMenu from './nav_menu';
import ShoppingComponent from './shopping.js';
import ProductItem from './product_item.js';
import CartComponent from './cart.js';
import OrderComplete from './order_complete.js';
import AboutComponent from './about_component.js';
import OurTechnologyComponent from './our_technology_component.js';
import PressComponent from './in_the_press_component.js';
import SubscriptionDetailComponent from './subscription_detail.js';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    var _products = localStorage.getItem('products');

    //console.log(_products);
    if (_products) {
      this.state = {
        products: JSON.parse(_products)
      };
    } else {
      this.state = {
        products: []
      };
    }
    //console.log(this.state.products);
  }


  removeProduct = (product) => {

    let currentProduct = {url: product.url, name: product.name, category: product.category, price: product.price, quantity: 1};
    let foundIndex = this.state.products.findIndex((product)=>this.productEqual(product, currentProduct));
    //console.log(product.name);
    if (foundIndex != -1) {
      const newProducts = this.state.products;
      newProducts[foundIndex].quantity -= currentProduct.quantity;
      if (newProducts[foundIndex].quantity < 1) {
        newProducts.splice(foundIndex, 1);
      }
      this.setState({
        products: newProducts
      });
      //console.log("here");
    }
    //console.log(this.state.products);
    localStorage.setItem('products', JSON.stringify(this.state.products));

  }

  addProduct = (product) => {
    //console.log(product);

    let currentProduct = {url: product.url, name: product.name, category: product.category, price: product.price, quantity: 1};
    let foundIndex = this.state.products.findIndex((product)=>this.productEqual(product, currentProduct));

    const newProducts = this.state.products;
    if (foundIndex == -1) {
      newProducts.push(currentProduct);
    } else {
      newProducts[foundIndex].quantity += currentProduct.quantity;
    }
    this.setState({
      products: newProducts
    });
    //console.log(this.state.products);
    localStorage.setItem('products', JSON.stringify(this.state.products));

  }

  productEqual(currentItem, currentProduct) {
    return currentItem.name == currentProduct.name;  // && currentItem.size == currentProduct.size;
  }


  productItemContainer = ({ match }) => (
    <div>
      <ProductItem addProduct={this.addProduct} id={match.params.id}/>
    </div>
  )

  render() {
    return (
      <div>
        <NavMenu />
        <Route exact path="/" component={SplashPage} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/tech" component={OurTechnologyComponent} />
        <Route path="/press" component={PressComponent} />
        <Route path="/treatme" render={() => <SubscriptionDetailComponent subscriptionType={1} />}/>
        <Route path="/pamperme" render={() => <SubscriptionDetailComponent subscriptionType={2} />}/>
        <Route path="/dazzleme" render={() => <SubscriptionDetailComponent subscriptionType={3} />}/>

        <Route exact path="/shop" component={ShoppingComponent} />
        <Route path="/shop/item/:id" render={this.productItemContainer} />
        <Route path="/cart" render={() => <CartComponent products={this.state.products} addProduct={this.addProduct} removeProduct={this.removeProduct}/>} />
        <Route path="/complete" component={OrderComplete} />
      </div>
    );
  }
}
