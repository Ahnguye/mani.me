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

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const productItemContainer = ({ match }) => (
  <div>
    <ProductItem id={match.params.id}/>
  </div>
)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <NavMenu />

        <Route exact path="/" component={SplashPage} />
        <Route path="/about" component={SplashPage} />
        <Route exact path="/shop" component={ShoppingComponent} />
        <Route path="/shop/item/:id" render={productItemContainer} />
        <Route path="/cart" component={CartComponent} />
        <Route path="/goodbye" component={SplashPage} />
        <Route path="/goodbye" component={SplashPage} />
      </div>

    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));
