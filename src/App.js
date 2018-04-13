
//// DEPENDENCIES, COMPONENTS, STYLES ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import OrderSummary from './Components/OrderSummary/OrderSummary'

import './App.css';






//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class App extends Component {

//// CONSTRUCTOR ////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      subtotal: 0,
      taxEst: 0,
      total: 0,
      totalItems: 0,
      items: [
        {
          name: "oreos",
          photo: "https://images-na.ssl-images-amazon.com/images/I/51-LMhTKyyL._AC_US320_FMwebp_QL65_.jpg",
          price: 2.99,
          quantity: 1
        },
        {
          name: "chips ahoy",
          photo: "https://images-na.ssl-images-amazon.com/images/I/51s5pEI4UPL._AC_US320_FMwebp_QL65_.jpg",
          price: 2.50,
          quantity: 1
        },
        {
          name: "keebler fudge",
          photo: "https://images-na.ssl-images-amazon.com/images/I/51b9t1mCl9L._AC_UL340_SR408,340_FMwebp_QL65_.jpg",
          price: 2.56,
          quantity: 1
        }
      ]
    }
  }



//// DID MOUNT ////////////////////////////////////////////////////////
  componentDidMount () {

    this.calcTotals()

    console.log("App did mount")

  }

//// ADD QUANTITY ////////////////////////////////////////////////////////

  handleAddQuant (name) {

    let itemsCopy = this.state.items
    let index = itemsCopy.findIndex(x => x.name === name)
    itemsCopy[index].quantity += 1

    this.setState({
      items: itemsCopy
    })

    this.calcTotals()
  }


//// SUB QUANTITY ////////////////////////////////////////////////////////

    handleSubQuant (name) {

      let itemsCopy = this.state.items
      let index = itemsCopy.findIndex(x => x.name === name)

      if (itemsCopy[index].quantity > 0) {
        itemsCopy[index].quantity -= 1
      }

      this.setState({
        items: itemsCopy
      })

      this.calcTotals()

    }


//// CALC TOTALS ////////////////////////////////////////////////////////

  calcTotals = () => {
    //// Set Subtotal, Tax, TotalItems ////
    let newSubtotal = 0
    let newTax = 0
    let newTotalItems = 0

    this.state.items.map((item) => {
      return (
        newSubtotal += (item.price * item.quantity),
        newTax += .47 * item.quantity,
        newTotalItems += item.quantity
      )
    })

    //// Set Total ////
    let newTotal= newSubtotal + newTax

    this.setState({
      subtotal: newSubtotal,
      taxEst: newTax,
      total: newTotal,
      totalItems: newTotalItems
    })

  }






//// RENDER /////////////////////////////////////////////////////////////
  render() {

    console.log("App state rendered")


//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="App">

        <header>
          <h1> REACT SHOPPING CART </h1>
          <div className="headerCart">
            <img src="./shoppingcart-icon.png"/>
            <h2> &nbsp; {this.state.totalItems} &nbsp;items in your cart</h2>
          </div>
        </header>

        <div className="Main">
          <ShoppingCart items={this.state.items}
                        addQuant={this.handleAddQuant.bind(this)}
                        subQuant={this.handleSubQuant.bind(this)}
                        totalItems={this.state.totalItems}/>

          <OrderSummary subtotal={this.state.subtotal}
                        taxEst={this.state.taxEst}
                        total={this.state.total}/>
        </div>



      </div>
    );
  }
}






//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default App;





// END ///////////////////////////////////////////////////////////////////
