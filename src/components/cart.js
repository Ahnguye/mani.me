import React, { Component } from 'react';
import { StripeProvider } from 'react-stripe-elements';
import { Elements } from 'react-stripe-elements';
import CartContainerComponent from './cart_container_component';

const API_KEY_DEPLOY = 'pk_live_z2bUCYDIKJEP7aMEFXmoudOh';
const API_KEY_DEV = 'pk_test_TWNG2QuoprQhnRNOECF6KKtT';

class CartComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    //console.log(this.props.products);
    return (
      <div>
        <StripeProvider apiKey="pk_live_z2bUCYDIKJEP7aMEFXmoudOh">
          <Elements>
            <CartContainerComponent products={this.props.products} addProduct={this.props.addProduct} removeProduct={this.props.removeProduct}/>
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default CartComponent;
