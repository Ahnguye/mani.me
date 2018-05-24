import React, { Component } from 'react';
import ShoppingItems from './shopping_items';

class ShoppingComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: 0
    };
  }

  setCategory = (num) => {
    this.setState({
      category: num
    });
  }

  render() {

    // Switch this component out depending on which item is clicked. Function or parameter with correct arguments
    // Must update state from child component ShoppingItems.
    return (
      <div className="shopping-item-wrapper">
        <div className="shopping-item-side-menu">
          <ul className="side-menu-items">
            <li onClick={() => this.setCategory(0)}>All Designs</li>
            <li onClick={() => this.setCategory(1)}>Seasonal</li>
            <li onClick={() => this.setCategory(2)}>Party</li>
            <li onClick={() => this.setCategory(3)}>Travel</li>
            <li onClick={() => this.setCategory(4)}>Simple</li>
          </ul>
        </div>
        <div className="shopping-item-main-menu">
          <ShoppingItems setCategory={this.setCategory} category={this.state.category}/>
        </div>
      </div>
    );
  }
}

export default ShoppingComponent;
