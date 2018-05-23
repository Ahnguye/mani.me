import React, { Component } from 'react';
import { StripeProvider } from 'react-stripe-elements';
import { Elements } from 'react-stripe-elements';
import CartContainerComponent from './cart_container_component';
import OrderComplete from './order_complete.js';

const API_KEY_DEPLOY = 'pk_live_z2bUCYDIKJEP7aMEFXmoudOh';
const API_KEY_DEV = 'pk_test_TWNG2QuoprQhnRNOECF6KKtT';

class CartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false
    }
  }

  setOrderStatus = (status) => {
    this.setState({
      isComplete: status
    });
    console.log("status:" + status);
  }

  render() {
    const isComplete = this.state.isComplete;
    const orderPage = isComplete ? (
      <OrderComplete />
    ) : (
      <StripeProvider apiKey="pk_live_z2bUCYDIKJEP7aMEFXmoudOh">
        <Elements>
          <CartContainerComponent
            setOrderStatus={this.setOrderStatus}
            products={this.props.products}
            addProduct={this.props.addProduct}
            removeProduct={this.props.removeProduct}/>
        </Elements>
      </StripeProvider>
    );

    //console.log(this.props.products);
    return (
      <div>
        {orderPage}
      </div>
    );
  }
}

export default CartComponent;
