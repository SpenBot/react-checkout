# React Shopping Cart

Recreate a shopping cart page in React. Your final product should function similarly to [this deployed version](http://shopping-cart-react.surge.sh/) of the component.

## Getting Started

- Fork and clone this repo
- Once you have the app locally, install necessary dependencies with `$ npm install`
- Start the development server locally with `$ npm start`, then visit `localhost:3000` in the browser to view app

## Instructions

Take the existing markup rendered from the `ShoppingCart` component in `src/components/ShoppingCart.js` and change into a fully functioning component. This means that you only have to add functionality -- not markup or styling -- to the existing code!


## Steps

It looks like there's a lot of complicated code here in `src/components/ShoppingCart.js` but really it's all just display. Take a minute to look at the `ShoppingCart` component.



```js
import React, {Component} from 'react';

class ShoppingCart extends Component {
  render(){
    return (
      <div className='cart'>
        <div className='items'>
          <h2> Total: <span>$9.38</span></h2>
          <div className='half right'>
            <a href='#' className='checkout'> Proceed to Checkout</a>
          </div>
          <div className='item'>
            <img  src='https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90' />
            <div className='half'>
              Gaiam Kids Yoga Headband - Pink/Blue
            </div>
            <div className='half'>
              <span className='circle'>-</span>
              <span className='pad-left pad-right'>1</span>
              <span className='circle'>+</span>
              <strong className='right'>$27.92</strong>
            </div>
            <hr />
            <div>
              <a href='#'>remove</a><br />
              <label>
                <input type='checkbox'/> wrap it for $5.99
              </label>
            </div>
          </div>
          <div className='item'>
            <img  src='https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90' />
            <div className='half'>
              Gaiam Kids Yoga Headband - Pink/Blue
            </div>
            <div className='half'>
              <span className='circle'>-</span>
              <span className='pad-left pad-right'>1</span>
              <span className='circle'>+</span>
              <strong className='right'>$27.92</strong>
            </div>
            <hr />
            <div>
              <a href='#'>remove</a><br />
              <label>
                <input type='checkbox'/> wrap it for $5.99
              </label>
            </div>
          </div>
        </div>
        <div className='summary'>
          <h3>order summary</h3>
          <div>
            <strong>subtotal</strong>
            <small> (3 items)</small>
            <strong className='right'>$8.98</strong>
          </div>
          <div>
            <strong>delivery</strong>
            <strong className='right red'>free</strong>
          </div>
          <div>
            <strong>estimated tax</strong>
            <strong className='right'>$0.40</strong>
          </div>
          <hr/>
          <h3>total <span className='right'>$9.38</span></h3>
          <hr/>
          <small>cart number: 1016396673255</small>
        </div>
      </div>
    )
  }
}

export default ShoppingCart
```





### Representing Data

So we have some items with set prices. It would make sense for these to be represented as objects in an array, like so:

```js
const itemsInCart =[
  {
    name: "Gaiam Kids Yoga Headband - Pink/Blue",
    cost: 9.38,
    imgUrl: "https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90",
    quantityInCart: 1
  }, {
    name: "Hamburger Helper",
    cost: 11.52,
    imgUrl: "https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90",
    quantityInCart: 1
  }
```

### Adding State

Next, add a `constructor()` method to `ShoppingCart`. Initialize state here...

```jsx
constructor(props) {
  super(props)
  // initialize state
  this.state = {
    items: itemsInCart,
    total: 0,
    tax: .05 //checkout method .toFixed()
  }
}
```

### Steps To Take Moving Forward

1. In Your Cart component, you will need to create `updateQuantity` and `calcTotal` methods as well as event listeners for those methods
2. You will want to create a nested component for `CartItem`.
    * Create `CartItem` in a separate file and import it into `ShoppingCart`
    * Use `.map` to iterate through your `items`, and return `<CartItem />` with appropriate properties.  
    * Move the code for individual items out of `ShoppingCart` and into the `CartItem` component.
    * You will also need to pass `CartItem` the `updateQuantity` method as `props`.  
3. Replace hard-coded data with the variables referencing `itemsInCart`
4. When `CartItem` calls `updateQuantity` you will want to update state with a new quantity.
    * **NOTE**: Be very careful when updating a nested state.  React won't let you directly update part of a nested object in state.  The best way to do this is to make a `copy` of what you want to update.  Update the copy, then set the state property equal to the updated copy.  
    * `let itemCopy = this.state.items.slice()` creates a *copy*.
    * `let notACopy = this.state.items` creates a *reference*, do not use to update state!
