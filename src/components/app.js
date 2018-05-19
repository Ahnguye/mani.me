import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import SplashPage from './components/splash_page';
import NavMenu from './components/nav_menu';
import ShoppingComponent from './components/shopping.js';
import ProductItem from './components/product_item.js';
import CartComponent from './components/cart.js';

export default class App extends Component {


  const productItemContainer = ({ match }) => (
    <div>
      <ProductItem addProduct={addProduct} id={match.params.id}/>
    </div>
  )

  var products = [];

  const addProduct = (product) => {
    products[product] += 1;
  }

  const removeProduct = (product) => {

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavMenu />

          <Route exact path="/" component={SplashPage} />
          <Route path="/about" component={SplashPage} />
          <Route exact path="/shop" component={ShoppingComponent} />
          <Route path="/shop/item/:id" render={productItemContainer} />
          <Route path="/cart" render={() => <CartComponent products={products} removeProduct={removeProduct}/>} />
          <Route path="/goodbye" component={SplashPage} />
          <Route path="/goodbye" component={SplashPage} />
        </div>

      </BrowserRouter>
    );
  }
}
