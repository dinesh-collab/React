import React from 'react';

const ImageLinkForm = ({onclick,onButtonSubmit}) =>{

	return(


<div>

<p className= 'f4  b-ns'>Paste the url here to detect face in the Image. </p>
		<div className='center'>
		<div className= 'br3 shadow-5 center pa4'>

			<input className = ' w-70 pa2 br3 'type = 'text' onClick = {onclick}/>
			<button className='w-30  pa2 f3 grow link' onClick = {onButtonSubmit} > Detect </button>
		</div>
		</div>
		</div>
		);
}
export default ImageLinkForm;

