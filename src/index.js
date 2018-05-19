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
import AppComponent from './components/app_component.js';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));
