import React from 'react';


const Navigation = ({onChange,isSignedIn}) => {
	

if(isSignedIn){
		return(
		<nav style = {{ display : 'flex' ,justifyContent : 'flex-end' }}> 
			<div >

			<p onClick = { () => onChange('signout') } className = 'grow pa4 br3 underline shadow bx'> Sign Out </p>

			</div>
		</nav>);
	}
	else {
			return(
			<nav style = {{ display : 'flex' ,justifyContent : 'flex-end' }}> 
			

			<p onClick = { () => onChange('signin') } className = 'grow pa4 br3 underline shadow bx'> Sign In</p>

		
			<p onClick = { () => onChange('register') } className = 'grow pa4 br3 underline shadow bx'> Register </p>

		
		</nav>);
	}
		
	}


export default Navigation;