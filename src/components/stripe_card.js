import React from 'react';
import { CardElement, CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';

class StripeCard extends React.Component {
  render() {
    return (
      <div>
        <label className="rb">Card Number</label>
        <CardNumberElement />
        <label className="rb">Expiration Date</label>
        <CardExpiryElement />
        <label className="rb">Verification Code</label>
        <CardCVCElement />
      </div>


    );
  }
};

export default StripeCard;
