
//// DEPENDENCIES, COMPONENTS, STYLES ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import './CartItem.css';









//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class CartItem extends Component {

  handleAddQuantity = () => {
    this.props.addQuant(this.props.item.name)
  }

  handleSubQuantity = () => {
    this.props.subQuant(this.props.item.name)
  }


//// RENDER /////////////////////////////////////////////////////////////
  render() {

    console.log("CartItem rendered")

    let itemTotal = (this.props.item.price * this.props.item.quantity).toFixed(2)

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="CartItem">


        <img src={this.props.item.photo} alt={this.props.item.name}/>


        <div className="ItemDescription">
          <h3>{this.props.item.name}</h3>
          <h5>PRICE: ${this.props.item.price.toFixed(2)}</h5>
        </div>


        <div className="addSubQuantDiv">

          <p>qty: {this.props.item.quantity}</p>

          <div className="addSubQuantButtons">
            <button onClick={this.handleAddQuantity}>+</button>
            <button onClick={this.handleSubQuantity}>-</button>
          </div>

        </div>

        <div className="itemTotalDiv">
          <h5>ITEM TOTAL:</h5>
           {itemTotal}
        </div>

      </div>
    );
  }
}






//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default CartItem;





// END ///////////////////////////////////////////////////////////////////
