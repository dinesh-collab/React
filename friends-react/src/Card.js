import React from 'react';

const Card  = (props) => {

	const {id,name,email} = props;
		return (
			
			<div className = 'tc shadow pa3 mr3 bw2 dib br3 ma3 bg-light-green grow '>
			<img alt= 'card' src={`https://robohash.org/${name}`} />
				<div>
					<h2> {name} </h2>
					<h2> {id} </h2>
					<p>{email}</p>
				</div>
		   </div>
			);
	}
	



export default Card ;