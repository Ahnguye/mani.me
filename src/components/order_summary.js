import React, { Component } from 'react';
import StripeCard from './stripe_card.js';

class OrderSummaryComponent extends Component {
  constructor(props) {
    super(props);
  }

  calculateTotal = () => {
    let _products = this.props.products;
    let _total = 0;
    console.log(_products);
    for (let i = 0; i < _products.length; ++i) {
      _total += _products[i].price * _products[i].quantity;
    }
    return _total;
  }
  createUserItems(products){
    return (
      <div>
        {products.map((product) => <div>{this.createUserItem(product)}</div>)}
      </div>
    );
  }
  createUserItem = (item) => {
    return (
      <div className="cart-item-container">
        <img src={item.url} className="cart-item-img ib"/>
        <div className="cart-middle-item ib">
          <div className="cart-middle-left-item ib">
            <span className="cart-item-title">{item.name}</span>
          </div>
          <div className="cart-middle-right-item ib">
            <span className="cart-item-price">${item.price}.00</span>
            <span className="cart-item-size"> </span>
          </div>

        </div>
        <div className="cart-right-item ib">
          <span className="cart-item-quantity">{item.quantity} </span>
          <button className="Shipping-button" onClick={() => this.props.addProduct(item)}>+</button>
          <button className="Shipping-button" onClick={() => this.props.removeProduct(item)}>-</button>

        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="row justify-content-center">
      <div className="col-10 col-md-10">

        <div className="Checkout-middle-container  col-md-12">
          <div className="col-12 col-md-4">
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
          <div className="col-12 col-md-4">
            <StripeCard />
          </div>
          <div className="col-12 col-md-4">
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
              <h4 className="Order-summary-left-element">TOTAL (USD):    ${this.calculateTotal()}</h4>
              <h2 className="Order-summary-right-element"></h2>
            </div>
            <button className="Checkout-submit-button">SUBMIT ORDER</button>
          </div>

        </div>
        <div className="Checkout-middle-container col-12 col-md-12">
          {this.createUserItems(this.props.products)}
        </div>
        <div className="Checkout-bottom-container"></div>
    </div>
    </div>

    );
  }
}

export default OrderSummaryComponent;
