import React, { Component } from 'react';
import { StripeProvider } from 'react-stripe-elements';
import { Elements } from 'react-stripe-elements';

class CartComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <StripeProvider apiKey="pk_test_TWNG2QuoprQhnRNOECF6KKtT">
          <Elements>
            <div></div>
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default CartComponent;
