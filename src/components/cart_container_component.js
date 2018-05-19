import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import OrderSummaryComponent from './order_summary.js';

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
  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("changed");
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
