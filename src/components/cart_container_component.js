import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import OrderSummaryComponent from './order_summary.js';
import axios from 'axios';

class CartContainerComponent extends React.Component {

  constructor(props) {
    super(props);
    //let x = this.props.products.map((product) => product.price*product.quantity).reduce((accumulator, current) => accumulator+=current, 0);
    this.state = {
      total: 0, //x
      shipping: '3 Day Shipping',
      email: '',
      firstName: '',
      lastName: '',
      address: '',
    };
  }

  onToken = (token, products) => {
    /*
      var _products = [];
      for(var i = 0; i < products.length; ++i) {
        _products[i] = {};
        _products[i].name = products[i].name;
        _products[i].price = products[i].price;
      }
    */

    //name: "15", category: 2, price: 30.00
    console.log(token);
    axios.post("https://manimebackend.herokuapp.com/charge",
      {
        token: token,
        //products: _products
      }).then(console.log("success")).catch(console.log("failed"));
  }


  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
      .createToken()
      .then(payload => this.onToken(payload, this.props.products));
    } else {
      console.log('Form submitted before Stripe.js loaded.');
    }
  }

  handleChange = () => {

  }

  render() {
    return (
      <div>
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <OrderSummaryComponent handleChange={this.handleChange()} products={this.props.products} addProduct={this.props.addProduct} removeProduct={this.props.removeProduct}/>
        </form>
      </div>
    );
  }
}

export default injectStripe(CartContainerComponent);
