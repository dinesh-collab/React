import React from 'react';
import util from "../util";


export default class Basket extends React.Component {
  

  render(){
    const {cartItems} = this.props;
    return (
      <div className = 'alert alert-info'>
       {(cartItems === 0) ? "Basket is empty " : <div > You have {cartItems.length} items in the Basket </div> }
       {console.log(cartItems.count)}
       {cartItems.length > 0 && 
          <div> 
          <ul>
              {cartItems.map (item =>

                <li>
                <b> {item.title} </b>

                X {item.count}
                <button className ='btn btn-danger'
                onClick = {(e)=> {this.props.handleRemoveFromCart(e,item)}}> X </button>
</li>
                )}
          </ul>
          Total: {util.formatCurrency(cartItems.reduce( (a,c) => a + c.price * c.count ,0) )}
          </div>
       }
        <button className ='btn btn-primary' onClick = {() => alert('CheckOut to be implemented')}> Check Out </button>
      </div>
      );
}}