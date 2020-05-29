import React from 'react';



export default class Filter extends React.Component {
  

  render(){

  return (
    <div className ='row'>
    
    <div className ='col-md-4'>
    {this.props.count} products found.
     </div>

    <div className ='col-md-4'>
      Order By
      <label>
        <select className='form-control' value={this.props.sort} 
        onChange ={this.props.handleChangeSort} >
        <option value=''>select </option>
         <option value='highest'>Highest to lowest </option>
 <option value='lowest'>lowest to Highest </option>
 </select>
      </label>
    </div>

    <div className ='col-md-4'>
 Select Size
      <label>
        <select className='form-control' value={this.props.size} 
        onChange ={this.props.handleChangeSize} >
        <option value=''>ALL </option>
        <option value='S'>S</option>
            <option value='XS'>XS </option>
         <option value='M'>M</option>
             <option value='L'>L </option>
             <option value='XL'>XL </option>
                 <option value='XXL'>XXL </option>
 </select>
      </label>    </div>
      </div>
    
  )
}
}

