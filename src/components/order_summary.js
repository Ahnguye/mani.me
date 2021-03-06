import React, { Component } from 'react';
import StripeCard from './stripe_card.js';

class OrderSummaryComponent extends Component {
  constructor(props) {
    super(props);
  }

  calculateTotal = () => {
    let _products = this.props.products;
    let _total = 0;

    for (let i = 0; i < _products.length; ++i) {
      _total += _products[i].quantity;
    }
    //console.log(_products);

    if(this.props.subscription == 3) {
      if(_total <= 3)
        return 70;
      else
        return 70 + ((_total - 3) * 30);
    }
    if(this.props.subscription == 2) {
      if(_total <= 2)
        return 50;
      else
        return 50 + ((_total - 2) * 30);
    }

    return 30 * _total;
  }

  createUserItems(products){
    return (
      <div className="order-summary-element-container">
        <div className="order-summary-element-header">
          <div className="order-summary-element-header-top-left">ARRIVES ON</div>
          <div className="order-summary-element-header-top-right"></div>
          <div className="order-summary-element-header-bottom-left">SAMPLE DATE</div>
          <div className="order-summary-element-header-bottom-right"></div>
        </div>
        <div className="">
          {products.map((product) => <div>{this.createUserItem(product)}</div>)}
        </div>

      </div>


    );
  }
  /*
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
      <button type="button" className="Shipping-button" onClick={() => this.props.addProduct(item)}>+</button>
      <button type="button" className="Shipping-button" onClick={() => this.props.removeProduct(item)}>-</button>

    </div>
  </div>
  */

  createUserItem = (item) => {
    return (

        <div className="order-summary-element-body">
          <div className="order-summary-element-body-left">
            <div className="order-summary-element-body-img-container">
              <img src={item.url} className="order-summary-element-body-img"/>
            </div>
          </div>
          <div className="order-summary-element-body-right">
            <div className="order-summary-element-body-right-section">
              <span className="order-summary-element-body-title">{item.name}</span>
              <span className="order-summary-element-body-quantity">{item.quantity}</span>
              <button type="button" className="order-summary-element-body-button" onClick={() => this.props.addProduct(item)}>ADD</button>
              <button type="button" className="order-summary-element-body-button" onClick={() => this.props.removeProduct(item)}>REMOVE</button>
            </div>
            <div className="order-summary-element-body-right-section">
              <span className="order-summary-element-body-price">${item.price}.00</span>
              <span className="order-summary-element-body-size"> </span>
            </div>
          </div>
        </div>

    );
  }

  render() {
    return(
      <div className="row col-12 justify-content-center order-wrapper">
        <div className="col-12 col-md-4 order-form-container">
          <label className="rb">Email</label>
          <input type="text" name="email" className="Input-box" placeholder="" onChange={(ev) => this.props.handleChange(ev, 'email')}/>
          <label className="rb">First Name</label>
          <input type="text" name="firstName" className="Input-box" placeholder="" onChange={(ev) => this.props.handleChange(ev, 'firstName')}/>
          <label className="rb">Last Name</label>
          <input type="text" name="lastName" className="Input-box" placeholder="" onChange={(ev) => this.props.handleChange(ev, 'lastName')}/>
          <label className="rb">Address</label>
          <input type="text" name="address" className="Input-box" placeholder="" onChange={(ev) => this.props.handleChange(ev, 'address')}/>
          <label className="rb">City</label>
          <input type="text" name="city" className="Input-box" placeholder="" onChange={(ev) => this.props.handleChange(ev, 'city')}/>

          <label className="rb">Country</label>
          <input type="text" name="country" className="Input-box" placeholder="" onChange={(ev) => this.props.handleChange(ev, 'country')}/>

          <label className="rb">Zip Code</label>
          <input type="text" name="zipCode" className="Input-box" placeholder="" onChange={(ev) => this.props.handleChange(ev, 'zipCode')}/>
          <label className="rb">Phone Number</label>
          <input type="text" name="phoneNumber" className="Input-box" placeholder="" onChange={(ev) => this.props.handleChange(ev, 'phoneNumber')}/>

        </div>
        <div className="col-12 col-md-4 order-card-container">
          <StripeCard />
          <br></br>

          <button type="button" onClick={(ev) => this.props.setSubscription(ev, 1)} className="Checkout-submit-button-3">TREAT.ME</button>
          <button type="button" onClick={(ev) => this.props.setSubscription(ev, 2)} className="Checkout-submit-button-3">PAMPER.ME</button>
          <button type="button" onClick={(ev) => this.props.setSubscription(ev, 3)} className="Checkout-submit-button-3">DAZZLE.ME</button>


        </div>
        <div className="col-12 col-md-3 order-summary-container">
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
          <label className="rb">Enter Promo Code</label>
          <input type="text" className="Input-box" placeholder="" />
          <button type="submit" className="Checkout-submit-button">SUBMIT ORDER</button>
      </div>
      <div className="col-12">
        {this.createUserItems(this.props.products)}
      </div>
    </div>

    );
  }
}

export default OrderSummaryComponent;
