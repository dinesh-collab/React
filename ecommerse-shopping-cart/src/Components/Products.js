import React from 'react';

import util from "../util";

export default class Products extends React.Component {
  

  render(){
    const productItems = this.props.products.map(product => (
      <div className = 'col-md-4' key = {product.id}>

        <div className = 'thumbnail text-center shadow-lg p-3 mb-5 bg-white rounded img-fluid  '>
          <a href = {`#${product.id}`} onClick = {(e)=> this.props.handleAddToCart(e,product)}>
            <img className='view overlay zoom' src ={ `/products/${product.sku}_2.jpg`} alt= {product.title} />
            <p>
              {product.title}
            </p>
            <div>
                <b> {util.formatCurrency(product.price)} </b>
                <button className ='btn btn-primary example hoverable' onClick = {(e)=> this.props.handleAddToCart(e,product)}> add to cart </button>
                
            </div>
          </a>
        </div>
      </div>

      )
      )
    


  return (
    <div className ='row'>
      {productItems}
      </div>
    
  )
}
}

