import React from 'react';
import Products from './Components/Products';
import './App.css';
import Filter from './Components/Filter';
import Basket from './Components/Basket';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      filteredProducts : [],
     products:[]
         };
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:3000/products').then(res => res.json()).then(data => this.setState ({products : data,
      filteredProducts :data}));
  }

  handleChangeSort (e){
    this.setState ({sort:e.target.value});
    this.listProducts();
  }


  handleChangeSize (e){
    this.setState ({size:e.target.value});
    this.listProducts();
  }
  listProducts(){
    this.setState(state => {
      if(state.sort !=='')
      {
        state.products.sort((a,b)=> ((state.sort==='lowest') ? ((a.price > b.price) ? 1 : -1 ) : ( (a.price < b.price )? 1 : -1 ))) ;
      }
      else {
        state.products.sort((a,b)=> (a.id < b.id) ? 1 :-1 );
      }
      if(state.size !== ''){
        return{filteredProducts : state.products.filter(a=> 
          a.availableSizes.indexOf(state.size) >=0
          )}
      }

      return{
        filteredProducts : state.products
      };
    })
  }

  render(){
  return (
    <div className="container">

      <h1> Ecommerce shopping cart</h1>
       <hr/>


        <div className= 'row'>
       <div className='col-md-8'>
        <Filter size = {this.state.size} sort = {this.state.sort} handleChangeSize = {this.handleChangeSize} 
        handleChangeSort = {this.handleChangeSort} count = {this.state.filteredProducts.length} />
       <hr/>
        <Products products = {this.state.filteredProducts} handleAddToCart = {this.handleAddToCart} />
       </div>

        <div className = 'col-md-4'>
          <Basket cartItems = {this.state.cartItems} />
        </div>
      </div>
    </div>
  );}

}

export default App;
