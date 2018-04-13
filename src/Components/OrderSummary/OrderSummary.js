
//// DEPENDENCIES, COMPONENTS, STYLES ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import './OrderSummary.css';






//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class OrderSummary extends Component {



//// RENDER /////////////////////////////////////////////////////////////
  render() {


//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="OrderSummaryAll">

        <div className="OrderSummaryMain">

          <div className="OrderSummaryHeader">
            <h4>summary</h4>
          </div>

          <p>Subtotal: {this.props.subtotal.toFixed(2)}</p>
          <p>Tax: {this.props.taxEst.toFixed(2)}</p>
          <p>Delivery: FREE</p>
          <p id="summaryTotal">Total: {this.props.total.toFixed(2)}</p>

        </div>

        <button className="ProceedButton">proceed to checkout</button>
      </div>
    );
  }
}






//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default OrderSummary;





// END ///////////////////////////////////////////////////////////////////