import React from 'react';

const SearchBox = ({searchfield,onsearchbox}) => {

	return (
			<div >
			<input className= 'ba bw1 br1  bg-washed-green '
			 type = 'search'
			placeholder ='search box'
			onChange = {onsearchbox} />
			</div>
		);
}

export default SearchBox;