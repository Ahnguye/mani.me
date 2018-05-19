import React, { Component } from 'react';
import { StripeProvider } from 'react-stripe-elements';
import { Elements } from 'react-stripe-elements';
import CartContainerComponent from './cart_container_component';

class CartComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.products);
    return (
      <div>
        <StripeProvider apiKey="pk_test_TWNG2QuoprQhnRNOECF6KKtT">
          <Elements>
            <CartContainerComponent products={this.props.products} addProduct={this.props.addProduct} removeProduct={this.props.removeProduct}/>
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default CartComponent;
