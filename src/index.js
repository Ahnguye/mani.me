import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import SplashPage from './components/splash_page';
import NavMenu from './components/nav_menu';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Temp extends React.Component {
  render() {return <div>test</div>};
}
class Temp2 extends React.Component {
  render() {return <div>test2</div>};
}


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <NavMenu />

        <Route path="/" component={SplashPage} />
        <Route path="/about" component={Temp2} />
        <Route path="/goodbye" component={Temp2} />
        <Route path="/goodbye" component={Temp2} />
        <Route path="/goodbye" component={Temp2} />
        <Route path="/goodbye" component={Temp2} />
      </div>

    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));
