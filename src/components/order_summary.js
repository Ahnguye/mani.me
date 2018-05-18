import React, { Component } from 'react';

class OrderSummaryComponent extends Component {

  calculateTotal = () => {
    /*
    let _products = this.props.products;
    let _total = 0;

    console.log(_products);
    for (let i = 0; i < _products.length; ++i) {
      _total += _products[i].price;
    }
    return _total;
    */
    return 0;
  }

  render() {
    return(
      <div className="Checkout-container">

        <div className="Checkout-middle-container">
          <div className="Checkout-left-element">
            <label className="rb">Email</label>
            <input type="text" name="email" className="Input-box" placeholder="" onChange={this.props.handleChange}/>
            <label className="rb">First Name</label>
            <input type="text" name="firstName" className="Input-box" placeholder="" onChange={this.props.handleChange}/>
            <label className="rb">Last Name</label>
            <input type="text" name="lastName" className="Input-box" placeholder="" onChange={this.props.handleChange}/>
            <label className="rb">Address</label>
            <input type="text" name="address" className="Input-box" placeholder="" onChange={this.props.handleChange}/>
            <label className="rb">City</label>
            <input type="text" name="city" className="Input-box" placeholder="" onChange={this.props.handleChange}/>

            <label className="rb">Country</label>
            <input type="text" name="country" className="Input-box" placeholder="" onChange={this.props.handleChange}/>

            <label className="rb">Zip Code</label>
            <input type="text" name="zipCode" className="Input-box" placeholder="" onChange={this.props.handleChange}/>
            <label className="rb">Phone Number</label>
            <input type="text" name="phoneNumber" className="Input-box" placeholder="" onChange={this.props.handleChange}/>

          </div>
          <div className="Checkout-right-element">
            <div className="h4">ORDER SUMMARY</div>
            <div className="Order-summary-element">
              <span className="Order-summary-left-element">Original Price</span>
              <span className="Order-summary-right-element">${this.calculateTotal()}</span>
              <span className="Order-summary-left-element">Discount</span>
              <span className="Order-summary-right-element">$-0.00</span>
            </div>
            <div className="Order-summary-element">
              <span className="Order-summary-left-element">Subtotal</span>
              <span className="Order-summary-right-element">${this.calculateTotal()}</span>
              <span className="Order-summary-left-element">Shipping</span>
              <span className="Order-summary-right-element">0.00</span>
            </div>
            <div className="Order-summary-element">
              <h2 className="Order-summary-left-element">TOTAL (USD)</h2>
              <h2 className="Order-summary-right-element">${this.calculateTotal()}</h2>
            </div>
            <button className="Checkout-continue-button">SUBMIT ORDER</button>
          </div>

        </div>
        <div className="Checkout-bottom-container"></div>
    </div>


    );
  }
}

export default OrderSummaryComponent;
