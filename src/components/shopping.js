import React, { Component } from 'react';
import ShoppingItems from './shopping_items';

class ShoppingComponent extends Component {
  render() {
    // Switch this component out depending on which item is clicked. Function or parameter with correct arguments
    // Must update state from child component ShoppingItems.
    return (
      <div className="">
        <ShoppingItems/>
      </div>
    );
  }
}

export default ShoppingComponent;
