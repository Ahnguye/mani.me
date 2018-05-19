import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import SplashPage from './splash_page';
import NavMenu from './nav_menu';
import ShoppingComponent from './shopping.js';
import ProductItem from './product_item.js';
import CartComponent from './cart.js';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }


  addProduct = (product) => {
    console.log(product.name);

    let o = this.state.products;
    o[0] = 1;

    this.setState({
      products: o
    });

    console.log(this.state.products[0]);
  }

  removeProduct = (product) => {

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
        <Route path="/about" component={SplashPage} />
        <Route exact path="/shop" component={ShoppingComponent} />
        <Route path="/shop/item/:id" render={this.productItemContainer} />
        <Route path="/cart" render={() => <CartComponent products={this.products} removeProduct={this.removeProduct}/>} />
        <Route path="/goodbye" component={SplashPage} />
        <Route path="/goodbye" component={SplashPage} />
      </div>
    );
  }
}
