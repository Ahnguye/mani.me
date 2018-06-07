import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import OrderSummaryComponent from './order_summary.js';
import axios from 'axios';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

class CartContainerComponent extends React.Component {

  constructor(props) {
    super(props);
    // let x = this.props.products.map((product) => product.price*product.quantity).reduce((accumulator, current) => accumulator+=current, 0);
    this.state = {
      total: 0, //x
      shipping: '3 Day Shipping',
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      zipCode: '',
      phoneNumber: '',
      subscription: 1,
      orderComplete: false
    };
  }

  setSubscription = (ev, num) => {
    //this.setState({ subscription: num });
    ev.preventDefault();
    this.setState({
      subscription: num
    });
  }
  onToken = (token, products) => {
    console.log(this.props.products);
    let _total = 0;
    let totalprice = 0;

    for (let i = 0; i < products.length; ++i) {
      _total += products[i].quantity;
    }
    if(this.state.subscription == 3) {
      if(_total <= 3)
        totalprice = 70;
      else
        totalprice = 70 + ((_total - 3) * 30);
    }
    else if(this.state.subscription == 2) {
      if(_total <= 2)
        totalprice = 50;
      else
        totalprice = 50 + ((_total - 2) * 30);
    }
    else {
      totalprice = 30 * _total;
    }


    console.log(totalprice);

    var formData = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber,
      total: totalprice,
      subscription: this.state.subscription
    }
    //console.log(token);
    axios.post("https://anachrion.com/",
    //axios.post("http://localhost:5000/",
      {
        token: token,
        products: products,
        ...formData
      }).then(response => this.props.setOrderStatus(true)).catch(error => {console.log(error.response)});
      //this.props.setOrderStatus(true);
      //set state
  }


  handleSubmit = (ev) => {
    //console.log('&&&&&&&&&&&&&&&&&', ev);
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
      .createToken()
      .then(payload => this.onToken(payload, this.props.products));
    } else {
      console.log('Form submitted before Stripe.js loaded.');
    }
  }

  handleChange = (ev, key) => {
    this.setState({ [key]: ev.currentTarget.value })
  }

  render() {
    //const submitThrottle = _.debounce(((ev) => this.handleSubmit(ev)), 500);
    return (
      <div>
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <OrderSummaryComponent handleChange={this.handleChange} products={this.props.products}
            addProduct={this.props.addProduct} removeProduct={this.props.removeProduct}
            setSubscription={this.setSubscription} subscription={this.state.subscription}/>
        </form>
      </div>
    );
  }
}

export default injectStripe(CartContainerComponent);
